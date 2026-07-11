import { useState, useCallback, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import PaymentModal from './PaymentModal';
import {
  School,
  MapPin,
  User,
  Phone,
  Hash,
  CalendarDays,
  Plus,
  Trash2,
  Download,
  Save,
  BookOpen,
  Upload,
  FileSpreadsheet,
  Link,
  X,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { PageContainer } from '../../components/ui';
import { SUBJECTS } from '../../config/subjects';

/* ═══════════════════════════════════════════════════════════════
   SCHOOL INFO DISPLAY ITEMS
   These will be populated from the logged-in school's session.
   ═══════════════════════════════════════════════════════════════ */
const SCHOOL_INFO_ITEMS = [
  { icon: School,       label: 'School Name',                  value: '—' },
  { icon: Hash,         label: 'School Code',                  value: '—' },
  { icon: MapPin,       label: 'School Address',               value: '—' },
  { icon: User,         label: 'Incharge Teacher',             value: '—' },
  { icon: Phone,        label: 'Incharge Teacher Contact No.', value: '—' },
  { icon: CalendarDays, label: 'Date of Submission',           value: new Date().toLocaleDateString('en-IN') },
];

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS  (site-wide theme)
   ═══════════════════════════════════════════════════════════════ */
const PRIMARY_BLUE = '#007BFF';
const HOVER_BLUE   = '#0069D9';
const HEADING_COL  = '#1F2937';
const BODY_COL     = '#4B5563';
const MUTED_COL    = '#9CA3AF';
const BORDER_COL   = '#E5E7EB';
const BG_SECTION   = '#F9FAFB';
const ICON_BG      = '#EFF6FF';
const ICON_COL     = '#1D4ED8';
const LABEL_COLOR  = '#0D9488';

/* ═══════════════════════════════════════════════════════════════
   SUBJECT TABS — build from central config
   ═══════════════════════════════════════════════════════════════ */
const SUBJECT_TABS = SUBJECTS.map((s) => ({
  key: s.slug,
  label: s.shortName,
  abbr: s.abbr,
}));

/* ═══════════════════════════════════════════════════════════════
   HELPER – empty student row
   ═══════════════════════════════════════════════════════════════ */
const emptyRow = () => ({
  id: crypto.randomUUID(),
  srNo: '',
  standard: '',
  studentName: '',
  contactNumber: '',
});

const INITIAL_ROWS = 10;

/* ═══════════════════════════════════════════════════════════════
   FUZZY COLUMN MATCHING
   Maps common CSV header variations → our internal field names.
   ═══════════════════════════════════════════════════════════════ */
const COLUMN_ALIASES = {
  standard: [
    'standard', 'class', 'standard/class', 'standard / class',
    'std', 'grade', 'section', 'class name', 'class_name',
  ],
  studentName: [
    'student name', 'students name', "student's name", 'name',
    'student', 'full name', 'fullname', 'pupil name', 'pupil',
    'student_name', 'students_name',
  ],
  contactNumber: [
    'contact number', 'contact no', 'contact', 'phone', 'mobile',
    'phone number', 'mobile number', 'whatsapp', 'phone no',
    'contact_number', 'phone_number', 'mobile_number', 'tel',
  ],
};

/** Normalise a header string for fuzzy comparison */
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();

/** Given an array of CSV headers, return a mapping { standard, studentName, contactNumber } → header index */
function matchColumns(headers) {
  const mapping = {};
  const normalised = headers.map(norm);

  for (const [field, aliases] of Object.entries(COLUMN_ALIASES)) {
    const idx = normalised.findIndex((h) => aliases.some((a) => h === a || h.includes(a)));
    if (idx !== -1) mapping[field] = idx;
  }
  return mapping;
}

/** Extract a Google Sheets ID from a URL and build a CSV export link */
function getGoogleSheetsCSVUrl(url) {
  // Matches: docs.google.com/spreadsheets/d/{ID}/...
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (!match) return null;
  return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
}

/* ═══════════════════════════════════════════════════════════════
   IMPORT MODAL COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function ImportModal({ open, onClose, onImport, subjectLabel }) {
  const [tab, setTab] = useState('file');        // 'file' | 'sheets'
  const [sheetsUrl, setSheetsUrl] = useState('');
  const [status, setStatus] = useState(null);    // { type: 'success'|'error', msg }
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  if (!open) return null;

  const resetState = () => {
    setStatus(null);
    setLoading(false);
    setSheetsUrl('');
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  /** Parse CSV text and hand rows to parent */
  const processCSV = (csvText, sourceName) => {
    const result = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
    });

    if (result.errors.length && result.data.length === 0) {
      setStatus({ type: 'error', msg: `Could not parse ${sourceName}. Check the file format.` });
      setLoading(false);
      return;
    }

    const headers = result.meta.fields || [];
    const mapping = matchColumns(headers);

    if (!mapping.studentName) {
      setStatus({
        type: 'error',
        msg: `Could not find a "Student Name" column. Found headers: ${headers.join(', ')}`,
      });
      setLoading(false);
      return;
    }

    const rows = result.data
      .map((row) => {
        const vals = Object.values(row);
        return {
          standard: mapping.standard != null ? (vals[mapping.standard] || '').trim() : '',
          studentName: (vals[mapping.studentName] || '').trim(),
          contactNumber: mapping.contactNumber != null ? (vals[mapping.contactNumber] || '').trim() : '',
        };
      })
      .filter((r) => r.studentName); // drop blank rows

    if (rows.length === 0) {
      setStatus({ type: 'error', msg: 'No valid student rows found in the file.' });
      setLoading(false);
      return;
    }

    onImport(rows);
    setStatus({ type: 'success', msg: `${rows.length} student${rows.length > 1 ? 's' : ''} imported successfully!` });
    setLoading(false);

    // Auto-close after a short delay on success
    setTimeout(handleClose, 1200);
  };

  /** Handle file upload */
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setStatus(null);
    setLoading(true);

    const ext = file.name.split('.').pop().toLowerCase();
    const isExcel = ['xlsx', 'xls'].includes(ext);

    if (isExcel) {
      // Read as ArrayBuffer for xlsx
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const workbook = XLSX.read(ev.target.result, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const csvText = XLSX.utils.sheet_to_csv(firstSheet);
          processCSV(csvText, file.name);
        } catch {
          setStatus({ type: 'error', msg: 'Failed to parse Excel file. Make sure it is a valid .xlsx/.xls file.' });
          setLoading(false);
        }
      };
      reader.onerror = () => {
        setStatus({ type: 'error', msg: 'Failed to read the file.' });
        setLoading(false);
      };
      reader.readAsArrayBuffer(file);
    } else {
      // Read as text for CSV
      const reader = new FileReader();
      reader.onload = (ev) => processCSV(ev.target.result, file.name);
      reader.onerror = () => {
        setStatus({ type: 'error', msg: 'Failed to read the file.' });
        setLoading(false);
      };
      reader.readAsText(file);
    }
  };

  /** Handle Google Sheets URL */
  const handleSheetsImport = async () => {
    if (!sheetsUrl.trim()) return;
    setStatus(null);
    setLoading(true);

    const csvUrl = getGoogleSheetsCSVUrl(sheetsUrl.trim());
    if (!csvUrl) {
      setStatus({ type: 'error', msg: 'Invalid Google Sheets URL. Please paste a valid link.' });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(csvUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      processCSV(text, 'Google Sheet');
    } catch {
      setStatus({
        type: 'error',
        msg: 'Could not fetch the spreadsheet. Make sure it is shared as "Anyone with the link".',
      });
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] transition-opacity duration-200"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
        <div
          className="bg-white rounded-sm shadow-2xl w-full max-w-[520px] overflow-hidden border"
          style={{ animation: 'dropdown 0.25s cubic-bezier(0.16, 1, 0.3, 1)', borderColor: BORDER_COL }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: BORDER_COL }}>
            <div>
              <h3 className="text-lg font-bold" style={{ color: HEADING_COL }}>Import Students</h3>
              <p className="text-xs mt-0.5" style={{ color: MUTED_COL }}>
                Import into <span className="font-semibold" style={{ color: PRIMARY_BLUE }}>{subjectLabel}</span>
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Tab switcher */}
          <div className="flex border-b" style={{ borderColor: BORDER_COL }}>
            {[
              { key: 'file', label: 'Upload File', icon: Upload },
              { key: 'sheets', label: 'Google Sheets', icon: FileSpreadsheet },
            ].map(({ key, label, icon: TabIcon }) => (
              <button
                key={key}
                onClick={() => { setTab(key); setStatus(null); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[13px] font-semibold
                  transition-colors duration-200 border-b-2 -mb-px
                  ${tab === key
                    ? 'text-[#1E3A8A] border-[#1E3A8A]'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
              >
                <TabIcon size={15} strokeWidth={2} />
                {label}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {tab === 'file' && (
              <div>
                <label
                  htmlFor="csv-upload"
                  className="flex flex-col items-center justify-center gap-3 py-8 border-2 border-dashed
                    rounded-md cursor-pointer transition-colors duration-200
                    hover:border-[#007BFF] hover:bg-blue-50/30"
                  style={{ borderColor: '#D1D5DB' }}
                >
                  <div
                    className="w-12 h-12 rounded-md flex items-center justify-center"
                    style={{ background: ICON_BG }}
                  >
                    <Upload size={22} style={{ color: ICON_COL }} strokeWidth={2} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold" style={{ color: BODY_COL }}>Click to upload a file</p>
                    <p className="text-xs mt-1" style={{ color: MUTED_COL }}>.csv, .xlsx, or .xls files</p>
                  </div>
                </label>
                <input
                  ref={fileRef}
                  id="csv-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            )}

            {tab === 'sheets' && (
              <div>
                <p className="text-xs mb-3" style={{ color: MUTED_COL }}>
                  Paste a <span className="font-semibold">public</span> Google Sheets link below.
                  The sheet must be shared as "Anyone with the link".
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Link
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                      style={{ color: MUTED_COL }}
                      strokeWidth={2}
                    />
                    <input
                      type="url"
                      value={sheetsUrl}
                      onChange={(e) => setSheetsUrl(e.target.value)}
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      className="w-full pl-9 pr-3 py-2.5 text-[13px] border rounded-md outline-none
                        transition-all text-gray-800 placeholder:text-gray-400
                        border-gray-300 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF]"
                    />
                  </div>
                  <button
                    onClick={handleSheetsImport}
                    disabled={!sheetsUrl.trim() || loading}
                    className="px-4 py-2.5 text-[13px] font-semibold text-white rounded-md
                      transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                      hover:shadow-md active:scale-[0.97]"
                    style={{ background: PRIMARY_BLUE }}
                  >
                    {loading ? 'Importing…' : 'Import'}
                  </button>
                </div>
              </div>
            )}

            {/* Status message */}
            {status && (
              <div
                className={`flex items-start gap-2 mt-4 px-3 py-2.5 rounded-sm text-xs leading-relaxed border ${
                  status.type === 'success'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                {status.type === 'success'
                  ? <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" strokeWidth={2} />
                  : <AlertCircle size={15} className="flex-shrink-0 mt-0.5" strokeWidth={2} />
                }
                <span>{status.msg}</span>
              </div>
            )}

            {loading && tab === 'file' && (
              <div className="flex items-center gap-2 mt-4">
                <div className="w-4 h-4 border-2 border-blue-200 border-t-[#007BFF] rounded-full animate-spin" />
                <span className="text-xs" style={{ color: MUTED_COL }}>Parsing file…</span>
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-6 py-3 border-t" style={{ borderColor: BORDER_COL, background: BG_SECTION }}>
            <p className="text-[11px] leading-relaxed" style={{ color: MUTED_COL }}>
              <span className="font-semibold">Expected columns:</span>{' '}
              Standard/Class, Student's Name, Contact Number.
              Headers are matched flexibly — variations like "Name", "Class", "Phone" etc. work too.
              Supports <span className="font-semibold">.csv</span>, <span className="font-semibold">.xlsx</span>, and <span className="font-semibold">.xls</span> files.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function SchoolPanelPage() {
  /* ── Logged-in user (from localStorage) ──────────────────── */
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  const schoolId = storedUser.id || 1; // Fallback to 1 for dev/testing if not logged in

  /* ── Active subject tab ─────────────────────────────────── */
  const [activeSubject, setActiveSubject] = useState(SUBJECT_TABS[0].key);

  /* ── Import modal state ─────────────────────────────────── */
  const [importOpen, setImportOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isListLocked, setIsListLocked] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('none'); // 'none' | 'pending' | 'verified'

  /* ── Student rows (per subject) ─────────────────────────── */
  const [studentsBySubject, setStudentsBySubject] = useState(() => {
    const init = {};
    SUBJECT_TABS.forEach((tab) => {
      init[tab.key] = Array.from({ length: INITIAL_ROWS }, (_, i) => ({
        ...emptyRow(),
        srNo: String(i + 1),
      }));
    });
    return init;
  });

  useEffect(() => {
    if (!schoolId) return;
    const fetchStudents = async () => {
      try {
        const res = await fetch(`https://olympiad-backend-ko0e.onrender.com/api/schools/${schoolId}/students`);
        if (res.ok) {
          const data = await res.json();
          if (data.isListLocked !== undefined) setIsListLocked(data.isListLocked);
          
          if (data.students && data.students.length > 0) {
            const grouped = {};
            data.students.forEach(s => {
              if (!grouped[s.subjectSlug]) grouped[s.subjectSlug] = [];
              grouped[s.subjectSlug].push({
                id: String(s.id),
                srNo: String(s.srNo),
                standard: s.standard || '',
                studentName: s.studentName || '',
                contactNumber: s.fatherName || ''
              });
            });
            setStudentsBySubject(prev => ({ ...prev, ...grouped }));
          }
        }
      } catch (err) {
        console.error("Failed to fetch students", err);
      }
    };
    fetchStudents();
  }, []);

  const students = studentsBySubject[activeSubject] || [];

  const updateStudent = useCallback((rowId, field, value) => {
    setStudentsBySubject((prev) => ({
      ...prev,
      [activeSubject]: prev[activeSubject].map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      ),
    }));
  }, [activeSubject]);

  const addRow = useCallback(() => {
    setStudentsBySubject((prev) => {
      const current = prev[activeSubject];
      return {
        ...prev,
        [activeSubject]: [
          ...current,
          { ...emptyRow(), srNo: String(current.length + 1) },
        ],
      };
    });
  }, [activeSubject]);

  const removeRow = useCallback((rowId) => {
    setStudentsBySubject((prev) => {
      const updated = prev[activeSubject]
        .filter((r) => r.id !== rowId)
        .map((r, i) => ({ ...r, srNo: String(i + 1) }));
      return { ...prev, [activeSubject]: updated };
    });
  }, [activeSubject]);

  /** Import parsed rows from CSV / Google Sheets */
  const importRows = useCallback((rows) => {
    setStudentsBySubject((prev) => {
      const newRows = rows.map((r, i) => ({
        id: crypto.randomUUID(),
        srNo: String(i + 1),
        standard: r.standard || '',
        studentName: r.studentName || '',
        contactNumber: r.contactNumber || '',
      }));
      return { ...prev, [activeSubject]: newRows };
    });
  }, [activeSubject]);

  const handleSave = async () => {
    if (isListLocked) return alert("List is locked!");
    
    const currentStudents = studentsBySubject[activeSubject]
      .filter(s => s.studentName.trim())
      .map((s, idx) => ({
        srNo: idx + 1,
        standard: s.standard,
        studentName: s.studentName,
        fatherName: s.contactNumber || ''
      }));

    try {
      const res = await fetch(`https://olympiad-backend-ko0e.onrender.com/api/schools/${schoolId}/students`, {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({ subjectSlug: activeSubject, students: currentStudents })
      });
      if (res.ok) {
         alert(`Saved ${currentStudents.length} students for ${activeTab?.label}!`);
      } else {
         alert('Failed to save students');
      }
    } catch(err) {
      console.error(err);
      alert('Error saving students');
    }
  };

  const activeTab = SUBJECT_TABS.find((t) => t.key === activeSubject);

  // --- Calculate Quick Stats ---
  const totalStudents = Object.values(studentsBySubject).reduce((acc, rows) => {
    return acc + rows.filter(r => r.studentName && r.studentName.trim() !== '').length;
  }, 0);

  const activeSubjectsCount = Object.values(studentsBySubject).filter(rows => 
    rows.some(r => r.studentName && r.studentName.trim() !== '')
  ).length;

  const totalFee = totalStudents * 150; // Assuming ₹150 per student
  const isEditingDisabled = isListLocked || paymentStatus === 'pending' || paymentStatus === 'verified';

  return (
    <>
      <Helmet>
        <title>School Panel – NTI Olympiad Student Registration 2024-2025</title>
        <meta
          name="description"
          content="NTI Olympiads Student Registration Panel 2024-2025. Register students for Mathematics, English, Science, IT, and Finance olympiads."
        />
        <link rel="canonical" href="https://ntiolympiad.in/school-panel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="School Panel – NTI Olympiad Student Registration 2024-2025" />
        <meta property="og:description" content="Register students for NTI Olympiad academic competitions." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/school-panel" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School Panel – NTI Olympiad Student Registration 2024-2025" />
        <meta name="twitter:description" content="Register students for NTI Olympiad academic competitions." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />
      </Helmet>

      {/* ════════════════════════════════════════════════════════
          HERO BANNER
          ════════════════════════════════════════════════════════ */}
      <section
        id="school-panel-hero"
        className="w-full py-20 flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 60%, #172554 100%)',
        }}
      >
        {/* decorative circles */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: '#60A5FA' }}
        />
        <div
          className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: '#3B82F6' }}
        />
        <div
          className="absolute top-10 right-1/4 w-40 h-40 rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: '#93C5FD' }}
        />

        <p
          className="relative z-10 text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: '#93C5FD' }}
        >
          Registration Portal
        </p>
        <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          NTI Olympiads Student Registration
        </h1>
        <p className="relative z-10 text-lg sm:text-xl text-blue-200 font-medium mt-3">
          2024 – 2025
        </p>
        <div
          className="relative z-10 mt-5 h-1 w-16 rounded-full"
          style={{ background: '#60A5FA' }}
        />
      </section>

      {/* ════════════════════════════════════════════════════════
          SCHOOL INFORMATION SECTION
          ════════════════════════════════════════════════════════ */}
      <section
        id="school-info-section"
        className="w-full py-12 border-b"
        style={{ background: '#FFFFFF', borderColor: BORDER_COL }}
      >
        <PageContainer className="max-w-[1280px] mx-auto">
          {/* Section heading */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: ICON_BG }}
              >
                <School size={18} style={{ color: ICON_COL }} strokeWidth={2} />
              </div>
              <div
                className="text-[22px] font-extrabold tracking-tight leading-none"
                style={{ color: HEADING_COL }}
              >
                School Information
              </div>
            </div>
            <div
              className="h-[3px] w-11 rounded-full ml-[46px]"
              style={{ background: PRIMARY_BLUE }}
            />
          </div>

          {/* Info display grid — read-only, populated from school session */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {SCHOOL_INFO_ITEMS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: ICON_BG }}
                >
                  <Icon size={15} style={{ color: ICON_COL }} strokeWidth={2} />
                </div>
                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: LABEL_COLOR }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: value === '—' ? MUTED_COL : BODY_COL }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ════════════════════════════════════════════════════════
          QUICK STATS SECTION
          ════════════════════════════════════════════════════════ */}
      <section className="w-full py-8 border-b" style={{ background: '#F8FAFC', borderColor: BORDER_COL }}>
        <PageContainer className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
              <User size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Total Students Opted</p>
                <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalStudents}</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
              <BookOpen size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Active Subjects</p>
                <p className="text-2xl font-extrabold text-gray-900 leading-none">{activeSubjectsCount} <span className="text-sm font-medium text-gray-400">/ {SUBJECT_TABS.length}</span></p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
              {isListLocked ? (
                <CheckCircle2 size={26} style={{ color: '#10B981' }} strokeWidth={1.5} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={26} style={{ color: '#F59E0B' }} strokeWidth={1.5} className="flex-shrink-0" />
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  {isListLocked ? "Verification Status" : "Pending Fee"}
                </p>
                <p className={`text-2xl font-extrabold leading-none ${isListLocked ? 'text-emerald-600' : 'text-gray-900'}`}>
                  {isListLocked ? "Verified" : `₹${totalFee.toLocaleString('en-IN')}`}
                </p>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
              <CalendarDays size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Registration Ends</p>
                <p className="text-lg font-bold text-gray-900 leading-none mt-1">15 Oct 2024</p>
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* ════════════════════════════════════════════════════════
          PROGRESS TRACKER
          ════════════════════════════════════════════════════════ */}
      <section className="w-full py-8 border-b" style={{ background: '#FFFFFF', borderColor: BORDER_COL }}>
        <PageContainer className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[16px] left-[50px] right-[50px] h-[2px] z-0" style={{ background: '#E5E7EB' }}>
              <div className="h-full transition-all duration-500" style={{ width: '33%', background: PRIMARY_BLUE }} />
            </div>

            {/* Step 1: Complete Profile */}
            <div className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm" style={{ background: '#10B981' }}>
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#10B981' }}>Step 1</p>
                <p className="text-[13px] font-semibold text-gray-600 mt-0.5">Complete Profile</p>
              </div>
            </div>

            {/* Step 2: Register Students */}
            <div className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm ring-4 ring-blue-50" style={{ background: PRIMARY_BLUE }}>
                2
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: PRIMARY_BLUE }}>Step 2</p>
                <p className="text-[13px] font-bold text-gray-900 mt-0.5">Register Students</p>
              </div>
            </div>

            {/* Step 3: Complete Fee Payment */}
            <div className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 text-sm font-bold border-2 border-gray-200">
                3
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Step 3</p>
                <p className="text-[13px] font-medium text-gray-400 mt-0.5">Complete Fee Payment</p>
              </div>
            </div>

            {/* Step 4: Download Admit Cards */}
            <div className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 text-sm font-bold border-2 border-gray-200">
                4
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">Step 4</p>
                <p className="text-[13px] font-medium text-gray-400 mt-0.5">Download Admit Cards</p>
              </div>
            </div>

          </div>
        </PageContainer>
      </section>

      {/* ════════════════════════════════════════════════════════
          SUBJECT TABS + STUDENT TABLE
          ════════════════════════════════════════════════════════ */}
      <section
        id="student-registration-section"
        className="w-full py-12"
        style={{ background: BG_SECTION }}
      >
        <PageContainer className="max-w-[1280px] mx-auto">
          {/* ── Subject Tabs ─────────────────────────────────── */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: ICON_BG }}
              >
                <BookOpen size={18} style={{ color: ICON_COL }} strokeWidth={2} />
              </div>
              <div
                className="text-[22px] font-extrabold tracking-tight leading-none"
                style={{ color: HEADING_COL }}
              >
                Student Registration
              </div>
            </div>

            {/* Tabs (Underline style, non-pill) */}
            <div className="flex flex-wrap gap-1 border-b" style={{ borderColor: BORDER_COL }}>
              {SUBJECT_TABS.map((tab) => {
                const isActive = activeSubject === tab.key;
                return (
                  <button
                    key={tab.key}
                    id={`tab-${tab.key}`}
                    onClick={() => setActiveSubject(tab.key)}
                    className={`
                      px-5 py-3 text-[13px] font-semibold transition-all duration-200
                      border-b-2 -mb-px
                      ${isActive
                        ? 'border-[#007BFF] text-[#007BFF]'
                        : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                      }
                    `}
                  >
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.abbr}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Active subject badge ─────────────────────────── */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div
                className="h-6 w-1.5 rounded-full"
                style={{ background: PRIMARY_BLUE }}
              />
              <h2
                className="text-lg font-bold tracking-tight"
                style={{ color: HEADING_COL }}
              >
                {activeTab?.label}
              </h2>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: ICON_BG, color: ICON_COL }}
              >
                {activeTab?.abbr}
              </span>
            </div>

            <div className="flex gap-2">
              {!isEditingDisabled && (
                <>
                  <button
                    id="btn-import-csv"
                    onClick={() => setImportOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium
                      bg-white border rounded-md transition-all duration-200
                      text-gray-600 hover:border-[#007BFF] hover:text-[#007BFF] hover:shadow-sm
                      active:scale-[0.97]"
                    style={{ borderColor: BORDER_COL }}
                  >
                    <Upload size={15} strokeWidth={2} />
                    Import File
                  </button>
                  <button
                    id="btn-add-row"
                    onClick={addRow}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium
                      text-white rounded-md transition-all duration-200
                      hover:shadow-md active:scale-[0.97]"
                    style={{ background: PRIMARY_BLUE }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = HOVER_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY_BLUE)}
                  >
                    <Plus size={15} strokeWidth={2.5} />
                    Add Row
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ── Student Table ────────────────────────────────── */}
          <div className="bg-white rounded-sm border overflow-hidden shadow-sm" style={{ borderColor: BORDER_COL }}>
            {/* Table header */}
            <div
              className="grid items-center px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-b"
              style={{
                gridTemplateColumns: '60px 120px 1fr 180px 50px',
                background: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
                color: '#FFFFFF',
                borderColor: 'transparent',
              }}
            >
              <div>Sr. No.</div>
              <div>Standard / Class</div>
              <div>Student's Name</div>
              <div>Contact Number</div>
              <div className="text-center">Del</div>
            </div>

            {/* Table rows */}
            <div className="divide-y" style={{ borderColor: BORDER_COL }}>
              {students.map((row, idx) => (
                <div
                  key={row.id}
                  className="grid items-center px-4 py-0 transition-colors duration-150 group"
                  style={{
                    gridTemplateColumns: '60px 120px 1fr 180px 50px',
                    background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#EFF6FF')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC')
                  }
                >
                  {/* Sr No */}
                  <div
                    className="text-[13px] font-semibold py-2"
                    style={{ color: MUTED_COL }}
                  >
                    {row.srNo}
                  </div>

                  {/* Standard / Class */}
                  <div className="py-1">
                    <select
                      disabled={isEditingDisabled}
                      value={row.standard}
                      onChange={(e) => updateStudent(row.id, 'standard', e.target.value)}
                      className={`w-full px-2 py-2 text-[13px] bg-transparent border-0 border-b border-transparent
                        outline-none text-gray-700 transition-colors appearance-none
                        ${isEditingDisabled ? 'cursor-not-allowed opacity-70' : 'focus:border-[#007BFF] focus:ring-0 cursor-pointer hover:border-gray-300'}`}
                    >
                      <option value="">Select</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={`Class ${i + 1}`}>
                          Class {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Student Name */}
                  <div className="py-1 pr-3">
                    <input
                      disabled={isEditingDisabled}
                      type="text"
                      value={row.studentName}
                      onChange={(e) => updateStudent(row.id, 'studentName', e.target.value)}
                      placeholder="Enter student name"
                      className={`w-full px-2 py-2 text-[13px] bg-transparent border-0 border-b border-transparent
                        outline-none text-gray-800 placeholder:text-gray-300 transition-colors
                        ${isEditingDisabled ? 'cursor-not-allowed opacity-70' : 'focus:border-[#007BFF] focus:ring-0 hover:border-gray-300'}`}
                    />
                  </div>

                  {/* Contact */}
                  <div className="py-1">
                    <input
                      disabled={isEditingDisabled}
                      type="tel"
                      value={row.contactNumber}
                      onChange={(e) => updateStudent(row.id, 'contactNumber', e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-2 py-2 text-[13px] bg-transparent border-0 border-b border-transparent
                        outline-none text-gray-800 placeholder:text-gray-300 transition-colors
                        ${isEditingDisabled ? 'cursor-not-allowed opacity-70' : 'focus:border-[#007BFF] focus:ring-0 hover:border-gray-300'}`}
                    />
                  </div>

                  {/* Delete */}
                  <div className="flex justify-center">
                    {!isEditingDisabled && (
                      <button
                        onClick={() => removeRow(row.id)}
                        className="p-1.5 rounded-md text-gray-300 opacity-0 group-hover:opacity-100
                          hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        aria-label={`Remove row ${row.srNo}`}
                      >
                        <Trash2 size={14} strokeWidth={2} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {students.length === 0 && (
              <div
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <BookOpen size={40} className="mb-3" style={{ color: MUTED_COL }} strokeWidth={1.5} />
                <p className="text-sm font-medium" style={{ color: BODY_COL }}>
                  No students registered yet
                </p>
                <p className="text-xs mt-1" style={{ color: MUTED_COL }}>
                  Click "Add Row" to begin adding students
                </p>
              </div>
            )}
          </div>

          {/* ── Summary + Action bar ─────────────────────────── */}
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm" style={{ color: MUTED_COL }}>
              <span className="font-semibold" style={{ color: BODY_COL }}>
                {students.filter((s) => s.studentName.trim()).length}
              </span>{' '}
              student{students.filter((s) => s.studentName.trim()).length !== 1 ? 's' : ''} registered
              under <span className="font-semibold" style={{ color: PRIMARY_BLUE }}>{activeTab?.label}</span>
            </p>

            <div className="flex gap-3">
              {isListLocked ? (
                <div className="px-5 py-2.5 bg-emerald-100 text-emerald-800 rounded-md text-[13px] font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} /> Verified & Locked
                </div>
              ) : paymentStatus === 'pending' ? (
                <>
                  <button
                    id="btn-save"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-1.5 px-8 py-3 text-[14px] font-semibold text-white rounded-md transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
                    style={{ background: PRIMARY_BLUE }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = HOVER_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY_BLUE)}
                  >
                    <Save size={16} strokeWidth={2} /> Save Registration
                  </button>
                  <div className="px-5 py-2.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-md text-[13px] font-bold flex items-center gap-2">
                    <AlertCircle size={16} /> Payment Submitted — Pending Verification
                  </div>
                </>
              ) : (
                <>
                  <button
                    id="btn-save"
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-1.5 px-8 py-3 text-[14px] font-semibold text-white rounded-md transition-all duration-200 hover:shadow-lg active:scale-[0.97]"
                    style={{ background: PRIMARY_BLUE }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = HOVER_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = PRIMARY_BLUE)}
                  >
                    <Save size={16} strokeWidth={2} /> Save Registration
                  </button>
                  <button
                    onClick={() => setPaymentModalOpen(true)}
                    disabled={totalFee === 0}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 text-[13px] font-semibold text-white rounded-md bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Proceed to Payment (₹{totalFee})
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 px-4 py-3 rounded-sm border" style={{ borderColor: '#BFDBFE', background: '#EFF6FF' }}>
            <p className="text-xs leading-relaxed" style={{ color: '#1D4ED8' }}>
              <span className="font-bold">Note:</span> Please ensure all student details are accurate before submitting.
              Each subject registration will be submitted separately. You can switch between subjects using the tabs above
              without losing any data.
            </p>
          </div>
        </PageContainer>
      </section>
      {/* ══ Import Modal ══ */}
      <ImportModal
        open={importOpen}
        onClose={() => setImportOpen(false)}
        onImport={importRows}
        subjectLabel={activeTab?.label}
      />

      <PaymentModal 
        open={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
        schoolId={schoolId} 
        amount={totalFee} 
        onPaymentSuccess={() => setPaymentStatus('pending')} 
      />
    </>
  );
}

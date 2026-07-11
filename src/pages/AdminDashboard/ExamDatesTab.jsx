import React, { useState, useEffect } from 'react';
import { Save, AlertCircle } from 'lucide-react';

const HEADING_COL  = '#1F2937';
const MUTED_COL    = '#9CA3AF';
const BORDER_COL   = '#E5E7EB';

const mockDates = [
  { id: 1, section: 'Academic Session Window', description: 'Exam Window', date_value: 'Dec 2025 - Feb 2026' },
  { id: 2, section: 'Registration', description: 'Registration Deadline', date_value: 'November 15, 2025' },
  { id: 3, section: 'Result', description: 'Result Declaration', date_value: 'March 2026' }
];

export default function ExamDatesTab() {
  const [dates, setDates] = useState(mockDates);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // API removed, using static mock data
  }, []);

  const handleChange = (id, value) => {
    setDates(dates.map(d => d.id === id ? { ...d, date_value: value } : d));
  };

  const handleSave = async (id, value) => {
    setSaving(true);
    setTimeout(() => {
      alert('Mock update successful. Hook up your own backend here!');
      setSaving(false);
    }, 500);
  };

  if (loading) return <div className="p-8 text-left text-gray-500">Loading exam dates...</div>;
  if (error) return <div className="p-8 text-left text-red-500 flex items-center gap-2"><AlertCircle /> {error}</div>;

  return (
    <>
      <div className="bg-white border-b px-8 py-6 flex items-center justify-between text-left" style={{ borderColor: BORDER_COL }}>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: HEADING_COL }}>Manage Exam Dates</h1>
          <p className="text-sm mt-1" style={{ color: MUTED_COL }}>Update official timeline information shown on the public exam dates page.</p>
        </div>
      </div>

      <div className="p-8 max-w-full text-left">
        <div className="bg-white border rounded-sm overflow-hidden shadow-sm" style={{ borderColor: BORDER_COL }}>
          <div className="divide-y" style={{ divideColor: BORDER_COL }}>
            {dates.map((item) => (
              <div key={item.id} className="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:bg-gray-50/50 transition-colors">
                <div className="flex-1">
                  <h3 className="text-[14px] font-bold text-gray-900">{item.section}</h3>
                  <p className="text-[12px] text-gray-500 mt-1 font-medium">{item.description}</p>
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-3">
                  <input 
                    type="text" 
                    value={item.date_value} 
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className="w-full px-3 py-2 text-[13px] border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                  <button 
                    onClick={() => handleSave(item.id, item.date_value)}
                    disabled={saving}
                    className="px-4 py-2 bg-[#007BFF] text-white rounded-sm text-[13px] font-bold hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2 shadow-sm whitespace-nowrap"
                  >
                    <Save size={14} strokeWidth={2.5} /> Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

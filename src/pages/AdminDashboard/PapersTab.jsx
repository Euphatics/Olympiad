import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, ExternalLink } from 'lucide-react';
import { SUBJECTS } from '../../config/subjects';

const HEADING_COL  = '#1F2937';
const MUTED_COL    = '#9CA3AF';
const BORDER_COL   = '#E5E7EB';
const BG_SECTION   = '#F9FAFB';

const mockPapers = [
  { id: 1, subject_slug: 'cyber', class_slug: 'class-1', year: '2025-26', paper_url: '#', answer_key_url: '#' },
  { id: 2, subject_slug: 'math', class_slug: 'class-2', year: '2024-25', paper_url: '#', answer_key_url: '#' }
];

const CLASS_LEVELS = [
  { slug: 'class-1', name: 'Class 1' },
  { slug: 'class-2', name: 'Class 2' },
  { slug: 'class-3', name: 'Class 3' },
  { slug: 'class-4', name: 'Class 4' },
  { slug: 'class-5', name: 'Class 5' },
  { slug: 'class-6', name: 'Class 6' },
  { slug: 'class-7', name: 'Class 7' },
  { slug: 'class-8', name: 'Class 8' },
  { slug: 'class-9', name: 'Class 9' },
  { slug: 'class-10', name: 'Class 10' }
];

export default function PapersTab() {
  const [papers, setPapers] = useState(mockPapers);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  
  const [newPaper, setNewPaper] = useState({
    subject_slug: SUBJECTS[0].slug,
    class_slug: CLASS_LEVELS[0].slug,
    year: '',
    paper_url: '',
    answer_key_url: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      alert('Mock add successful. Hook up your own backend here!');
      setPapers([...papers, { id: Date.now(), ...newPaper }]);
      setNewPaper({ ...newPaper, year: '', paper_url: '', answer_key_url: '' });
      setSaving(false);
    }, 500);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this paper?')) return;
    setPapers(papers.filter(p => p.id !== id));
    alert('Mock delete successful.');
  };

  return (
    <>
      <div className="bg-white border-b px-8 py-6 flex items-center justify-between text-left" style={{ borderColor: BORDER_COL }}>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: HEADING_COL }}>Previous Year Papers</h1>
          <p className="text-sm mt-1" style={{ color: MUTED_COL }}>Manage links to previous year question papers and answer keys.</p>
        </div>
      </div>

      <div className="p-8 max-w-full text-left">
        {/* Add New Form */}
        <div className="bg-white border rounded-sm shadow-sm p-6 mb-6" style={{ borderColor: BORDER_COL }}>
          <h2 className="text-[14px] font-bold text-gray-900 mb-4 uppercase tracking-wider">Add New Paper</h2>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Subject</label>
              <select 
                value={newPaper.subject_slug} 
                onChange={e => setNewPaper({...newPaper, subject_slug: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-[13px] focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              >
                {SUBJECTS.map(s => <option key={s.slug} value={s.slug}>{s.abbr}</option>)}
              </select>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Class</label>
              <select 
                value={newPaper.class_slug} 
                onChange={e => setNewPaper({...newPaper, class_slug: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-[13px] focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(c => <option key={c} value={`class-${c}`}>Class {c}</option>)}
              </select>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Year</label>
              <input 
                type="number" 
                required
                value={newPaper.year} 
                onChange={e => setNewPaper({...newPaper, year: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-[13px] focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Paper URL</label>
              <input 
                type="text" 
                placeholder="https://..."
                value={newPaper.paper_url} 
                onChange={e => setNewPaper({...newPaper, paper_url: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-[13px] focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div className="lg:col-span-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Answer Key URL</label>
              <input 
                type="text" 
                placeholder="https://..."
                value={newPaper.answer_key_url} 
                onChange={e => setNewPaper({...newPaper, answer_key_url: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-[13px] focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
            </div>
            <div className="lg:col-span-1">
              <button type="submit" className="w-full px-4 py-2 bg-[#007BFF] text-white rounded-sm text-[13px] font-bold hover:bg-blue-600 flex items-center justify-center gap-2 transition-colors">
                <Plus size={14} strokeWidth={2.5} /> Add
              </button>
            </div>
          </form>
        </div>

        {/* List */}
        <div className="bg-white border rounded-sm shadow-sm overflow-hidden" style={{ borderColor: BORDER_COL }}>
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading papers...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50/50 border-b" style={{ borderColor: BORDER_COL }}>
                  <tr>
                    <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Subject</th>
                    <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Class</th>
                    <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Year</th>
                    <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Links</th>
                    <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px] text-right border-l border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {papers.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-gray-500 text-[13px]">No papers found</td></tr>
                  ) : papers.map(p => (
                    <tr key={p.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900 text-[13px]">{SUBJECTS.find(s=>s.slug===p.subject_slug)?.name || p.subject_slug}</td>
                      <td className="px-5 py-4 text-gray-700 font-medium text-[13px]">Class {p.class_slug.replace('class-', '')}</td>
                      <td className="px-5 py-4 text-gray-700 font-medium text-[13px]">{p.year}</td>
                      <td className="px-5 py-4">
                        <div className="flex gap-4">
                          {p.paper_url && <a href={p.paper_url} target="_blank" rel="noreferrer" className="text-[#007BFF] font-semibold text-[13px] hover:underline flex items-center gap-1.5"><ExternalLink size={14}/> Paper</a>}
                          {p.answer_key_url && <a href={p.answer_key_url} target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold text-[13px] hover:underline flex items-center gap-1.5"><ExternalLink size={14}/> Key</a>}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right border-l border-gray-200">
                        <button onClick={() => handleDelete(p.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors">
                          <Trash2 size={16} strokeWidth={2} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

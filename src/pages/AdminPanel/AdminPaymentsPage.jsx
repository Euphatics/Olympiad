import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPayments = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/payments');
      if (!res.ok) throw new Error('Failed to fetch payments');
      const data = await res.json();
      setPayments(data.payments);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleVerify = async (paymentId, status) => {
    if (!window.confirm(`Are you sure you want to mark this payment as ${status}?`)) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/payments/${paymentId}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes: '' })
      });

      if (!res.ok) throw new Error(`Failed to ${status.toLowerCase()} payment`);
      
      alert(`Payment ${status.toLowerCase()} successfully!`);
      fetchPayments();
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-600">Loading payments...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin: Payment Verifications</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold">School Name</th>
              <th className="px-4 py-3 font-semibold">Amount</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold text-center">Proof</th>
              <th className="px-4 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">No payments found.</td>
              </tr>
            ) : payments.map(p => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <p className="font-semibold text-gray-800">{p.school.schoolName}</p>
                  <p className="text-xs text-gray-500">{p.school.email}</p>
                </td>
                <td className="px-4 py-4 font-medium text-gray-700">₹{p.amount || 0}</td>
                <td className="px-4 py-4">
                  {p.status === 'PENDING' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800"><Clock size={14}/> Pending</span>}
                  {p.status === 'VERIFIED' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800"><CheckCircle size={14}/> Verified</span>}
                  {p.status === 'REJECTED' && <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800"><XCircle size={14}/> Rejected</span>}
                </td>
                <td className="px-4 py-4 text-gray-500 text-xs">
                  {new Date(p.createdAt).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}
                </td>
                <td className="px-4 py-4 text-center">
                  <a href={p.paymentProofUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline">
                    View <ExternalLink size={14} />
                  </a>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {p.status === 'PENDING' ? (
                      <>
                        <button onClick={() => handleVerify(p.id, 'VERIFIED')} className="px-3 py-1.5 bg-emerald-600 text-white rounded text-xs font-medium hover:bg-emerald-700 transition">Verify</button>
                        <button onClick={() => handleVerify(p.id, 'REJECTED')} className="px-3 py-1.5 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition">Reject</button>
                      </>
                    ) : (
                      <span className="text-gray-400 text-xs italic">Done</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

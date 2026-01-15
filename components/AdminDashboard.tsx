import React, { useState, useEffect } from 'react';
import { X, Trash2, Users, CheckCircle, XCircle, Download } from 'lucide-react';

interface RSVP {
  id: number;
  name: string;
  attending: string;
  date: string;
}

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    setRsvps(data);
  }, []);

  const deleteRSVP = (id: number) => {
    const updated = rsvps.filter(r => r.id !== id);
    setRsvps(updated);
    localStorage.setItem('wedding_rsvps', JSON.stringify(updated));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL responses?')) {
      setRsvps([]);
      localStorage.removeItem('wedding_rsvps');
    }
  };

  const attendingCount = rsvps.filter(r => r.attending === 'yes').length;

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-4xl text-gray-800">Organizer Dashboard</h1>
            <p className="text-gray-500 font-sans uppercase tracking-widest text-xs mt-2">Manage your guest list</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#C6DEF1]/30 p-8 rounded-3xl border border-[#C6DEF1]">
            <div className="flex items-center gap-4 mb-2">
              <Users className="text-[#7fb1d6]" />
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Total RSVPs</span>
            </div>
            <p className="text-4xl font-serif text-gray-800">{rsvps.length}</p>
          </div>
          <div className="bg-[#C9E4DE]/30 p-8 rounded-3xl border border-[#C9E4DE]">
            <div className="flex items-center gap-4 mb-2">
              <CheckCircle className="text-[#a8d6cc]" />
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Attending</span>
            </div>
            <p className="text-4xl font-serif text-gray-800">{attendingCount}</p>
          </div>
          <div className="bg-[#F2C6DE]/30 p-8 rounded-3xl border border-[#F2C6DE]">
            <div className="flex items-center gap-4 mb-2">
              <XCircle className="text-[#d9a2c1]" />
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Not Attending</span>
            </div>
            <p className="text-4xl font-serif text-gray-800">{rsvps.length - attendingCount}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Guest Name</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Status</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Date Received</th>
                  <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rsvps.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">No responses received yet.</td>
                  </tr>
                ) : (
                  rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{rsvp.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          rsvp.attending === 'yes' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {rsvp.attending === 'yes' ? 'Attending' : 'Not Attending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">{rsvp.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => deleteRSVP(rsvp.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {rsvps.length > 0 && (
          <div className="mt-8 flex justify-end gap-4">
            <button 
              onClick={clearAll}
              className="text-xs font-bold uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
            >
              Clear All Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
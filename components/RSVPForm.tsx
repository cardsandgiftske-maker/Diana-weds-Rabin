import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to local storage for demo persistence
    const existingRSVPs = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    const newRSVP = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleString()
    };
    
    localStorage.setItem('wedding_rsvps', JSON.stringify([...existingRSVPs, newRSVP]));
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp-section" className="py-24 px-4 bg-[#FAEDCB] scroll-mt-20">
        <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-[2.5rem] shadow-lg border border-white/50 animate-fade-in">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-[#C9E4DE]" />
          </div>
          <h2 className="font-serif text-4xl mb-4 text-gray-800">Thank You!</h2>
          <p className="text-gray-500 italic">Your confirmation has been sent successfully. We can't wait to see you there!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm text-[#C6DEF1] font-bold underline underline-offset-4"
          >
            Edit your response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp-section" className="py-24 px-4 bg-[#FAEDCB] scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-4 text-gray-800">RSVP</h2>
        <p className="text-center text-gray-500 font-sans tracking-widest text-xs uppercase mb-12 font-bold">We look forward to hosting you!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[3rem] shadow-xl border border-white/50">
          <div className="space-y-8">
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-white border-2 border-transparent rounded-2xl p-5 focus:border-[#C6DEF1] outline-none transition-all shadow-inner text-gray-700"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Attending?</label>
              <select 
                className="w-full bg-white border-2 border-transparent rounded-2xl p-5 focus:border-[#C6DEF1] outline-none transition-all shadow-inner text-gray-700"
                value={formData.attending}
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
              >
                <option value="yes">Yes, I'll be there</option>
                <option value="no">Sadly, I can't come</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#C6DEF1] text-gray-700 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#b8d2e8] transition-all transform active:scale-95 font-bold tracking-[0.2em] uppercase text-xs mt-8 shadow-lg"
          >
            <Send size={18} />
            SEND CONFIRMATION
          </button>
        </form>
      </div>
    </section>
  );
};
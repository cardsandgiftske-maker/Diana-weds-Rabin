import React, { useState, useEffect } from 'react';
import Envelope from "./components/Envelope.tsx";
import Hero from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { DressCode } from './components/DressCode';
import { Schedule } from './components/Schedule';
import { GiftInfo } from './components/GiftInfo';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Handle opening the invite without music
  const handleOpenInvite = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[#fdfaf6]">
      {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}

      {!showContent && !isAdminOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-pan"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 scale-90 sm:scale-100 transition-transform duration-700">
            <Envelope onOpen={handleOpenInvite} isOpened={isOpened} />
          </div>
          
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="absolute bottom-4 right-4 text-white/20 hover:text-white/50 text-[10px] uppercase tracking-widest transition-colors"
          >
            Admin
          </button>
        </div>
      )}

      {showContent && !isAdminOpen && (
        <div className="animate-fade-in">
          <Hero />
          <Countdown targetDate="2026-02-07T09:30:00" />
          <EventDetails />
          <DressCode />
          <Schedule />
          <GiftInfo />
          <RSVPForm />
          <Footer onAdminClick={() => setIsAdminOpen(true)} />
          
          <button 
            onClick={() => {
              const element = document.getElementById('rsvp-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#C6DEF1] text-gray-700 px-8 py-3 rounded-full shadow-xl hover:bg-[#b8d2e8] transition-all transform hover:scale-105 z-40 font-bold tracking-widest text-xs uppercase border border-white/50 backdrop-blur-sm"
          >
            Confirm Attendance
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
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
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We use a high-stability source from Wikimedia Commons (Erik Satie - Gymnopédie No. 1)
    // This is public domain and generally allows hotlinking without CORS/Referer issues.
    const audio = new Audio();
    audio.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Erik_Satie_-_Gymnop%C3%A9die_No._1.mp3';
    audio.loop = true;
    audio.preload = 'auto';
    
    const handleError = () => {
      const error = audio.error;
      if (error) {
        console.error(`Audio Error: Code ${error.code} - ${error.message}`);
        
        // If Wikimedia fails, try a secondary very stable fallback
        if (error.code === 4 && audio.src.includes('wikimedia')) {
          console.warn("Primary audio source failed, attempting fallback...");
          audio.src = 'https://cdn.pixabay.com/audio/2023/03/20/audio_a57f8f874b.mp3';
          audio.load();
        }
      }
    };

    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvite = () => {
    setIsOpened(true);
    // Standard practice: Play audio only after explicit user interaction
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => console.log("Audio playback active"))
        .catch(err => {
          console.warn("Playback prevented or failed:", err);
          // Retry on interaction if it was a permission issue
          if (err.name === 'NotAllowedError') {
             console.log("Retrying audio on next interaction...");
          }
        });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !audioRef.current.muted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      if (!newMutedState && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
    }
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
          
          {/* Floating Music Control */}
          <button 
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="fixed bottom-6 left-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all z-50 border border-gray-100"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
          </button>

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

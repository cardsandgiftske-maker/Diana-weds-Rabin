import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="py-32 px-4 bg-[#F2C6DE] text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          {/* Clicking the heart acts as a secret gateway for the couple */}
          <button 
            onClick={onAdminClick}
            className="group transition-transform hover:scale-110 active:scale-95"
            title="Admin Access"
          >
            <Heart 
              className="mx-auto text-white mb-8 drop-shadow-md cursor-pointer group-hover:text-pink-100 transition-colors" 
              fill="white" 
              size={64} 
            />
          </button>
          <h2 className="font-serif text-5xl md:text-7xl text-gray-800 mb-6 drop-shadow-sm font-light">See you there!</h2>
          <p className="font-serif italic text-3xl text-gray-700">With lots of love, Diana & Albert</p>
        </div>
        
        <div className="border-t border-white/30 pt-16 mt-20">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] mb-3 font-bold font-sans">Digital Wedding Invite</p>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-bold font-sans">&copy; 2026 DR Wedding</p>
        </div>
      </div>
    </footer>
  );
};
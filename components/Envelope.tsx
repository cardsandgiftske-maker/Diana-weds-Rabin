import React from 'react';

interface EnvelopeProps {
  onOpen: () => void;
  isOpened: boolean;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen, isOpened }) => {
  return (
    <div className="relative w-72 h-48 sm:w-96 sm:h-64 cursor-pointer group" onClick={onOpen}>
      <div className="absolute inset-0 bg-[#fcf9f4] rounded shadow-xl border-2 border-[#eee7db] transition-transform duration-1000">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/floral-paper.png')` }}></div>
      </div>

      <div 
        className={`absolute top-0 left-0 w-full h-full bg-[#fdfdfd] origin-top transition-all duration-1000 ease-in-out z-20 
        ${isOpened ? 'envelope-rotate-x-180 -translate-y-full opacity-0' : 'envelope-rotate-x-0'}`}
        style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
      >
        <div className="absolute inset-0 bg-[#fefefe] border-b border-gray-200"></div>
      </div>

      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-700
        ${isOpened ? 'opacity-0 scale-150' : 'opacity-100'}`}
      >
        {/* Pink seal from palette */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#F2C6DE] rounded-full shadow-lg flex items-center justify-center border-4 border-[#e5b7d1]">
           <span className="font-serif italic text-white text-xl sm:text-2xl select-none">DR</span>
           <div className="absolute inset-0 rounded-full border border-white/20 scale-90"></div>
        </div>
      </div>

      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-4 transition-opacity duration-500 ${isOpened ? 'opacity-0' : 'opacity-100'}`}>
        <p className="font-serif italic text-gray-400 text-lg">A special invitation for you</p>
      </div>

      {!isOpened && (
        <>
          {/* Mint accents from palette */}
          <div className="absolute -top-4 -left-4 w-12 h-12 opacity-40 text-[#C9E4DE]">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 0C60 20 80 40 100 50C80 60 60 80 50 100C40 80 20 60 0 50C20 40 40 20 50 0Z" /></svg>
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 opacity-40 text-[#C9E4DE] rotate-180">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 0C60 20 80 40 100 50C80 60 60 80 50 100C40 80 20 60 0 50C20 40 40 20 50 0Z" /></svg>
          </div>
        </>
      )}
    </div>
  );
};
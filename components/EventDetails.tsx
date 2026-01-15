import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#C9E4DE]">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center text-gray-700 shadow-sm">
            <MapPin size={32} />
          </div>
        </div>
        
        <h2 className="font-serif text-4xl text-center mb-6 text-gray-800">Venue & Location</h2>
        <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed italic">
          We are overjoyed to host our celebration at the beautiful Leilani Gardens in the heart of Kikuyu.
        </p>
        
        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] overflow-hidden shadow-xl border border-white/50">
          <div className="p-8 md:p-12 text-center">
            <h3 className="font-serif text-3xl mb-2 text-gray-800">Leilani Gardens</h3>
            <p className="text-gray-500 font-sans text-xs mb-8 uppercase tracking-widest font-bold">Kikuyu, Kenya</p>
            
            <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-8 shadow-inner border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                alt="Leilani Gardens Venue" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <MapPin className="text-[#C9E4DE]" size={30} />
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/Leilani+Gardens+Kikuyu+Kenya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-800 text-white px-12 py-5 rounded-full hover:bg-black transition-all font-bold text-xs tracking-[0.2em] shadow-lg"
            >
              <Navigation size={18} />
              OPEN IN GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
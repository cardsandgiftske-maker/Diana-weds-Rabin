import React from 'react';
import { Gift, Mail } from 'lucide-react';

export const GiftInfo: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#F7D9C4]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center text-gray-700 shadow-sm">
            <Gift size={32} />
          </div>
        </div>
        
        <h2 className="font-serif text-4xl mb-6 text-gray-800">Wedding Gifts</h2>
        <div className="bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[3rem] shadow-xl border border-white/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAEDCB] rounded-bl-full -mr-12 -mt-12 opacity-40"></div>
          
          <p className="text-gray-600 mb-12 leading-relaxed italic text-lg font-serif">
            "Your presence is our greatest gift. However, if you wish to appreciate us, please consider an enveloped gift or an electronic transfer."
          </p>
          
          <div className="space-y-6 max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-3 text-gray-500">
              <Mail size={20} />
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase font-bold">Electronic Transfer</span>
            </div>
            <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-[#F7D9C4] font-mono text-gray-700 select-all tracking-wide text-sm md:text-base shadow-inner">
              <div className="mb-3 font-bold">Diana: 0790733991</div>
              <div className="font-bold">Albert: 0706610774</div>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-6 font-bold">With heartfelt gratitude!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
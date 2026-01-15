import React from 'react';
import { Shirt, Sparkles } from 'lucide-react';

export const DressCode: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-4 text-gray-800">Dress Code</h2>
        <p className="text-gray-400 font-sans tracking-widest text-xs uppercase mb-12 font-medium">Elegant & Pastel</p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#C6DEF1]/50 p-12 rounded-[2.5rem] shadow-sm border border-[#C6DEF1] transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#7fb1d6]">
              <Shirt size={32} />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-gray-800">For Gentlemen</h3>
            <p className="text-gray-600 font-sans text-sm tracking-wide leading-relaxed font-medium">
              Black Tie — Formal suit or tuxedo.
            </p>
          </div>
          
          <div className="bg-[#F2C6DE]/50 p-12 rounded-[2.5rem] shadow-sm border border-[#F2C6DE] transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#d9a2c1]">
              <Sparkles size={32} />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-gray-800">For Ladies</h3>
            <p className="text-gray-600 font-sans text-sm tracking-wide leading-relaxed font-medium">
              Elegant dresses in Pastel Colors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
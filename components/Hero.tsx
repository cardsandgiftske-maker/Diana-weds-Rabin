import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Zoom and Parallax Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax Layer */}
        <div 
          className="absolute inset-0"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform'
          }}
        >
          {/* Background Image: Elegant wedding decor with added blur for readability */}
          <div 
            className="absolute -top-[20%] -bottom-[20%] inset-x-0 bg-cover bg-center animate-subtle-zoom blur-[3px]"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop')` 
            }}
          >
          </div>
          {/* Elegant overlay: Dark gradient and enhanced backdrop blur to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Hero Content - Elevated with drop shadows and semi-transparent backgrounds */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-up-long">
          <span className="block font-sans tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 opacity-90 drop-shadow-xl text-[#DBCDF0] font-black">
            The Wedding of
          </span>
          
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-2xl font-light tracking-tight leading-none">
              Diana Kajuju
            </h1>
            
            <div className="flex items-center justify-center my-8 w-full">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#DBCDF0]/60 to-transparent"></div>
              <span className="mx-8 font-serif italic text-4xl md:text-5xl drop-shadow-2xl">&</span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#DBCDF0]/60 to-transparent"></div>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 drop-shadow-2xl font-light tracking-tight leading-none">
              Albert Rabin
            </h1>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="backdrop-blur-lg bg-white/10 border border-white/30 px-12 py-5 rounded-full shadow-2xl">
              <p className="font-sans tracking-[0.3em] text-sm md:text-lg uppercase font-bold text-white">
                February 07, 2026
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-[#DBCDF0] drop-shadow-2xl">
              <span className="h-px w-4 bg-[#DBCDF0]"></span>
              <p className="font-serif italic text-xl md:text-3xl tracking-wide text-white">
                Leilani Gardens, Kikuyu, Kenya
              </p>
              <span className="h-px w-4 bg-[#DBCDF0]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Down Mouse Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <div className="w-[26px] h-[45px] border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-dot"></div>
        </div>
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-white font-bold">Scroll</span>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-24 px-4 bg-[#FAEDCB] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-4xl mb-4 text-gray-700">Saving the Date</h2>
        <p className="text-gray-500 font-sans tracking-widest text-[10px] uppercase mb-12">Counting down to our special day</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-white/40 transition-all hover:shadow-lg">
              <span className="block font-serif text-4xl md:text-5xl text-gray-800 mb-2 font-light">{item.value}</span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
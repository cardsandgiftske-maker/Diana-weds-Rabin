import React from 'react';
import { 
  Heart, 
  Clock, 
  Mic2, 
  Music, 
  BookOpen, 
  Sparkles, 
  PenTool, 
  StepForward, 
  Utensils, 
  PartyPopper, 
  Users, 
  Cake, 
  Disc, 
  Smile 
} from 'lucide-react';

const events = [
  { time: '09:30 AM', label: 'Guest Arrival & Seating', icon: Clock, description: 'Soft background music as guests settle in.' },
  { time: '11:00 AM', label: 'Processional', icon: Heart, description: 'Bridal Party & Bride’s Entrance.' },
  { time: '11:20 AM', label: 'Opening Prayer & Welcome', icon: Mic2, description: 'By the officiant.' },
  { time: '11:25 AM', label: 'Praise & Worship', icon: Music, description: 'Citam Kikuyu Praise Team.' },
  { time: '11:35 AM', label: 'Preaching', icon: BookOpen, description: 'Rev. Njoroge (Redeemed Gospel Church, Kasarani, Naivasha).' },
  { time: '11:45 AM', label: 'Exchange of Vows & Rings', icon: Sparkles, description: 'Albert & Diana declare their love and commitment.' },
  { time: '12:00 PM', label: 'Signing of Marriage Certificate', icon: PenTool, description: 'Official documentation and photo session.' },
  { time: '12:30 PM', label: 'Recessional', icon: StepForward, description: 'Couple exits, followed by bridal party.' },
  { time: '01:00 PM', label: 'Lunch Reception', icon: Utensils, description: 'Guests move to reception area; refreshments and main meal.' },
  { time: '02:30 PM', label: 'Grand Entrance', icon: PartyPopper, description: 'Celebratory music and applause.' },
  { time: '03:30 PM', label: 'Speeches & Toasts', icon: Users, description: 'Parents, TotalEnergies & Huduma colleagues.' },
  { time: '04:00 PM', label: 'Cake & Champagne', icon: Cake, description: 'Sweet moments captured.' },
  { time: '04:40 PM', label: 'Entertainment', icon: Disc, description: 'Live performance / DJ performance.' },
  { time: '05:30 PM', label: 'Vote of Thanks', icon: Smile, description: 'Closing remarks and farewell.' },
];

export const Schedule: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#DBCDF0]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-5xl text-center mb-16 text-gray-800">Our Program</h2>
        
        <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/50 shadow-lg">
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="hidden md:block w-32 text-right">
                  <span className="text-gray-600 font-sans font-bold text-xs tracking-widest">{event.time}</span>
                </div>
                
                <div className="flex-shrink-0 z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-700 shadow-sm">
                    <event.icon size={20} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <span className="md:hidden block text-gray-600 font-sans font-bold text-[10px] tracking-widest mb-1">{event.time}</span>
                  <h3 className="font-serif text-xl text-gray-900 leading-tight">{event.label}</h3>
                  <p className="text-gray-500 italic text-sm mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
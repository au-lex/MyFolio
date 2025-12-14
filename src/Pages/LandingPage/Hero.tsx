import React from 'react';
import { Mail, Calendar } from 'lucide-react';

// Reusable Stat Component
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <section className="flex flex-col items-center justify-center text-center">
    <span className="text-2xl md:text-4xl font-bold text-white mb-2">{value}</span>
    <span className="text-xs md:text-sm text-gray-400 font-medium">{label}</span>
  </section>
);

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center pt-[2rem] md:pt-[4rem] ">
      <section className="w-full max-w-5xl space-y-12">
        
    
        <section className=" mx-auto lg:max-w-none lg:flex lg:items-start lg:gap-10 lg:border-none lg:bg-transparent">
          
          {/* HEADER (Mobile: Image + Name side-by-side) */}
          <section className="flex flex-row lg:flex-col items-center lg:items-start gap-5 mb-6 lg:mb-0 lg:w-1/3">
            
            {/* Image Container */}
            <section className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[18rem] lg:h-[18rem] shrink-0 rounded-2xl overflow-hidden relative shadow-2xl border border-white/5">
              <img 
                src="https://pbs.twimg.com/profile_images/1992798731519873024/0MhHQNQz_400x400.jpg" 
                alt="Boniface Ifebuche" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </section>

            {/* Name/Intro (Visible here on Mobile, but we structure it to flow naturally) */}
            <section className="lg:hidden flex flex-col items-start">
               <section className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-1">
                <span className="text-lg">👋</span>
                <span className='text-white/80 uppercase tracking-wide text-xs'>Hello I Am</span>
              </section>
              <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Boniface <br /> Ifebuche
              </h1>
            </section>
          </section>

          {/* CONTENT (Bio + Buttons) */}
          <section className="flex-1 text-left space-y-6 lg:mt-4">
            
            {/* Desktop Only Header (Hidden on Mobile) */}
            <section className="hidden lg:block space-y-2">
              <section className="flex items-center gap-2 text-yellow-400 text-lg font-medium">
                <span className="text-2xl">👋</span>
                <span className='text-white'>Hello I Am</span>
              </section>
              <h1 className="text-5xl font-bold tracking-tight text-white">
                Boniface Ifebuche
              </h1>
            </section>
            
            {/* Bio Text */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Full Stack Engineer specializing in scalable web and mobile applications.
              I architect solutions using the MERN stack and Golang, with a focus on shipping 
              production ready products.
            </p>

            {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
            <section className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111] hover:bg-[#222] border border-white/10 rounded-xl text-white font-medium transition-all active:scale-95">
                <Mail size={18} />
                <span className='text-white'>EMAIL ME</span>
              </button>
              
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111] hover:bg-[#222] border border-white/10 rounded-xl text-white font-medium transition-all active:scale-95">
                <Calendar size={18} />
                <span className='text-white'>SCHEDULE CALL</span>
              </button>
            </section>
          </section>
        </section>

        {/* === STATS SECTION === */}
        <section className="border-t border-dashed border-gray-800 pt-8 md:pt-12 mx-4 md:mx-0">
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatItem value="52+" label="Happy Clients" />
            <StatItem value="4+" label="Years Experience" />
            <StatItem value="40+" label="Websites Dev" />
            <StatItem value="10+" label="Apps Dev" />
          </section>
        </section>

      </section>
    </section>
  );
};

export default HeroSection;
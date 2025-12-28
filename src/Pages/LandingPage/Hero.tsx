import React from 'react';
import { Sms, Calendar1 } from 'iconsax-react';

const stats = [
  { value: "52+", label: "Clients_Served" },
  { value: "04+", label: "Years_Exp" },
  { value: "40+", label: "Web_Deployed" },
  { value: "10+", label: "Mobile_Shipped" },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  // Updated: border-zinc-800 -> border-border, text-white -> text-text
  <div className="flex flex-col items-start justify-center pl-6 border-l border-border first:pl-0 first:border-l-0 transition-colors group hover:border-purple-500">
    <span className="text-3xl md:text-4xl font-black text-text mb-1 group-hover:text-purple-500 transition-colors tracking-tight">{value}</span>
    <span className="text-[10px] md:text-xs text-sec font-mono uppercase tracking-widest">{label}</span>
  </div>
);

const HeroSection: React.FC = () => {
  return (
   
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-[3rem] md:pt-[6rem] border-b border-border bg-pri transition-colors duration-300">
      
  
      <section className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
          
          {/* LEFT: IMAGE & (MOBILE NAME) BLOCK */}
          <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-6 lg:gap-4 items-center lg:items-start">
            
            <div className="relative group w-28 h-28 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all group-hover:w-full group-hover:h-full" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all group-hover:w-full group-hover:h-full" />
              
              {/* Updated: bg-zinc-900 -> bg-sec, border-zinc-800 -> border-border */}
              <div className="w-full h-full overflow-hidden bg-sec border border-border relative z-10">
                <img 
                  src="https://pbs.twimg.com/profile_images/1992798731519873024/0MhHQNQz_400x400.jpg" 
                  alt="Boniface Ifebuche" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>

              {/* Status Badge - bg-zinc-950 -> bg-card */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-card border border-border px-3 py-1.5 shadow-xl">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-[10px] font-bold text-text uppercase tracking-wider">Available</span>
              </div>
            </div>

            <div className="flex flex-col lg:hidden">
              <span className="text-xs text-purple-500 font-mono mb-2 uppercase tracking-wide">👋 Hello I Am</span>
              <h1 className="text-3xl font-black text-text leading-[1.1] tracking-tighter uppercase">
                Boniface <br /> Ifebuche
              </h1>
            </div>
          </div>

          {/* RIGHT: CONTENT ENGINE */}
          <div className="flex-1 flex flex-col items-start mt-4 lg:mt-0">
            <h1 className="hidden lg:block text-5xl md:text-5xl font-black text-text leading-[0.9] tracking-tighter mb-4 uppercase">
              Boniface Ifebuche
            </h1>

            <div className="max-w-2xl border-l-2 border-purple-500 pl-6 py-1 mb-8">
              {/* Updated: text-zinc-400 -> text-sec, text-white -> text-text */}
              <p className="text-sec text-base md:text-lg leading-relaxed font-light">
                Full Stack Engineer specializing in scalable architecture. I build high-performance 
                solutions using the <strong className="text-text font-medium">MERN stack</strong> and <strong className="text-text font-medium">Golang</strong>, 
                focusing on shipping production-ready code for complex systems.
              </p>
            </div>

            {/* Action Matrix */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              {/* PRIMARY BUTTON: Uses bg-text and text-pri for automatic light/dark inversion */}
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-text text-pri font-bold uppercase tracking-wider text-xs hover:opacity-90 transition-all rounded-sm">
                <Sms size={18} color='currentColor' variant="Bold" />
                <span>Contact_Me</span>
              </button>
              
              {/* SECONDARY BUTTON: bg-card, border-border */}
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-card border border-border text-text font-bold uppercase tracking-wider text-xs hover:border-purple-500 transition-all rounded-sm">
                <Calendar1 size={18} color='currentColor' variant="Bold" className="text-sec group-hover:text-purple-500 transition-colors" />
                <span>Schedule_Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* === TELEMETRY / STATS SECTION === */}
        <div className="mt-20 border-t border-dashed border-border pt-10 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map((stat, index) => (
                <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
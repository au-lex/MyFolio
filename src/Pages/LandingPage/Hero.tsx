// import React from 'react';
// import { Mail, Calendar } from 'lucide-react';


// const StatItem = ({ value, label }: { value: string; label: string }) => (
//   <section className="flex flex-col items-center justify-center text-center">
//     <span className="text-2xl md:text-4xl font-bold text-white mb-2">{value}</span>
//     <span className="text-xs md:text-sm text-gray-400 font-medium">{label}</span>
//   </section>
// );

// const HeroSection: React.FC = () => {
//   return (
//     <section className="min-h-screen bg-black text-white flex flex-col items-center pt-[2rem] md:pt-[4rem] ">
//       <section className="w-full  space-y-12">
        
    
//         <section className=" mx-auto lg:max-w-none lg:flex lg:items-start lg:border-none lg:bg-transparent">
          

//           <section className="flex flex-row lg:flex-col items-center lg:items-start gap-5  mb-6 lg:mb-0 lg:w-1/3">
            
//             {/* Image Container */}
//             <section className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[18rem] lg:h-[18rem] shrink-0 rounded-2xl overflow-hidden relative shadow-2xl border border-white/5">
//               <img 
//                 src="https://pbs.twimg.com/profile_images/1992798731519873024/0MhHQNQz_400x400.jpg" 
//                 alt="Boniface Ifebuche" 
//                 className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
//               />
//             </section>

     
//             <section className="lg:hidden flex flex-col items-start">
//                <section className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-1">
//                 <span className="text-lg">👋</span>
//                 <span className='text-white/80 uppercase tracking-wide text-xs'>Hello I Am</span>
//               </section>
//               <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
//                 Boniface <br /> Ifebuche
//               </h1>
//             </section>
//           </section>

//           {/* CONTENT (Bio + Buttons) */}
//           <section className="flex-1 text-left space-y-6 ">
            
//             {/* Desktop Only Header (Hidden on Mobile) */}
//             <section className="hidden lg:block space-y-2">
//               <section className="flex items-center gap-2 text-yellow-400 text-lg font-medium">
//                 <span className="text-2xl">👋</span>
//                 <span className='text-white'>Hello I Am</span>
//               </section>
//               <h1 className="text-5xl font-bold tracking-tight text-white">
//                 Boniface Ifebuche
//               </h1>
//             </section>
            
//             {/* Bio Text */}
//             <p className="text-gray-400 text-base md:text-lg leading-relaxed text-bkalance">
//               Full Stack Engineer specializing in scalable web and mobile applications.
//               I architect solutions using the MERN stack and Golang, with a focus on shipping 
//               production ready products.
//             </p>

//             {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
//             <section className="flex flex-col sm:flex-row gap-3 pt-2">
//               <button className="flex items-center justify-center gap-3 px-6 py-4 bg-card hover:bg-[#222] border border-white/10 rounded-xl text-white font-medium transition-all active:scale-95">
//                 <Mail size={18} />
//                 <span className='text-white'>EMAIL ME</span>
//               </button>
              
//               <button className="flex items-center justify-center gap-3 px-6 py-4 bg-card hover:bg-[#222] border border-white/10 rounded-xl text-white font-medium transition-all active:scale-95">
//                 <Calendar size={18} />
//                 <span className='text-white'>SCHEDULE CALL</span>
//               </button>
//             </section>
//           </section>
//         </section>

//         {/* === STATS SECTION === */}
//         <section className="border-t border-dashed border-gray-800 pt-8 md:pt-12 mx-4 md:mx-0">
//           <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
//             <StatItem value="52+" label="Happy Clients" />
//             <StatItem value="4+" label="Years Experience" />
//             <StatItem value="40+" label="Websites Dev" />
//             <StatItem value="10+" label="Apps Dev" />
//           </section>
//         </section>

//       </section>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';
import { Sms, Calendar1 } from 'iconsax-react';

const stats = [
  { value: "52+", label: "Clients_Served" },
  { value: "04+", label: "Years_Exp" },
  { value: "40+", label: "Web_Deployed" },
  { value: "10+", label: "Mobile_Shipped" },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start justify-center pl-6 border-l border-zinc-800 first:pl-0 first:border-l-0 transition-colors group hover:border-zinc-600">
    <span className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-purple-500 transition-colors tracking-tight">{value}</span>
    <span className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-widest">{label}</span>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-[2rem] md:pt-[6rem] border-b border-zinc-800 bg-black">
      
      {/* Background Grid (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <section className="w-full max-w-7xl mx-auto  relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-start">
          
          {/* LEFT: IMAGE & (MOBILE NAME) BLOCK */}

          <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-6 lg:gap-4 items-center lg:items-start">
            
             {/* Image Frame */}
            <div className="relative group w-28 h-28 md:w-48 md:h-48 lg:w-64 lg:h-64 shrink-0">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all group-hover:w-full group-hover:h-full" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all group-hover:w-full group-hover:h-full" />
              
              <div className="w-full h-full overflow-hidden bg-zinc-900 border border-zinc-800 relative z-10">
                <img 
                  src="https://pbs.twimg.com/profile_images/1992798731519873024/0MhHQNQz_400x400.jpg" 
                  alt="Boniface Ifebuche" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1.5 shadow-xl">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
                 <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">Available</span>
              </div>
            </div>

            {/* MOBILE ONLY NAME: Visible on mobile */}
            <div className="flex flex-col lg:hidden">
            <span className="text-xs text-purple-500 font-mono mb-2 uppercase tracking-wide">
             👋
                Hello I Am
              </span>
              <h1 className="text-3xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                Boniface <br /> Ifebuche
              </h1>
    
            </div>

          </div>


          {/* RIGHT: CONTENT ENGINE */}
          <div className="flex-1 flex flex-col items-start mt-4 lg:mt-0">
            
            {/* DESKTOP ONLY NAME: Hidden on mobile, Visible on Desktop */}
            <h1 className="hidden lg:block text-5xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
              Boniface Ifebuche
            </h1>

            {/* Bio Terminal */}
            <div className="max-w-2xl border-l-2 border-purple-500 pl-6 py-1 mb-8">
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                Full Stack Engineer specializing in scalable architecture. I build high-performance 
                solutions using the <strong className="text-white font-medium">MERN stack</strong> and <strong className="text-white font-medium">Golang</strong>, 
                focusing on shipping production-ready code for complex systems.
              </p>
            </div>

            {/* Action Matrix */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-zinc-200 transition-all rounded-sm">
                <Sms size={18} color='currentColor'  variant="Bold" />
                <span>Contact_Me</span>
              </button>
              
              <button className="group flex items-center bg-card justify-center gap-3 px-8 py-4  border border-zinc-700 text-white font-bold uppercase tracking-wider text-xs hover:border-white hover:bg-zinc-900 transition-all rounded-sm">
                <Calendar1 size={18} color='currentColor'  variant="Bold" className="text-zinc-500 group-hover:text-white transition-colors" />
                <span>Schedule_Call</span>
              </button>
            </div>

          </div>
        </div>

        {/* === TELEMETRY / STATS SECTION === */}
        <div className="mt-20 border-t border-dashed border-zinc-800 pt-10 pb-4">
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
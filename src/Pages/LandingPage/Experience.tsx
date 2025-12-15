// import React from 'react';
// import { Briefcase, Calendar } from 'iconsax-react';

// interface ExperienceItem {
//   id: number;
//   company: string;
//   website: string;
//   type: string; 
//   logoLetter: string;
//   date: string;
//   role: string;
//   description: string;
// }

// const experienceData: ExperienceItem[] = [
//   {
//     id: 1,
//     company: "Vortex",
//     website: "vortex.tech",
//     type: "Fintech",
//     logoLetter: "V",
//     date: "2023 - Present",
//     role: "Senior Frontend Engineer",
//     description: "Architecting scalable React applications using Next.js. Improved site performance by 40% through server-side rendering and code splitting strategies."
//   },
//   {
//     id: 2,
//     company: "Nexus Systems",
//     website: "nexus.io",
//     type: "SaaS Platform",
//     logoLetter: "N",
//     date: "2022 - 2023",
//     role: "Full Stack Developer",
//     description: "Built and maintained RESTful APIs using Node.js and Express. Integrated PostgreSQL databases and implemented secure authentication systems for user dashboards."
//   },
//   {
//     id: 3,
//     company: "Mobify",
//     website: "mobify.app",
//     type: "Mobile Agency",
//     logoLetter: "M",
//     date: "2021 - 2022",
//     role: "Mobile App Developer",
//     description: "Developed cross-platform mobile applications using React Native. Successfully deployed 3 major apps to both Apple App Store and Google Play Store."
//   },
//   {
//     id: 4,
//     company: "Creative Web",
//     website: "creativeweb.com",
//     type: "Digital Agency",
//     logoLetter: "C",
//     date: "2020 - 2021",
//     role: "Junior Web Developer",
//     description: "Collaborated with senior devs to implement responsive UI components. Transformed Figma designs into pixel-perfect HTML/CSS and JavaScript code."
//   }
// ];
// export const Experience: React.FC = () => {
//   return (
//     <section className="">
//       <div className="">
        
//         {/* --- HEADER --- */}
//         <div className="mb-16">
//           <div className="flex items-center gap-3 mb-4">
//             <Briefcase size={28} variant="Bold" color='currentColor' className="text-white" />
//             <h2 className="text-3xl font-bold text-white">My Experience</h2>
//           </div>
//           <p className="text-zinc-400 max-w-2xl text-lg">
//             A timeline of my professional journey and career milestones.
//           </p>
//         </div>

//         <div className="relative flex flex-col gap-12">
          
//           {experienceData.map((item, index) => (
//             <div key={item.id} className="relative pl-8 md:pl-12 group">
              
    
//               {index !== experienceData.length - 1 && (
//                 <div 
//                   className="absolute left-[11px] md:left-[15px] top-2 bottom-[-48px] w-0.5 bg-zinc-800 group-hover:bg-zinc-700 transition-colors" 
//                   aria-hidden="true"
//                 />
//               )}

        
//               <div className="absolute left-0 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black border-2 border-zinc-700 group-hover:border-blue-500 group-hover:scale-110 transition-all z-10 flex items-center justify-center">
//                  <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-blue-500 transition-colors" />
//               </div>

//               {/* 3. CONTENT CARD */}
//               <div className="flex flex-col sm:flex-row gap-6">
                
//                 {/* Date Column (Sticky on Desktop) */}
//                 <div className="sm:w-32 flex-shrink-0 pt-1.5">
//                     <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold uppercase tracking-wider group-hover:text-blue-400 transition-colors">
//                         <Calendar size={16} />
//                         {item.date}
//                     </div>
//                 </div>

//                 {/* Details Card */}
//                 <div className="flex-1 bg-card border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                    
//                     {/* Header: Role & Company */}
//                     <div className="flex justify-between items-start mb-4">
//                         <div>
//                             <h3 className="text-xl font-bold text-white mb-1">
//                                 {item.role}
//                             </h3>
//                             <div className="flex items-center gap-2 text-zinc-300">
//                                 <span className="font-medium">{item.company}</span>
//                                 <span className="text-zinc-600">•</span>
//                                 <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
//                                     {item.type}
//                                 </span>
//                             </div>
//                         </div>
                        
//                         {/* Logo Letter Box */}
//                         <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center text-zinc-500 font-bold group-hover:text-white group-hover:border-zinc-600 transition-colors">
//                             {item.logoLetter}
//                         </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-zinc-400 leading-relaxed text-sm">
//                         {item.description}
//                     </p>
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };



import React from 'react';
import { Briefcase,  ArrowRight } from 'iconsax-react';

interface ExperienceItem {
  id: number;
  company: string;
  website: string;
  type: string; 
  logoLetter: string;
  date: string;
  role: string;
  description: string;
  isCurrent?: boolean; 
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    company: "Vortex",
    website: "vortex.tech",
    type: "Fintech",
    logoLetter: "V",
    date: "2023 - Present",
    role: "Senior Frontend Engineer",
    description: "Architecting scalable React applications using Next.js. Improved site performance by 40% through server-side rendering and code splitting strategies.",
    isCurrent: true
  },
  {
    id: 2,
    company: "Nexus Systems",
    website: "nexus.io",
    type: "SaaS Platform",
    logoLetter: "N",
    date: "2022 - 2023",
    role: "Full Stack Developer",
    description: "Built and maintained RESTful APIs using Node.js and Express. Integrated PostgreSQL databases and implemented secure authentication systems for user dashboards."
  },
  {
    id: 3,
    company: "Mobify",
    website: "mobify.app",
    type: "Mobile Agency",
    logoLetter: "M",
    date: "2021 - 2022",
    role: "Mobile App Developer",
    description: "Developed cross-platform mobile applications using React Native. Successfully deployed 3 major apps to both Apple App Store and Google Play Store."
  },
  {
    id: 4,
    company: "Creative Web",
    website: "creativeweb.com",
    type: "Digital Agency",
    logoLetter: "C",
    date: "2020 - 2021",
    role: "Junior Web Developer",
    description: "Collaborated with senior devs to implement responsive UI components. Transformed Figma designs into pixel-perfect HTML/CSS and JavaScript code."
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="text-white">
      <div className="mx-auto">
        
        {/* --- SHARP HEADER --- */}
        <div className="mb-16 border-l-2 border-purple-500 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase size={24} color='#fff' variant="Bold" className="text-purple-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Career_Log</h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            // Professional Timeline & Milestones
          </p>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="flex flex-col gap-0">
          
          {experienceData.map((item, index) => (
            <div key={item.id} className="group relative flex gap-6 md:gap-10 pb-12 last:pb-0">
              
              {/* 1. TIMELINE RAIL */}
              <div className="flex flex-col items-center">
                 {/* Node (Square for Tech Feel) */}
                 <div className={`
                    relative z-10 w-4 h-4 border transition-all duration-300 flex items-center justify-center bg-zinc-950
                    ${item.isCurrent 
                        ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' 
                        : 'border-zinc-700 group-hover:border-zinc-500'}
                 `}>
                    <div className={`w-1.5 h-1.5 ${item.isCurrent ? 'bg-purple-500' : 'bg-zinc-700 group-hover:bg-zinc-500'} transition-colors`} />
                 </div>
                 
                 {/* Connecting Line */}
                 {index !== experienceData.length - 1 && (
                    <div className="w-[1px] h-full bg-zinc-800 group-hover:bg-zinc-700 transition-colors mt-2" />
                 )}
              </div>

              {/* 2. CONTENT CARD */}
              <div className="flex-1 -mt-2">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                        <span className={`
                            font-mono text-xs font-bold uppercase tracking-widest px-2 py-1 border 
                            ${item.isCurrent 
                                ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' 
                                : 'border-zinc-800 text-zinc-500 bg-zinc-900/50'}
                        `}>
                            {item.date}
                        </span>
                        {item.isCurrent && (
                             <span className="flex items-center gap-1 text-[10px] font-bold text-green-500 uppercase tracking-wider animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                Active
                             </span>
                        )}
                    </div>
                </div>

                {/* Main Card */}
                <div className="relative group/card bg-card border border-zinc-800 p-6 sm:p-8 hover:bg-zinc-900/40 hover:border-zinc-600 transition-all duration-300 rounded-sm">
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                         <ArrowRight size={16} className="-rotate-45 text-zinc-500" />
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                        {/* Logo Box */}
                        <div className="w-12 h-12 flex-shrink-0 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg font-black text-zinc-600 group-hover/card:text-white group-hover/card:border-zinc-500 transition-all">
                            {item.logoLetter}
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover/card:text-purple-400 transition-colors">
                                {item.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-zinc-300 font-medium">{item.company}</span>
                                <span className="text-zinc-700">/</span>
                                <span className="text-zinc-500 text-sm font-mono">{item.type}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 group-hover/card:border-zinc-600 transition-colors">
                        {item.description}
                    </p>

                    {/* Metadata Footer */}
                    <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center gap-4">
                        <a href={`https://${item.website}`} className="text-xs font-mono text-zinc-600 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1">
                            LINK: {item.website}
                        </a>
                    </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
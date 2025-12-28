

import React from 'react';
import { Briefcase, ArrowRight } from 'iconsax-react';

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
    id: 0,
    company: "Orbit Systems",
    website: "orbit.sys",
    type: "AI Infrastruc",
    logoLetter: "O",
    date: "2025 - Present",
    role: "Lead Software Dev",
    description: "Spearheading the migration of legacy monoliths to event-driven microservices. Leading a team of 8 engineers to build AI-powered data pipelines using Golang and gRPC.",
    isCurrent: true
  },
  {
    id: 1,
    company: "Vortex",
    website: "vortex.tech",
    type: "Fintech",
    logoLetter: "V",
    date: "2023 - 2025",
    role: "Senior Frontend Engineer",
    description: "Architected scalable React applications using Next.js. Improved site performance by 40% through server-side rendering and code splitting strategies.",
    isCurrent: false
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

    <section className="text-text transition-colors duration-300">
      <div className="mx-auto">

 
 
        <div className="mb-16 border-l-2 border-purple-500 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase size={24} variant="Bold" color='currentColor'  className="text-text" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Career Log</h2>
          </div>
          <p className="text-sec font-mono text-xs uppercase tracking-widest">
             Professional Timeline & Milestones
          </p>
        </div>

   
        <div className="flex flex-col gap-0">

          {experienceData.map((item, index) => (
            <div key={item.id} className="group relative flex gap-6 md:gap-10 pb-12 last:pb-0">

         
              <div className="lg:flex flex-col items-center hidden">
              
                <div className={`
                    relative z-10 w-4 h-4 border transition-all duration-300 flex items-center justify-center bg-pri
                    ${item.isCurrent
                    ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'border-border group-hover:border-sec'}
                 `}>
                  <div className={`w-1.5 h-1.5 ${item.isCurrent ? 'bg-purple-500' : 'bg-sec/40 group-hover:bg-sec'} transition-colors`} />
                </div>

               
                {index !== experienceData.length - 1 && (
                  <div className="w-[1px] h-full bg-border group-hover:bg-sec/30 transition-colors mt-2" />
                )}
              </div>

              {/* 2. CONTENT CARD */}
              <div className="flex-1 -mt-2">

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                  
                    <span className={`
                            font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border 
                            ${item.isCurrent
                        ? 'border-purple-500/30 text-purple-500 bg-purple-500/10'
                        : 'border-border text-sec bg-sec/5'}
                        `}>
                      {item.date}
                    </span>
                    {item.isCurrent && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Active
                      </span>
                    )}
                  </div>
                </div>

         
                <div className="relative group/card bg-card border border-border p-6 sm:p-8 hover:bg-sec/5 hover:border-purple-500/50 transition-all duration-300 rounded-sm s">

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="-rotate-45 text-sec" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo Box - Updated: bg-pri, border-border, text-sec */}
                    <div className="w-12 h-12 flex-shrink-0 bg-pri border border-border flex items-center justify-center text-lg font-black text-sec group-hover/card:text-text group-hover/card:border-purple-500 transition-all">
                      {item.logoLetter}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-text group-hover/card:text-purple-500 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-text/80 font-medium">{item.company}</span>
                        <span className="text-border">/</span>
                        <span className="text-sec text-sm font-mono">{item.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description - Updated: text-sec, border-border */}
                  <p className="text-sec text-sm leading-relaxed border-l-2 border-border pl-4 group-hover/card:border-purple-500/30 transition-colors">
                    {item.description}
                  </p>

                  {/* Metadata Footer - Updated: border-border */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-4">
                    <a href={`https://${item.website}`} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-sec hover:text-purple-500 transition-colors uppercase tracking-wider flex items-center gap-1">
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
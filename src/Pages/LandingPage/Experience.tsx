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
    company: "SafeQly",
    website: "safeqly.com",
    type: "Fintech Infrastructure",
    logoLetter: "S",
    date: "Dec 2025 - Present",
    role: "Founder & Full Stack Eng.",
    description: "Architecting a secure escrow infrastructure for African commerce. Built a high-concurrency Golang backend handling ACID transactions and a React frontend for milestone-based payments. Currently pivoting the system into a B2B API for logistics.",
    isCurrent: true 
  },
  {
    id: 1,
    company: "Xnria",
    website: "xnria.com",
    type: "Fashion Tech",
    logoLetter: "X",
    date: "Jun 2025 - Nov 2025",
    role: "Founder & Full Stack Eng.",
    description: "Founded and developed a multi-tenant marketplace connecting fashion designers to clients. Engineered the entire platform from scratch, including a custom Order Management System (OMS) and a dynamic 'Shop Creation' engine using React and Node.js.",
    isCurrent: false
  },
  {
    id: 2,
    company: "Kotlead",
    website: "kotlead.com",
    type: "Digital Solutions",
    logoLetter: "K",
    date: "Jan 2025 - May 2025",
    role: " Full Stack Dev",
    description: "Led development teams for enterprise clients. Architected scalable web solutions and introduced strict TypeScript standards to the codebase, reducing production bugs by 30%.",
    isCurrent: false
  },
  {
    id: 3,
    company: "Uderika",
    website: "uderika.com",
    type: "HealthTech",
    logoLetter: "U",
    date: "2024 - 2025",
    role: " Senior Full Stack Developer",
    description: "Built a HIPAA-compliant diabetes management platform. Engineered a real-time dashboard for patients to log blood sugar levels and for doctors to visualize trends. Implemented secure data encryption for sensitive medical records.",
    isCurrent: false
  },
  {
    id: 4,
    company: "Taacodeep Tech",
    website: "https://taacodeep.com",
    type: "Software Company",
    logoLetter: "T",
    date: "2022 - 2025",
    role: "Senior Frontend & Mobile Eng.",
    description: "Promoted from Junior role to lead the mobile engineering division. Built cross-platform apps using React Native (Expo) and optimized legacy web applications for speed and SEO.",
    isCurrent: false
  },
  {
    id: 5,
    company: "Taacodeep Tech",
    website: "https://taacodeep.com",
    type: "Software Company",
    logoLetter: "T",
    date: "2021 - 2022",
    role: "Junior Web Developer",
    description: "Started my career building responsive UI components. Collaborated with senior engineers to convert Figma designs into pixel-perfect HTML/CSS and React code.",
    isCurrent: false
  }
];


export const Experience: React.FC = () => {
  return (
    <section aria-labelledby="experience-heading" className="text-text transition-colors duration-300">
      <div className="mx-auto">

        {/* SECTION HEADER */}
        <header 
          className="mb-16 border-l-2 border-purple-500 pl-6 py-2"
          data-aos="fade-right" 
          data-aos-duration="1000"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase size={24}color='currentColor'  variant="Bold" className="text-text" />
            <h2 id="experience-heading" className="text-3xl font-black uppercase tracking-tighter">
              Career Log
            </h2>
          </div>
          <p className="text-sec font-mono text-xs uppercase tracking-widest">
            Professional Timeline & Milestones
          </p>
        </header>

        {/* TIMELINE LIST */}
        <ol className="flex flex-col gap-0">
          {experienceData.map((item, index) => (
            <li 
              key={item.id} 
              className="group relative flex gap-6 md:gap-10 pb-12 last:pb-0"
              data-aos="fade-up"           
              data-aos-delay={index * 100} 
              data-aos-offset="100"       
            >

              {/* VISUAL TIMELINE (Decorative) */}
              <div aria-hidden="true" className="lg:flex flex-col items-center hidden">
                <span className={`
                    relative z-10 w-4 h-4 border transition-all duration-300 flex items-center justify-center bg-pri
                    ${item.isCurrent
                    ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'border-border group-hover:border-sec'}
                 `}>
                  <span className={`w-1.5 h-1.5 ${item.isCurrent ? 'bg-purple-500' : 'bg-sec/40 group-hover:bg-sec'} transition-colors`} />
                </span>

                {index !== experienceData.length - 1 && (
                  <span className="w-[1px] h-full bg-border group-hover:bg-sec/30 transition-colors mt-2" />
                )}
              </div>

              {/* CARD CONTENT */}
              <div className="flex-1 -mt-2">
                
                {/* Meta Header */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <time dateTime={item.date} className={`
                            font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border 
                            ${item.isCurrent
                        ? 'border-purple-500/30 text-purple-500 bg-purple-500/10'
                        : 'border-border text-sec bg-sec/5'}
                        `}>
                      {item.date}
                    </time>
                    {item.isCurrent && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Active
                      </span>
                    )}
                  </div>
                </header>

                {/* Main Article Card */}
                <article className="relative group/card bg-card border border-border p-6 sm:p-8 hover:bg-sec/5 hover:border-purple-500/50 transition-all duration-300 rounded-sm">
                  
                  {/* Decorative Corner */}
                  <div aria-hidden="true" className="absolute top-0 right-0 p-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="-rotate-45 text-sec" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo Figure */}
                    <figure className="w-12 h-12 flex-shrink-0 bg-pri border border-border flex items-center justify-center text-lg font-black text-sec group-hover/card:text-text group-hover/card:border-purple-500 transition-all">
                      {item.logoLetter}
                    </figure>

                    <div>
                      <h3 className="text-xl font-bold text-text group-hover/card:text-purple-500 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-text/80 font-medium">{item.company}</span>
                        <span aria-hidden="true" className="text-border">/</span>
                        <span className="text-sec text-sm font-mono">{item.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sec text-sm leading-relaxed border-l-2 border-border pl-4 group-hover/card:border-purple-500/30 transition-colors">
                    {item.description}
                  </p>

                  <footer className="mt-6 pt-4 border-t border-border flex items-center gap-4">
                    <a href={`https://${item.website}`} target="_blank" rel="noreferrer" className="text-[10px] font-mono text-sec hover:text-purple-500 transition-colors uppercase tracking-wider flex items-center gap-1">
                      LINK: {item.website}
                    </a>
                  </footer>

                </article>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
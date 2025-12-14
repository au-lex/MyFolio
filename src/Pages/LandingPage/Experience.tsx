import React from 'react';
import { Briefcase, Calendar } from 'iconsax-react';

interface ExperienceItem {
  id: number;
  company: string;
  website: string;
  type: string; 
  logoLetter: string;
  date: string;
  role: string;
  description: string;
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
    description: "Architecting scalable React applications using Next.js. Improved site performance by 40% through server-side rendering and code splitting strategies."
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
    <section className="">
      <div className="">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={28} variant="Bold" color='currentColor' className="text-white" />
            <h2 className="text-3xl font-bold text-white">My Experience</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A timeline of my professional journey and career milestones.
          </p>
        </div>

        <div className="relative flex flex-col gap-12">
          
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
    
              {index !== experienceData.length - 1 && (
                <div 
                  className="absolute left-[11px] md:left-[15px] top-2 bottom-[-48px] w-0.5 bg-zinc-800 group-hover:bg-zinc-700 transition-colors" 
                  aria-hidden="true"
                />
              )}

        
              <div className="absolute left-0 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black border-2 border-zinc-700 group-hover:border-blue-500 group-hover:scale-110 transition-all z-10 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-blue-500 transition-colors" />
              </div>

              {/* 3. CONTENT CARD */}
              <div className="flex flex-col sm:flex-row gap-6">
                
                {/* Date Column (Sticky on Desktop) */}
                <div className="sm:w-32 flex-shrink-0 pt-1.5">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-semibold uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                        <Calendar size={16} />
                        {item.date}
                    </div>
                </div>

                {/* Details Card */}
                <div className="flex-1 bg-card border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                    
                    {/* Header: Role & Company */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                {item.role}
                            </h3>
                            <div className="flex items-center gap-2 text-zinc-300">
                                <span className="font-medium">{item.company}</span>
                                <span className="text-zinc-600">•</span>
                                <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                        
                        {/* Logo Letter Box */}
                        <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 flex items-center justify-center text-zinc-500 font-bold group-hover:text-white group-hover:border-zinc-600 transition-colors">
                            {item.logoLetter}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        {item.description}
                    </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
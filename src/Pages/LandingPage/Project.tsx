import React from 'react';
import { Flash, ArrowRight, } from 'iconsax-react';
// import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiFigma } from 'react-icons/si';


import ProjectCard from '../../Components/ProjectCard';
import { projectsData } from '../../Data/ProjectData';

export const Projects: React.FC = () => {
  return (
    <section className="text-white">
      <div className="mx-auto flex flex-col gap-10">
     
        {/* --- SHARP HEADER --- */}
        <div className="border-l-2 border-purple-500 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Flash size={24} variant="Bold" color='#fff' className="text-purple-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Selected_Works</h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            // Curated Deployments & Case Studies
          </p>
        </div>

      
        <div className="flex flex-col gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* --- SYSTEM FOOTER BUTTON --- */}
        <div className="pt-4">
            <button className="group w-full py-6 bg-zinc-900/20 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-600 rounded-sm flex items-center justify-center gap-3 transition-all duration-300">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors">
                    Access_Full_Directory
                </span>
                <div className="bg-zinc-800 p-1 group-hover:bg-purple-500 transition-colors rounded-sm">
                    <ArrowRight size={14} className="text-zinc-400 group-hover:text-white" />
                </div>
            </button>
        </div>

      </div>
    </section>
  );
};
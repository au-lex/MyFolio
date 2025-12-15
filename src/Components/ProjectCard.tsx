import React from 'react';
import { motion } from 'framer-motion';
import { Link as ArrowRight, Monitor, Mobile, Book } from 'iconsax-react';


export interface Project {
  id: number;
  title: string;
  link: string;
  caseStudyLink: string;
  domain: string;
  type: "Web" | "Mobile";
  category: string;
  year: string;
  version: string;
  description: string;
  image: string;
  technologies: React.ElementType[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col lg:flex-row bg-card border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-600 transition-colors duration-300"
    >
      {/* 1. Image Section */}
      <div className="w-full lg:w-[35%] h-64 lg:h-auto relative overflow-hidden bg-zinc-950 border-r border-zinc-800">
        <div className="absolute inset-0 bg-card z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100"
        />
        {/* Type Tag */}
        <div className="absolute top-0 left-0 z-20 bg-zinc-950 border-r border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
            {project.type === "Mobile" ? (
                <Mobile size={14} color='#fff' className="text-zinc-500" />
            ) : (
                <Monitor color='#fff' size={14} className="text-zinc-500" />
            )}
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{project.type}</span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 flex flex-col bg-zinc-900/30">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-3 bg-zinc-950">
           <div className="flex items-center gap-3">
             <span className="text-purple-500 font-mono text-xs">#{project.id.toString().padStart(2, '0')}</span>
             <span className="h-3 w-[1px] bg-zinc-800"></span>
             <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">{project.year}</span>
           </div>
           <div className="text-zinc-600 font-mono text-[10px]">{project.version}</div>
        </div>

        <div className="p-6 md:p-8 flex flex-col h-full relative">
            <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1 uppercase tracking-wide">{project.category}</p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l border-zinc-700 pl-4">
                {project.description}
            </p>

            <div className="mt-auto flex flex-col gap-6">
                {/* Tech Stack */}
                <div className="flex items-center gap-3 text-zinc-600">
                    {project.technologies.map((TechIcon, idx) => (
                        <TechIcon key={idx} size={18} className="hover:text-white transition-colors cursor-help" />
                    ))}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                    <a href={project.caseStudyLink} className="flex-1 flex justify-center items-center gap-2 bg-zinc-100 text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm">
                        <Book size={14} color='#fff' variant="Bold" />
                        Case Study
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-9 border border-zinc-700 hover:border-white text-zinc-400 hover:text-white transition-all rounded-sm">
                        <ArrowRight color='#fff' size={16} className="-rotate-45" />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
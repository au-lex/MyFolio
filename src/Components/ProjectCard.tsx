import React from 'react';
import { motion } from 'framer-motion';
import { Link as ArrowRight, Monitor, Mobile, Book, } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

import type{ IconType } from "react-icons";

export interface TechStackItem {
  icon: IconType;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  banner: string;
  liveLink: string;
  repoLink: string;
  client: string;
  timeline: string;
  role: string;
  stack: TechStackItem[];
  challenge: string;
  solution: string;
  features: string[];
  gallery: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const isMobile = project.category.toLowerCase().includes('mobile');
  

  const shortDescription = project.challenge.length > 120 
    ? project.challenge.substring(0, 120) + "..." 
    : project.challenge;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col lg:flex-row bg-black border border-zinc-800 rounded-sm overflow-hidden hover:border-zinc-600 transition-colors duration-300 min-h-[320px]"
    >
      {/* 1. Image Section */}
      <div className="w-full lg:w-[40%] h-64 lg:h-[24rem] relative overflow-hidden bg-zinc-950 border-r border-zinc-800">
        <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all duration-500" />
        <img 
          src={project.banner} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        
        {/* Type Tag */}
        <div className="absolute top-0 left-0 z-20 bg-zinc-950/90 backdrop-blur-md border-r border-b border-zinc-800 px-4 py-2 flex items-center gap-2">
            {isMobile ? (
                <Mobile size={14} color='#fff' className="text-zinc-500" />
            ) : (
                <Monitor color='#fff' size={14} className="text-zinc-500" />
            )}
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {isMobile ? "Mobile App" : "Web Platform"}
            </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 flex flex-col bg-zinc-900/20 backdrop-blur-sm">
        
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-3 bg-zinc-950/50">
           <div className="flex items-center gap-3">
             <span className="text-purple-500 font-mono text-xs">#{project.id.toString().padStart(2, '0')}</span>
             <span className="h-3 w-[1px] bg-zinc-800"></span>
             <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider">{project.client}</span>
           </div>
           <div className="text-zinc-600 font-mono text-[10px] uppercase">{project.timeline}</div>
        </div>

        <div className="p-6 md:p-8 flex flex-col h-full relative">
            <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-1 uppercase tracking-wide">{project.category}</p>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-l-2 border-zinc-800 pl-4 h-full">
                {/* We use the subtitle or a truncated challenge here */}
                {project.subtitle}
                <br/>
                <span className="text-zinc-600 text-xs mt-2 block">{shortDescription}</span>
            </p>

            <div className="mt-auto flex flex-col gap-6 pt-6">
                {/* Tech Stack - Safely mapped now */}
                <div className="flex items-center gap-3 text-zinc-600 flex-wrap">
                    {project.stack && project.stack.map((tech, idx) => (
                        <div key={idx} title={tech.name} className="hover:text-purple-400 transition-colors cursor-help">
                           <tech.icon size={18} />
                        </div>
                    ))}
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                    {/* View Details Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double triggering if card has click
                        navigate(`/projects/${project.id}`);
                      }}
                      className="flex-1 flex justify-center items-center gap-2 bg-white text-black px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-sm"
                    >
                        <Book size={16} variant="Bold" />
                        Read Case Study
                    </button>

                    {/* Live Link */}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center justify-center w-12 h-10 border border-zinc-700 hover:border-purple-500 text-zinc-400 hover:text-white transition-all rounded-sm bg-zinc-900">
                          <ArrowRight color='currentColor' size={18} className="-rotate-45" />
                      </a>
                    )}
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
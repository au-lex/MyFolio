import React from 'react';
import { motion } from 'framer-motion';
import { Link as ArrowRight, Monitor, Mobile, Book } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import type { IconType } from "react-icons";

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
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col lg:flex-row bg-card border border-border rounded-sm overflow-hidden hover:border-purple-500/50 transition-all duration-300 min-h-[320px]"
    >


      <figure className="w-full lg:w-[40%] h-64 lg:h-[24rem] relative overflow-hidden bg-pri border-r border-border m-0">
        
        {/* Decorative Overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-pri/5 z-10 group-hover:bg-transparent transition-all duration-500" />
        
        <img
          src={project.banner}
          alt={`Preview of ${project.title}`}
          className="w-full h-full object-cover graysjcale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacijty-80 group-hover:opacity-100"
        />

        {/* Platform Badge */}
        <figcaption className="absolute top-0 left-0 z-20 bg-card/90 backdrop-blur-md border-r border-b border-border px-4 py-2 flex items-center gap-2">
          {isMobile ? (
            <Mobile size={14} className="text-sec" aria-hidden="true" />
          ) : (
            <Monitor size={14} className="text-sec" aria-hidden="true" />
          )}
          <span className="text-[10px] font-mono text-sec uppercase tracking-wider">
            {isMobile ? "Mobile App" : "Web Platform"}
          </span>
        </figcaption>
      </figure>


      <div className="flex-1 flex flex-col bg-card backdrop-blur-sm">

        {/* 2. CARD HEADER -> HEADER */}
        <header className="flex items-center justify-between border-b border-border px-6 py-3 bg-card/50">
          <div className="flex items-center gap-3">
            <span className="text-purple-500 font-mono text-xs">#{project.id.toString().padStart(2, '0')}</span>
            <span className="h-3 w-[1px] bg-border" aria-hidden="true"></span>
            <span className="text-sec font-mono text-[10px] uppercase tracking-wider">{project.client}</span>
          </div>
          <time className="text-sec/60 font-mono text-[10px] uppercase">{project.timeline}</time>
        </header>

        <div className="p-6 md:p-8 flex flex-col h-full relative">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-black text-text uppercase tracking-tight group-hover:text-purple-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-sec font-mono mt-1 uppercase tracking-wide">{project.category}</p>
          </div>

          <p className="text-sec text-sm leading-relaxed mb-6 border-l-2 border-border pl-4 h-full">
            {project.subtitle}
            <br />
            <span className="text-sec/60 text-xs mt-2 block">{shortDescription}</span>
          </p>

          <div className="mt-auto flex flex-col gap-6 pt-6">
            {/* 3. TECH STACK -> LIST */}
            <ul className="flex items-center gap-3 text-sec/70 flex-wrap" aria-label="Technologies used">
              {project.stack && project.stack.map((tech, idx) => (
                <li key={idx} title={tech.name} className="hover:text-purple-500 transition-colors cursor-help list-none">
                  <tech.icon size={18} aria-hidden="true" />
                  <span className="sr-only">{tech.name}</span>
                </li>
              ))}
            </ul>

            {/* 4. ACTIONS -> FOOTER */}
            <footer className="flex items-center gap-4 pt-4 border-t border-border">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/projects/${project.id}`);
                }}
                className="flex-1 flex justify-center items-center gap-2 bg-text text-pri px-4 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all rounded-sm shadow-md"
              >
                <Book size={16} variant="Bold" aria-hidden="true" />
                Read Case Study
              </button>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit live site for ${project.title}`}
                  className="flex items-center justify-center w-12 h-10 border border-border hover:border-purple-500 text-sec hover:text-purple-500 transition-all rounded-sm bg-card"
                >
                  <ArrowRight size={18} className="-rotate-45" aria-hidden="true" />
                </a>
              )}
            </footer>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
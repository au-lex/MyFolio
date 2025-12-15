import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as  ArrowRight,  Code1, Monitor } from 'iconsax-react';
import { 
  SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, 
  SiMongodb, SiNextdotjs, SiFigma, SiStripe, SiFirebase 
} from 'react-icons/si';
import Layout from '../../layout/Layout';

// --- TYPES ---
interface Project {
  id: number;
  title: string;
  link: string;
  domain: string;
  category: string;
  year: string;
  version: string;
  description: string;
  image: string;
  technologies: React.ElementType[];
}

// --- MOCK DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "Devcraft Portfolio",
    link: "https://devcraft.com",
    domain: "devcraft.com",
    category: "Portfolio",
    year: "2024",
    version: "v2.0.4",
    description: "A high-performance personal portfolio showcasing expertise. Built with strict TypeScript typing and framer motion for fluid transitions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiTypescript, SiTailwindcss, SiFigma],
  },
  {
    id: 2,
    title: "Zenith Fitness",
    link: "https://zenith.com",
    domain: "zenith.com",
    category: "SaaS",
    year: "2023",
    version: "v1.1.0",
    description: "Empowering fitness enthusiasts with an immersive online experience. Features include workout tracking and live progress analytics.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiMongodb, SiNodedotjs, SiTailwindcss],
  },
  {
    id: 3,
    title: "Nexus Dashboard",
    link: "#",
    domain: "nexus.io",
    category: "Dashboard",
    year: "2023",
    version: "Beta",
    description: "A comprehensive admin dashboard for managing e-commerce analytics, user data, and revenue streams with real-time graphs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiFirebase, SiTailwindcss, SiStripe],
  },
  {
    id: 4,
    title: "Aura Commerce",
    link: "#",
    domain: "aura.store",
    category: "E-Commerce",
    year: "2024",
    version: "v3.2",
    description: "A headless e-commerce storefront built for speed and conversion, featuring AI-driven product recommendations and instant checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiTypescript, SiStripe, SiFigma],
  }
];

// --- SHARP CARD COMPONENT ---

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col lg:flex-row bg-card border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-colors duration-300"
    >
      {/* Hover Accent Line (Left) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom z-20" />

      {/* 1. Image Section */}
      <div className="w-full lg:w-[40%] h-64 lg:h-auto relative overflow-hidden bg-zinc-950">
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        
        {/* Corner Tag */}
        <div className="absolute top-0 left-0 z-20 bg-zinc-900 border-r border-b border-zinc-800 px-3 py-2">
            <Monitor size={16} className="text-zinc-500 group-hover:text-purple-400 transition-colors" />
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Metadata Bar */}
        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-800 p-4 bg-zinc-900/50">
           <span className="text-purple-400">Project_ID: 0{project.id}</span>
           <span className="hidden sm:inline">|</span>
           <span>Year: {project.year}</span>
           <span className="hidden sm:inline">|</span>
           <span>{project.version}</span>
        </div>

        <div className="p-6 md:p-8 flex flex-col h-full relative">
            {/* Title Row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1 font-medium">{project.category}</p>
                </div>
                
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors group/link"
                >
                    <span className="border-b border-zinc-700 group-hover/link:border-white pb-0.5 transition-colors">
                        VISIT SITE
                    </span>
                    <ArrowRight size={16} className="-rotate-45 group-hover/link:rotate-0 transition-transform duration-300" />
                </a>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-7 mb-8 border-l-2 border-zinc-800 pl-4">
                {project.description}
            </p>

            {/* Tech Stack - Bottom */}
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-dashed border-zinc-800">
                <div className="flex items-center gap-3">
                    {project.technologies.map((TechIcon, idx) => (
                        <div key={idx} className="text-zinc-500 hover:text-white transition-colors">
                            <TechIcon size={20} />
                        </div>
                    ))}
                </div>
                <Code1 size={20} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "SaaS", "Portfolio", "Dashboard", "E-Commerce"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (

    <Layout>


    <section className="min-h-screen  text-white  selection:bg-purple-500/30">
      
      <div className="lg:max-w-5xl mx-auto flex flex-col gap-12">
     
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"/>
                <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">System.Works</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Projects
            </h1>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all
                  ${filter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-white'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center border border-dashed border-zinc-800 rounded-lg">
               <p className="text-zinc-500 font-mono"> // No results found in database.</p>
               <button onClick={() => setFilter("All")} className="text-white mt-4 text-sm hover:underline">RESET_FILTER</button>
            </div>
          )}
        </div>

  

      </div>
    </section>
    </Layout>
  );
};
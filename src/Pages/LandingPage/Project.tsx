import React from 'react';
import { Flash, ArrowRight, } from 'iconsax-react';
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiFigma } from 'react-icons/si';


import ProjectCard, { type Project } from '../../Components/ProjectCard'; 


const projectsData: Project[] = [
  {
    id: 1,
    title: "Devcraft Portfolio",
    link: "https://devcraft.com",
    caseStudyLink: "/projects/devcraft", 
    domain: "devcraft.com",
    type: "Web",
    category: "Portfolio",
    year: "2024", 
    version: "v2.0", 
    description: "A high-performance personal portfolio showcasing expertise, passion, and innovation. Built with modern animations and strict TypeScript typing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", 
    technologies: [SiReact, SiTypescript, SiTailwindcss, SiFigma]
  },
  {
    id: 2,
    title: "Zenith Fitness App",
    link: "https://zenith.com",
    caseStudyLink: "/projects/zenith", 
    domain: "zenith.com",
    type: "Web",
    category: "Fitness SaaS",
    year: "2023",
    version: "v1.1", 
    description: "Empowering fitness enthusiasts with an immersive online experience. Features include workout tracking, nutrition planning, and live progress analytics.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiMongodb, SiNodedotjs, SiTailwindcss]
  },
  {
    id: 3,
    title: "NEXUS MOBILE",
    link: "#",
    caseStudyLink: "/projects/nexus",
    domain: "App Store",
    type: "Mobile",
    category: "iOS / Android",
    year: "2023",
    version: "Beta",
    description: "Mobile dashboard for managing e-commerce analytics on the go. Built with React Native for cross-platform performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiMongodb, SiNodedotjs, SiTailwindcss]
  },
];

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
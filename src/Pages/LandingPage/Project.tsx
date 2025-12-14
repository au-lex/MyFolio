import React from 'react';
import { Flash, Link, ArrowRight } from 'iconsax-react';
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiFigma } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  link: string;
  domain: string;
  category: string;
  stats: string;
  theme: string;
  description: string;
  image: string; // URL to the image
  technologies: React.ElementType[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Devcraft Portfolio",
    link: "https://devcraft.com",
    domain: "devcraft.com",
    category: "Portfolio",
    stats: "4 Pages",
    theme: "Dark Theme",
    description: "A high-performance personal portfolio showcasing expertise, passion, and innovation. Built with modern animations and strict TypeScript typing.",
    // Placeholder image from Unsplash (Replace with your local path e.g., "/images/project1.png")
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", 
    technologies: [SiReact, SiTypescript, SiTailwindcss, SiFigma]
  },
  {
    id: 2,
    title: "Zenith Fitness App",
    link: "https://zenith.com",
    domain: "zenith.com",
    category: "Fitness SaaS",
    stats: "Dashboard",
    theme: "Light Theme",
    description: "Empowering fitness enthusiasts with an immersive online experience. Features include workout tracking, nutrition planning, and live progress analytics.",
    // Placeholder image from Unsplash
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiMongodb, SiNodedotjs, SiTailwindcss]
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="">
      <div className=" mx-auto flex flex-col gap-12">
     
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Flash size={28} variant="Bold" color='currentColor' className="text-white" />
            <h2 className="text-3xl font-bold text-white">My Projects</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Explore a collection of my most innovative and visually stunning design and development works.
          </p>
        </div>

        {/* --- PROJECT LIST --- */}
        <div className="flex flex-col gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
     
              className="group flex flex-col lg:flex-row bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300"
            >
              
  
              <div className="w-full lg:w-[45%] h-64 lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10" /> 
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
              </div>

              {/* 2. PROJECT CONTENT */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                
                {/* Header: Title + Link Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-300 text-sm font-medium transition-colors w-fit"
                  >
                    <Link size={16} color='currentColor' />
                    {project.domain}
                  </a>
                </div>


                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack Row */}
                <div className="mt-auto pt-6 border-t border-zinc-800/50">
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                        Built With
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        {project.technologies.map((TechIcon, idx) => (
                            <div key={idx} className="p-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-all">
                                <TechIcon size={18} />
                            </div>
                        ))}
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- FOOTER BUTTON --- */}
        <button className="w-full py-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase transition-all">
          View All Projects
          <ArrowRight size={18} color='currentColor' />
        </button>

      </div>
    </section>
  );
};
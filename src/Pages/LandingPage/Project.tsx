import React from 'react';
import { Flash, ArrowRight } from 'iconsax-react';
import ProjectCard from '../../Components/ProjectCard';
import { projectsData } from '../../Data/ProjectData';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  return (
    <section aria-labelledby="projects-heading" className="text-text transition-colors duration-300">
      <div className="mx-auto flex flex-col gap-10">

        {/* SECTION HEADER */}
        <header 
          className="border-l-2 border-purple-500 pl-6 py-2"
          data-aos="fade-right"   
          data-aos-duration="1000"
        >
          <div className="flex items-center gap-3 mb-2">
            <Flash size={24} variant="Bold" color='currentColor'  className="text-text" aria-hidden="true" />
            <h2 id="projects-heading" className="text-3xl font-black uppercase tracking-tighter text-text">
              Selected Works
            </h2>
          </div>
          <p className="text-sec font-mono text-xs uppercase tracking-widest">
            Curated Deployments & Case Studies
          </p>
        </header>

        {/* PROJECT LIST */}
        <ul className="flex flex-col gap-8">
          {projectsData.slice(0, 4).map((project, index) => (
            <li 
              key={project.id}
              data-aos="fade-up"           
              data-aos-delay={index * 100} 
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        {/* SECTION FOOTER / LINK */}
        <footer 
          className="pt-4"
          data-aos="fade-up"     
          data-aos-delay="200"    
          data-aos-offset="0"   
        >
          <Link 
            to="/projects" 
            className="group w-full py-6 bg-pri border border-border hover:bg-sec/5 hover:border-purple-500/50 rounded-sm flex items-center justify-center gap-3 transition-all duration-300"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sec group-hover:text-text transition-colors">
              View All Projects
            </span>
            <div aria-hidden="true" className="bg-pri p-1 group-hover:bg-purple-500 transition-colors rounded-sm">
              <ArrowRight size={14}color='currentColor'  className="text-text group-hover:text-white" />
            </div>
          </Link>
        </footer>

      </div>
    </section>
  );
};
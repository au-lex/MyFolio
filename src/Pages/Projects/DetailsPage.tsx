import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExportSquare, Monitor, Mobile } from 'iconsax-react';
import { motion } from 'framer-motion';

import Layout from '../../layout/Layout';
import { projectsData } from '../../Data/ProjectData';
import { GiBassetHoundHead } from 'react-icons/gi';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-sec font-mono">
          <h1 className="text-4xl text-text mb-4">404</h1>
          <p>Project Data Not Found.</p>
          <button onClick={() => navigate('/projects')} className="mt-8 text-purple-500 hover:text-text underline">
            Return to Archive
          </button>
        </div>
      </Layout>
    );
  }

  const isMobile = project.category.toLowerCase().includes('mobile');

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // Updated: text-white -> text-text, bg-black -> bg-pri
        className="min-h-screen text-text pb-20 bg-pri selection:bg-purple-500/30 transition-colors duration-300"
      >
        {/* HERO HEADER */}
        {/* Updated: bg-zinc-900 -> bg-card, border-zinc-800 -> border-border */}
        <header className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden bg-card border-b border-border">
          <div className="absolute inset-0">
            <img
              src={project.banner}
              alt={project.title}
              className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
            {/* Gradient Overlay: Adjusts based on theme for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-pri via-pri/80 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 max-w-7xl mx-auto z-10">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={() => navigate(-1)}
              // Updated: text-zinc-400 -> text-sec
              className="flex items-center gap-2 text-sec hover:text-text mb-8 transition-colors text-xs font-bold uppercase tracking-widest group"
              type="button"
            >
              <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 group-hover:text-purple-500 transition-all">
                <ArrowLeft size={14} color="currentColor" />
              </div>
              Back to Archive
            </motion.button>

            <div className="flex items-center gap-3 mb-4">
              {isMobile ? <Mobile size={20} className="text-purple-500" /> : <Monitor size={20} className="text-purple-500" />}
              <span className="text-purple-500 font-mono text-sm tracking-widest uppercase">{project.category}</span>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              // Updated: text-white -> text-text
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 text-text"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              // Updated: text-zinc-400 -> text-sec
              className="text-lg md:text-2xl text-sec font-light max-w-2xl leading-relaxed"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 lg:mt-24">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-20">
            <section aria-labelledby="challenge-heading">
              <header className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-purple-500" aria-hidden="true"></span>
                <h3 id="challenge-heading" className="text-sec font-mono text-sm tracking-widest uppercase">01 // The Challenge</h3>
              </header>
              <p className="text-sec text-lg md:text-xl leading-loose whitespace-pre-line font-light">
                {project.challenge}
              </p>
            </section>

            <section aria-labelledby="solution-heading">
              <header className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-purple-500" aria-hidden="true"></span>
                <h3 id="solution-heading" className="text-sec font-mono text-sm tracking-widest uppercase">02 // The Engineering</h3>
              </header>
              <p className="text-sec text-lg md:text-xl leading-loose whitespace-pre-line font-light">
                {project.solution}
              </p>
            </section>

            <section aria-labelledby="gallery-heading">
              <header className="flex items-center gap-3 mb-8">
                <span className="w-12 h-[1px] bg-border" aria-hidden="true"></span>
                <h3 id="gallery-heading" className="text-sec font-mono text-sm tracking-widest uppercase">03 // Interface Gallery</h3>
              </header>

              <div className="grid grid-cols-1 gap-8">
                {project.gallery.map((img, index) => (
                  <figure key={index} className="group relative rounded-sm overflow-hidden border border-border bg-card shadow-lg">
                    <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                  </figure>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-12">
            <dl className="p-8 border border-border bg-card backdrop-blur-sm rounded-sm space-y-8 shadow-xl">
              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <dt className="block text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-2">Role</dt>
                  <dd className="text-text text-lg font-medium">{project.role}</dd>
                </div>
                <div className="border-b border-border pb-4">
                  <dt className="block text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-2">Timeline</dt>
                  <dd className="text-text text-lg font-medium">{project.timeline}</dd>
                </div>
                <div className="pb-2">
                  <dt className="block text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-2">Client</dt>
                  <dd className="text-text text-lg font-medium">{project.client}</dd>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    // Updated: bg-white text-black -> bg-text text-pri
                    className="flex items-center justify-between w-full px-6 py-4 bg-text text-pri font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all rounded-sm shadow-md"
                  >
                    Preview Project <ExportSquare size={16} color='currentColor' />
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    // Updated: border-zinc-700 -> border-border
                    className="flex items-center justify-between w-full px-6 py-4 border border-border bg-pri text-sec font-bold uppercase text-xs tracking-widest hover:border-purple-500 hover:text-purple-500 transition-colors rounded-sm"
                  >
                    Source Code <GiBassetHoundHead size={16} />
                  </a>
                )}
              </div>
            </dl>

            <section aria-labelledby="stack-heading">
              <h3 id="stack-heading" className="text-sec font-mono text-xs tracking-widest uppercase mb-6 border-b border-border pb-2">Technical Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 border border-border bg-pri text-[10px] font-bold text-sec uppercase hover:border-purple-500 hover:text-purple-500 transition-colors cursor-default"
                  >
                    <tech.icon className="text-purple-500" size={14} />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="features-heading">
              <h3 id="features-heading" className="text-sec font-mono text-xs tracking-widest uppercase mb-6 border-b border-border pb-2">Key Features</h3>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-sec leading-relaxed group">
                    <span className="text-purple-500 mt-[6px] text-[10px]" aria-hidden="true">■</span>
                    <span className="group-hover:text-text transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </motion.article>
    </Layout>
  );
};
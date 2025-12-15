import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowLeft, ExportSquare, Code, Calendar, 
  User, TickCircle, Gallery, ArrowRight 
} from 'iconsax-react';
import { 
  SiReact, SiTypescript, SiTailwindcss,  SiNextdotjs,
} from 'react-icons/si';


const projectData = {
  id: 1,
  title: "Devcraft Portfolio",
  subtitle: "High-Performance Personal Brand Identity",
  category: "Web Engineering",
  banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
  liveLink: "https://devcraft.com",
  repoLink: "https://github.com/devcraft",
  client: "Personal Project",
  timeline: "4 Weeks",
  role: "Full Stack Dev",
  stack: [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
  ],
  challenge: "The goal was to create a portfolio that didn't just display work, but demonstrated technical capability through its very existence. The challenge was balancing high-end 3D animations with 100/100 Lighthouse performance scores.",
  solution: "I utilized Next.js for static generation to ensure instant load times. For animations, I abstracted complex Framer Motion logic into reusable hooks. The design system is strictly typed, ensuring visual consistency across all pages.",
  features: [
    "Zero-runtime CSS styling architecture",
    "Type-safe component library",
    "Dynamic OG Image generation",
    "MDX-powered blog system"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
  ]
};

// --- COMPONENTS ---

const SectionHeader: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="font-mono text-purple-500 text-sm">/{number}</span>
    <h2 className="text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
    <div className="h-[1px] bg-zinc-800 flex-1 ml-4" />
  </div>
);

const BlueprintImage: React.FC<{ src: string; caption: string }> = ({ src, caption }) => (
  <div className="group relative mt-8 mb-12">
    {/* Frame Decoration */}
    <div className="absolute -inset-2 border border-zinc-800 rounded-sm opacity-50 z-0" />
    <div className="relative z-10 bg-zinc-900 border border-zinc-700 p-1">
      <img src={src} alt="Project detail" className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="flex justify-between items-center mt-3 px-1">
      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-l-2 border-purple-500 pl-2">
        FIG_IMAGE_RENDER
      </span>
      <span className="text-xs text-zinc-400 font-medium italic">
        {caption}
      </span>
    </div>
  </div>
);

export const ProjectDetails: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-purple-500/30">
      
      {/* 1. PROGRESS BAR (Top Fixed) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* 2. NAVIGATION HEADER */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()} // Or use router navigation
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            BACK_TO_INDEX
          </button>
          <div className="hidden md:flex items-center gap-6">
            <a href={projectData.liveLink} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-purple-400 transition-colors">
              Live Demo <ExportSquare size={14} />
            </a>
            <div className="w-[1px] h-4 bg-zinc-800" />
            <a href={projectData.repoLink} target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-purple-400 transition-colors">
              Source <Code size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <header className="relative pt-32 pb-16 px-4 border-b border-zinc-800 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-purple-500/30 bg-purple-500/10 rounded-full">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">
              {projectData.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {projectData.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {projectData.subtitle}
          </p>
        </div>
      </header>

      {/* 4. METADATA GRID (HUD Style) */}
      <div className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800 border-x border-zinc-800">
          {[
            { label: "Client", value: projectData.client, icon: User },
            { label: "Timeline", value: projectData.timeline, icon: Calendar },
            { label: "Role", value: projectData.role, icon: Code },
            { label: "Date", value: "Oct 2023", icon: Gallery }, // Placeholder
          ].map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col gap-2 group hover:bg-zinc-900 transition-colors">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono uppercase tracking-wider">
                <item.icon size={14} /> {item.label}
              </div>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN (Content) */}
        <div className="lg:col-span-8">
          
          {/* Main Image */}
          <BlueprintImage src={projectData.banner} caption="Hero Dashboard Interface - Dark Mode" />

          {/* Challenge Section */}
          <section className="mb-16">
            <SectionHeader number="01" title="The Challenge" />
            <p className="text-zinc-400 leading-8 text-lg">
              {projectData.challenge}
            </p>
          </section>

          {/* Solution Section */}
          <section className="mb-16">
            <SectionHeader number="02" title="The Approach" />
            <p className="text-zinc-400 leading-8 text-lg mb-8">
              {projectData.solution}
            </p>
            
            {/* Features List */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Code size={20} className="text-purple-500" />
                Technical Implementation
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <TickCircle size={18} className="text-zinc-600 mt-0.5 shrink-0" variant="Bold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Gallery Grid */}
          <section>
             <SectionHeader number="03" title="Interface Gallery" />
             <div className="grid grid-cols-1 gap-8">
                {projectData.gallery.map((img, idx) => (
                   <BlueprintImage key={idx} src={img} caption={`System View ${idx + 1}.0 // Detail Shot`} />
                ))}
             </div>
          </section>

        </div>

        {/* RIGHT COLUMN (Sidebar Sticky) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 space-y-12">
            
            {/* Tech Stack Widget */}
            <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/20">
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectData.stack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-zinc-300 hover:text-white hover:border-purple-500/50 transition-colors cursor-default">
                    <tech.icon size={16} />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Project Teaser */}
            <div className="group cursor-pointer">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Next Project</div>
              <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                Zenith Fitness App
              </h4>
              <div className="h-40 overflow-hidden rounded-lg border border-zinc-800 relative">
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt="Next project"
                 />
                 <div className="absolute bottom-4 right-4 z-20 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <ArrowRight size={16} />
                 </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      
    </div>
  );
};
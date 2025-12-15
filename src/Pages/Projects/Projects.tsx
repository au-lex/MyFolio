import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight2 } from 'iconsax-react';
import { 
  SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, 
  SiMongodb, SiNextdotjs, SiFigma, SiStripe, SiFirebase, SiFlutter, SiPostgresql, SiDocker 
} from 'react-icons/si';

// Imports
import Layout from '../../layout/Layout';
import ProjectCard,  { type Project } from '../../Components/ProjectCard';

// Data Array
const projectsData: Project[] = [
  {
    id: 1,
    title: "DEVCRAFT PORTFOLIO",
    link: "https://devcraft.com",
    caseStudyLink: "/projects/devcraft",
    domain: "devcraft.com",
    type: "Web",
    category: "Portfolio",
    year: "2024",
    version: "v2.0.4",
    description: "A high-performance personal portfolio showcasing expertise. Built with strict TypeScript typing and framer motion for fluid transitions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiTypescript, SiTailwindcss, SiFigma],
  },
  {
    id: 2,
    title: "ZENITH FITNESS",
    link: "https://zenith.com",
    caseStudyLink: "/projects-details",
    domain: "zenith.com",
    type: "Web",
    category: "SaaS Platform",
    year: "2023",
    version: "v1.1.0",
    description: "Empowering fitness enthusiasts with an immersive online experience. Features include workout tracking and live progress analytics.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiMongodb, SiNodedotjs, SiTailwindcss],
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
    technologies: [SiReact, SiFirebase, SiTailwindcss, SiStripe],
  },
  {
    id: 4,
    title: "AURA COMMERCE",
    link: "#",
    caseStudyLink: "/projects/aura",
    domain: "aura.store",
    type: "Web",
    category: "E-Commerce",
    year: "2024",
    version: "v3.2",
    description: "A headless e-commerce storefront built for speed and conversion, featuring AI-driven product recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiTypescript, SiStripe, SiFigma],
  },
  {
    id: 5,
    title: "QUANTUM FINANCE",
    link: "#",
    caseStudyLink: "/projects/quantum",
    domain: "quantum.fi",
    type: "Web",
    category: "Fintech",
    year: "2024",
    version: "v1.0",
    description: "Real-time stock trading simulator with WebSocket integration for live data updates and complex charting.",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiPostgresql, SiDocker, SiTypescript],
  },
  {
    id: 6,
    title: "ECHO SOCIAL",
    link: "#",
    caseStudyLink: "/projects/echo",
    domain: "echo.app",
    type: "Mobile",
    category: "Social Media",
    year: "2023",
    version: "v2.1",
    description: "A minimalist social networking app focusing on voice notes and audio interactions.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiFlutter, SiFirebase, SiFigma],
  },
  {
    id: 7,
    title: "TITAN CMS",
    link: "#",
    caseStudyLink: "/projects/titan",
    domain: "titan.io",
    type: "Web",
    category: "CMS",
    year: "2022",
    version: "Legacy",
    description: "Custom Content Management System designed for high-volume news publishers.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiNextdotjs, SiPostgresql, SiNodedotjs],
  },
  {
    id: 8,
    title: "ORBITAL MAPS",
    link: "#",
    caseStudyLink: "/projects/orbital",
    domain: "orbital.maps",
    type: "Web",
    category: "Utility",
    year: "2024",
    version: "Alpha",
    description: "Interactive 3D mapping application using WebGL for satellite tracking visualization.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiTypescript, SiTailwindcss],
  },
  {
    id: 9,
    title: "HELIX HEALTH",
    link: "#",
    caseStudyLink: "/projects/helix",
    domain: "helix.care",
    type: "Mobile",
    category: "Healthcare",
    year: "2023",
    version: "v1.0.5",
    description: "Patient portal mobile application for scheduling and secure medical record access.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiFlutter, SiMongodb, SiNodedotjs],
  },
  {
    id: 10,
    title: "CRYPTEX VAULT",
    link: "#",
    caseStudyLink: "/projects/cryptex",
    domain: "cryptex.security",
    type: "Web",
    category: "Security",
    year: "2024",
    version: "v2.0",
    description: "Zero-knowledge encryption file storage solution for enterprise clients.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiTypescript, SiDocker],
  },
  {
    id: 11,
    title: "VELOCITY DRIVE",
    link: "#",
    caseStudyLink: "/projects/velocity",
    domain: "velocity.auto",
    type: "Mobile",
    category: "IoT",
    year: "2023",
    version: "v1.4",
    description: "Companion app for smart electric vehicles, controlling climate and battery monitoring.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiFlutter, SiFirebase, SiFigma],
  },
  {
    id: 12,
    title: "SPECTRA UI",
    link: "#",
    caseStudyLink: "/projects/spectra",
    domain: "spectra.design",
    type: "Web",
    category: "Design System",
    year: "2022",
    version: "v1.0",
    description: "A comprehensive React component library documented with Storybook.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
    technologies: [SiReact, SiTypescript, SiTailwindcss],
  }
];

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const categories = ["All", "Web", "Mobile"];

  // Filter Logic
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentData = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <Layout>
    <section className="min-h-screen text-white selection:bg-purple-500/30">
      <div className="lg:max-w-4xl mx-auto lg:py-12 flex flex-col lg:gap-12">
     
        {/* SHARP HEADER SECTION */}
        <header className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-800">
            {/* Left: Title Area */}
            <div className="lg:col-span-8 py-6 lg:py-8 lg:pr-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                        <span className="w-1 h-4 bg-purple-600"></span>
                        <span className="w-1 h-4 bg-zinc-700"></span>
                        <span className="w-1 h-4 bg-zinc-800"></span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase">System.Directory_v2</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                    Selected Works
                </h1>
                <h2 className="text-xl md:text-2xl text-zinc-500 font-light uppercase tracking-wide">
                    Engineering & Design Archive
                </h2>
            </div>

            {/* Right: Description & Stats */}
            <div className="lg:col-span-4 border-l border-zinc-800 pl-0 lg:pl-8 py-8 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                    // A curated collection of deployed applications, mobile interfaces, and system architectures. 
                    <br/><br/>
            
                </p>
                
                {/* Filter Tabs */}
                <div className="flex gap-2 mt-8">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`
                        px-4 py-1 text-[10px] font-bold uppercase tracking-widest border transition-all
                        ${filter === cat 
                            ? 'bg-white text-black border-white' 
                            : 'bg-transparent text-zinc-600 border-zinc-800 hover:border-zinc-500 hover:text-white'}
                        `}
                    >
                        {cat}
                    </button>
                    ))}
                </div>
            </div>
        </header>

        {/* Project Grid */}
        <div className="min-h-[600px]">
          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence mode='wait'>
                {currentData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
          </div>
          
          {currentData.length === 0 && (
            <div className="py-20 text-center border border-dashed border-zinc-800 bg-zinc-900/20">
               <p className="text-zinc-500 font-mono"> // SYSTEM ERROR: No projects found matching criteria.</p>
               <button onClick={() => setFilter("All")} className="text-white mt-4 text-xs font-bold uppercase border-b border-white pb-1">Reset Filter</button>
            </div>
          )}
        </div>

        {/* SHARP PAGINATION */}
        {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-zinc-800 pt-8">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
                >
                    <div className="w-8 h-8 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-colors">
                        <ArrowLeft color='#fff' size={14} />
                    </div>
                    <span>Prev</span>
                </button>

                <div className="font-mono text-xs text-zinc-500 tracking-widest">
                    PAGE <span className="text-white">0{currentPage}</span> <span className="text-zinc-700 mx-2">/</span> 0{totalPages}
                </div>

                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors"
                >
                    <span>Next</span>
                    <div className="w-8 h-8 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-colors">
                        <ArrowRight2 color='#fff' size={14} />
                    </div>
                </button>
            </div>
        )}

      </div>
    </section>
    </Layout>
  );
};
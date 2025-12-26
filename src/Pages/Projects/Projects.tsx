import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight2 } from 'iconsax-react';
import { useNavigate } from 'react-router-dom'; // Assuming react-router

// Imports
import Layout from '../../layout/Layout';
import ProjectCard from '../../Components/ProjectCard';
import { projectsData } from '../../Data/ProjectData';
export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const navigate = useNavigate();
  
  // Extract unique categories dynamically
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category.split(" / ")[0])))];

  // Filter Logic
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter));

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
      <div className="lg:max-w-6xl mx-auto lg:py-12 flex flex-col lg:gap-12 px-4">
     
        {/* SHARP HEADER SECTION */}
        <header className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-800 pb-8">
            <div className="lg:col-span-8 py-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                        <span className="w-1 h-4 bg-purple-600"></span>
                        <span className="w-1 h-4 bg-zinc-700"></span>
                        <span className="w-1 h-4 bg-zinc-800"></span>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase">System.Directory_v2</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                    Selected Works
                </h1>
                <h2 className="text-xl md:text-2xl text-zinc-500 font-light uppercase tracking-wide">
                    Engineering & Design Archive
                </h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="lg:col-span-12 flex flex-wrap gap-2 mt-4">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`
                    px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all
                    ${filter === cat 
                        ? 'bg-white text-black border-white' 
                        : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-500 hover:text-white'}
                    `}
                >
                    {cat}
                </button>
                ))}
            </div>
        </header>

        {/* Project Grid */}
        <div className="min-h-[600px] mt-8">
          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence mode='wait'>
                {currentData.map((project) => (
                    // We pass the onClick handler here to navigate to details
                    <div key={project.id} onClick={() => navigate(`/projects/${project.id}`)} className="cursor-pointer group">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* PAGINATION (Same as before) */}
        {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-zinc-800 pt-8 mt-8">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white disabled:opacity-30 transition-colors"
                >
                    <ArrowLeft size={16} /> Prev
                </button>
                <div className="font-mono text-xs text-zinc-500">
                    PAGE {currentPage} / {totalPages}
                </div>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white disabled:opacity-30 transition-colors"
                >
                    Next <ArrowRight2 size={16} />
                </button>
            </div>
        )}

      </div>
    </section>
    </Layout>
  );
};
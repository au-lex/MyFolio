import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

import Layout from "../../layout/Layout";
import ProjectCard from "../../Components/ProjectCard";
import { projectsData } from "../../Data/ProjectData";

export const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const navigate = useNavigate();

    const tabs = ["All", "Web", "Mobile"];

    const filteredProjects = projectsData.filter((project) => {
        if (filter === "All") return true;
        const isMobile = project.category.toLowerCase().includes("mobile");
        if (filter === "Mobile") return isMobile;
        if (filter === "Web") return !isMobile;
        return true;
    });

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const currentData = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Reset page and Refresh AOS when filter changes
    useEffect(() => {
        setCurrentPage(1);
        setTimeout(() => Aos.refresh(), 100);
    }, [filter]);

    // Refresh AOS when changing pages
    useEffect(() => {
        setTimeout(() => Aos.refresh(), 100);
    }, [currentPage]);

    return (
        <Layout>
            <section className="min-h-screen text-text selection:bg-purple-500/30 transition-colors duration-300">
                <div className="lg:max-w-6xl mx-auto lg:py-12 flex flex-col lg:gap-12 ">
                    <header className="grid grid-cols-1 lg:grid-cols-12 border-b border-border pb-8">
                        <div
                            className="lg:col-span-8 py-6"
                            data-aos="fade-right" // Header slides in from left
                            data-aos-duration="1000"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex gap-1">
                                    <span className="w-1 h-4 bg-purple-600"></span>
                                    <span className="w-1 h-4 bg-sec/40"></span>
                                    <span className="w-1 h-4 bg-sec/20"></span>
                                </div>
                                <span className="font-mono text-xs text-sec tracking-[0.2em] uppercase">
                                    PROJECTS
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-text uppercase tracking-tighter mb-2">
                                Selected Works
                            </h1>
                        </div>

                        {/* Filter Tabs */}
                        <div
                            className="lg:col-span-12 flex flex-wrap gap-2 mt-4"
                            data-aos="fade-up" // Tabs fade up
                            data-aos-delay="200"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`
                      px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all rounded-sm
                      ${filter === tab
                                            ? "bg-text text-pri border-text shadow-md"
                                            : "bg-card text-sec border-border hover:border-purple-500 hover:text-purple-500"
                                        }
                      `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </header>

                    {/* Project Grid */}
                    <div className="min-h-[600px] mt-8">
                        <div className="grid grid-cols-1 gap-8">
                            <AnimatePresence mode="wait">
                                {currentData.length > 0 ? (
                                    currentData.map((project, index) => (
                                        <div
                                            key={project.id}
                                            onClick={() => navigate(`/projects/${project.id}`)}
                                            className="cursor-pointer group"
                                            data-aos="fade-up" // Each project card fades up
                                            data-aos-delay={index * 100} // Staggered effect (1st: 0ms, 2nd: 100ms...)
                                            data-aos-once="true" // Animation happens once per page load
                                        >
                                            <ProjectCard project={project} />
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        className="py-20 text-center text-sec font-mono text-sm uppercase"
                                        data-aos="zoom-in"
                                    >
                                        No projects found in this sector.
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div
                            className="flex items-center justify-between border-t border-border pt-8 mt-8 mb-12"
                            data-aos="fade-up" // Pagination controls fade up at the bottom
                            data-aos-offset="10"
                        >
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-sec hover:text-purple-500 disabled:opacity-20 transition-colors"
                            >
                                <ArrowLeft size={16} /> Prev
                            </button>
                            <div className="font-mono text-xs text-sec bg-card border border-border px-4 py-1 rounded-full">
                                PAGE {currentPage} / {totalPages}
                            </div>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-sec hover:text-purple-500 disabled:opacity-20 transition-colors"
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

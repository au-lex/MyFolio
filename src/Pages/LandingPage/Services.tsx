

import React from 'react';
import { Flash, Monitor, Global, Brush, ChartSquare, } from 'iconsax-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting visually captivating and user-friendly interfaces. focusing on layout, typography, and color theory for maximum engagement.",
    icon: Monitor
  },
  {
    id: 2,
    title: "Web Development",
    description: "Engineering robust, scalable applications using modern frameworks. Ensuring performance, SEO, and accessibility compliance.",
    icon: Global
  },
  {
    id: 3,
    title: "Mobile Architecture",
    description: "Developing cross-platform mobile experiences that feel native. Seamless integration with hardware APIs and smooth animations.",
    icon: Brush
  },
  {
    id: 4,
    title: "Technical SEO",
    description: "Optimizing code structure and content delivery strategies to elevate visibility and drive organic traffic growth.",
    icon: ChartSquare
  }
];
export const Services: React.FC = () => {
  return (
    // Updated: text-white -> text-text
    <section className="text-text transition-colors duration-300">
      <div className="flex flex-col gap-10">
        
        {/* --- SHARP HEADER --- */}
        <div className="border-l-2 border-purple-500 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Flash size={24} variant="Bold" className="text-purple-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Services_Log</h2>
          </div>
          <p className="text-sec font-mono text-xs uppercase tracking-widest">
            // Core Competencies & Deliverables
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id} 
              // Updated: bg-card, border-border, hover:bg-sec/5
              className="group relative p-6 md:p-8 bg-card border border-border rounded-sm hover:border-purple-500/50 hover:bg-sec/5 transition-all duration-300 cursor-default overflow-hidden shadow-sm"
            >
              
              {/* Background Grid Pattern - Opacity managed for both modes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Top Row: Icon + ID */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                 {/* Icon Box - Updated: bg-pri, border-border, text-sec */}
                 <span className="w-12 h-12 rounded-sm bg-pri border border-border flex items-center justify-center text-sec group-hover:text-purple-500 group-hover:border-purple-500/30 transition-all shadow-md">
                    {/* CRITICAL: Removed color='#fff' and used currentColor */}
                    <service.icon size={22} color='currentColor' variant="Bold" />
                 </span>
                 
                 {/* ID Tag - Updated: text-zinc-600 -> text-sec/50 */}
                 <span className="font-mono text-[10px] text-sec/50 group-hover:text-purple-500/50 transition-colors uppercase">
                    SVC_0{service.id}
                 </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-text uppercase tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
       
                {/* Description - Updated: text-zinc-400 -> text-sec, border-zinc-800 -> border-border */}
                <p className="text-sec text-sm leading-relaxed border-l border-border pl-4 group-hover:border-purple-500/50 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Hover Interaction Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                 <ArrowUpRight size={20} className="text-purple-500" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
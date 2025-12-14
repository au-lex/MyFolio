import React from 'react';
import { Flash, Monitor, Global, Brush, ChartSquare,   } from 'iconsax-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  hasArrow?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting visually captivating and user-friendly websites for online success.",
    icon: Monitor
  },
  {
    id: 2,
    title: "Web Development",
    description: "Bringing ideas to life with robust and scalable web solutions.",
    icon: Global
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Creating visually stunning designs that captivate and engage audiences.",
    icon: Brush
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Elevating online visibility and driving organic traffic through strategic analysis.",
    icon: ChartSquare,
    hasArrow: true
  }
];

export const Services: React.FC = () => {
  return (
    <section className="">
      <div className=" flex flex-col gap-12">
        
        {/* --- SECTION HEADER --- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
      
            <Flash size={28} variant="Bold" color='currentColor' className="text-white" />
            <h2 className="text-3xl font-bold text-white">My Services</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <section
              key={service.id} 
              className="group relative p-4 bg-card flex justify-center   rounded-2xl  border border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            >
              
   
              <div className="cardc ">

            
              <div className="flex gap-3 items-center mb-2">
                <span className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white f group-hover:border-zinc-700 transition-colors">
                    <service.icon size={24} color="currentColor" variant="Bold" />
                </span>

                <h3 className="text-xl font-bold text-white   transition-colors">
                  {service.title}
                </h3>
       


              </div>

              <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
                </div>
            </section>
          ))}
        </div>

      </div>
    </section>
  );
};
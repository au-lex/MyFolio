// import React from 'react';
// import { Flash, Monitor, Global, Brush, ChartSquare,   } from 'iconsax-react';

// interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ElementType;
//   hasArrow?: boolean;
// }

// const servicesData: ServiceItem[] = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Crafting visually captivating and user-friendly websites for online success.",
//     icon: Monitor
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     description: "Bringing ideas to life with robust and scalable web solutions.",
//     icon: Global
//   },
//   {
//     id: 3,
//     title: "Mobile App Development",
//     description: "Creating visually stunning designs that captivate and engage audiences.",
//     icon: Brush
//   },
//   {
//     id: 4,
//     title: "SEO Optimization",
//     description: "Elevating online visibility and driving organic traffic through strategic analysis.",
//     icon: ChartSquare,
//     hasArrow: true
//   }
// ];

// export const Services: React.FC = () => {
//   return (
//     <section className="">
//       <div className=" flex flex-col gap-12">
        
//         {/* --- SECTION HEADER --- */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
      
//             <Flash size={28} variant="Bold" color='currentColor' className="text-white" />
//             <h2 className="text-3xl font-bold text-white">My Services</h2>
//           </div>
//           <p className="text-zinc-400 max-w-2xl text-lg">
//             Formulating comprehensive strategies to meet your design goals and exceed expectations.
//           </p>
//         </div>

//         {/* --- SERVICES GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {servicesData.map((service) => (
//             <section
//               key={service.id} 
//               className="group relative p-4 bg-card flex justify-center   rounded-2xl  border border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
//             >
              
   
//               <div className="cardc ">

            
//               <div className="flex gap-3 items-center mb-2">
//                 <span className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white f group-hover:border-zinc-700 transition-colors">
//                     <service.icon size={24} color="currentColor" variant="Bold" />
//                 </span>

//                 <h3 className="text-xl font-bold text-white   transition-colors">
//                   {service.title}
//                 </h3>
       


//               </div>

//               <p className="text-zinc-400 leading-relaxed">
//                   {service.description}
//                 </p>
//                 </div>
//             </section>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };


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
    <section className="text-white">
      <div className="flex flex-col gap-10">
        
        {/* --- SHARP HEADER --- */}
        <div className="border-l-2 border-purple-500 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Flash size={24} color='#fff' variant="Bold" className="text-purple-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Services_Log</h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            // Core Competencies & Deliverables
          </p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id} 
              className="group relative p-6 md:p-8 bg-card border border-zinc-800 rounded-sm hover:border-purple-500/50 hover:bg-zinc-900/40 transition-all duration-300 cursor-default overflow-hidden"
            >
              
              {/* Background Grid Pattern (Subtle) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Top Row: Icon + ID */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                 {/* Icon Box */}
                 <span className="w-12 h-12 rounded-sm bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all shadow-lg">
                    <service.icon size={22} color='#fff' variant="Bold" />
                 </span>
                 
                 {/* ID Tag */}
                 <span className="font-mono text-xs text-zinc-600 group-hover:text-purple-500/50 transition-colors">
                    SVC_0{service.id}
                 </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
       
                <p className="text-zinc-400 text-sm leading-relaxed border-l border-zinc-800 pl-4 group-hover:border-zinc-600 transition-colors">
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
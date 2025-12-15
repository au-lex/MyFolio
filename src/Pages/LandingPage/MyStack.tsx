// import React, { useState } from 'react';
// import { ArrowRight, ArrowDown2, ArrowUp2 } from 'iconsax-react'; // Added arrow icons for the toggle button

// import { 
//   SiReact, 
//   SiCss3, 
//   SiTailwindcss, 
//   SiNextdotjs, 
//   SiMongodb, 
//   SiPostgresql, 
//   SiGo, 
//   SiNodedotjs, 
//   SiExpress,
//   SiJavascript,
//   SiTypescript
// } from 'react-icons/si';

// interface StackItem {
//   name: string;
//   icon: React.ElementType; 
//   color: string; 
// }

// const stackItems: StackItem[] = [
//   { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
//   { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
//   { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
//   { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
//   { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
//   { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
//   { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
//   { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
//   { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
//   { name: 'Golang', icon: SiGo, color: 'text-cyan-500' },
//   { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
//   { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
// ];

// const StackCard: React.FC<StackItem> = ({ name, icon: Icon, color }) => (
//   <div className="flex items-center justify-between p-4  bg-card border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 group cursor-pointer">
//     <div className="flex items-center gap-4">
//       {/* Icon Container */}
//       <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
//         <Icon size={20} className={color} />
//       </div>
      
//       <h3 className="text-zinc-100 font-medium text-sm sm:text-base">{name}</h3>
//     </div>

//     <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
//   </div>
// );

// const MyStacks: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
  

//   const INITIAL_VISIBLE_COUNT = 6;

//   const visibleItems = showAll ? stackItems : stackItems.slice(0, INITIAL_VISIBLE_COUNT);

//   return (
//     <section className="py-8">
//       <div className="mb-6">
//         <div className="flex items-center gap-3 mb-4">
//           <h2 className="text-3xl font-bold text-white">My Stacks</h2>
//         </div>
//         <p className="text-zinc-400 max-w-2xl">
//            My preferred technologies for building robust, scalable applications across the full stack.
//         </p>
//       </div>


//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {visibleItems.map((item, index) => (
//           <StackCard 
//             key={index} 
//             name={item.name} 
//             icon={item.icon} 
//             color={item.color} 
//           />
//         ))}
//       </div>

//       {/* View More / View Less Button */}
//       {stackItems.length > INITIAL_VISIBLE_COUNT && (
//         <div className="mt-8 flex justify-center w-full">
//           <button 
//             onClick={() => setShowAll(!showAll)}
//             className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 text-sm font-medium"
//           >
//             {showAll ? 'View Less' : `View All (${stackItems.length})`}
//             {showAll ? (
//               <ArrowUp2 size={16} className="group-hover:-translate-y-0.5 transition-transform" />
//             ) : (
//               <ArrowDown2 size={16} className="group-hover:translate-y-0.5 transition-transform" />
//             )}
//           </button>
//         </div>
//       )}
 
//     </section>
//   );
// };

// export default MyStacks;



import React, { useState } from 'react';
import { ArrowDown2, ArrowUp2, Layer,  } from 'iconsax-react'; 

import { 
  SiReact, 
  SiCss3, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiGo, 
  SiNodedotjs, 
  SiExpress,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';

interface StackItem {
  name: string;
  icon: React.ElementType; 
  color: string; 
}

const stackItems: StackItem[] = [
  { name: 'React.js', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Golang', icon: SiGo, color: 'text-cyan-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
];

interface StackCardProps extends StackItem {
    index: number;
}

const StackCard: React.FC<StackCardProps> = ({ name, icon: Icon, color, index }) => (
  <div className="group relative flex items-center gap-4 p-4 bg-card border border-zinc-800 rounded-sm hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300 cursor-default">
    
    {/* Tech Index Number (e.g., 01, 02) */}
    <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
        {(index + 1).toString().padStart(2, '0')}
    </div>

    {/* Icon Container */}
    <div className="w-10 h-10 rounded-sm bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
      <Icon size={20} className={`${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
    </div>
    
    {/* Name */}
    <div>
        <h3 className="text-zinc-300 font-bold text-sm group-hover:text-white transition-colors tracking-wide">
            {name}
        </h3>
        {/* Decorative underline */}
        <div className="w-0 group-hover:w-full h-[1px] bg-zinc-600 mt-1 transition-all duration-500" />
    </div>
  </div>
);

const MyStacks: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_VISIBLE_COUNT = 8;
  const visibleItems = showAll ? stackItems : stackItems.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="text-white">
      <div className="">
        
        {/* --- SHARP HEADER --- */}
        <div className="mb-10 border-l-2 border-zinc-700 pl-6 py-2">
          <div className="flex items-center gap-3 mb-2">
            <Layer size={24} color='#fff' variant="Bold" className="text-zinc-100" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Tech_Stack</h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            // Core Infrastructure & Libraries
          </p>
        </div>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleItems.map((item, index) => (
            <StackCard 
              key={index}
              index={index}
              name={item.name} 
              icon={item.icon} 
              color={item.color} 
            />
          ))}
        </div>

        {/* --- SYSTEM TOGGLE BAR --- */}
        {stackItems.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <button 
              onClick={() => setShowAll(!showAll)}
              className="relative w-full py-4 border-t border-b border-zinc-800 hover:border-zinc-600 flex flex-col items-center justify-center gap-2 transition-all"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">
                 {showAll ? 'Collapse_View' : 'Expand_System'}
              </span>
              
              {showAll ? (
                <ArrowUp2 size={16} className="text-zinc-500 group-hover:text-white group-hover:-translate-y-1 transition-all" />
              ) : (
                <ArrowDown2 size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-y-1 transition-all" />
              )}
            </button>
          </div>
        )}
 
      </div>
    </section>
  );
};

export default MyStacks;
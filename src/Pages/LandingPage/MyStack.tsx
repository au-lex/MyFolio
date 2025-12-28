


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
  <div className="group relative flex items-center gap-4 p-4 bg-card border border-border rounded-sm hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300 cursor-default">
    
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
        <h3 className="text-text font-bold text-sm group-hover:text-white transition-colors tracking-wide">
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
            <Layer size={24}  variant="Bold"  color='currentColor'  className="text-text" />
            <h2 className="text-3xl font-black uppercase tracking-tighter text-text">Tech Stack</h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
             Core Technologies & Libraries
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
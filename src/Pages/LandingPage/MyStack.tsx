import React, { useState } from 'react';
import { ArrowRight, ArrowDown2, ArrowUp2 } from 'iconsax-react'; // Added arrow icons for the toggle button

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
  { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
  { name: 'Golang', icon: SiGo, color: 'text-cyan-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300' },
];

const StackCard: React.FC<StackItem> = ({ name, icon: Icon, color }) => (
  <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 group cursor-pointer">
    <div className="flex items-center gap-4">
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700 transition-colors">
        <Icon size={20} className={color} />
      </div>
      
      <h3 className="text-zinc-100 font-medium text-sm sm:text-base">{name}</h3>
    </div>

    <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
  </div>
);

const MyStacks: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  

  const INITIAL_VISIBLE_COUNT = 6;

  const visibleItems = showAll ? stackItems : stackItems.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="py-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-white">My Stacks</h2>
        </div>
        <p className="text-zinc-400 max-w-2xl">
           My preferred technologies for building robust, scalable applications across the full stack.
        </p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleItems.map((item, index) => (
          <StackCard 
            key={index} 
            name={item.name} 
            icon={item.icon} 
            color={item.color} 
          />
        ))}
      </div>

      {/* View More / View Less Button */}
      {stackItems.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-8 flex justify-center w-full">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 text-sm font-medium"
          >
            {showAll ? 'View Less' : `View All (${stackItems.length})`}
            {showAll ? (
              <ArrowUp2 size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ArrowDown2 size={16} className="group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      )}
 
    </section>
  );
};

export default MyStacks;
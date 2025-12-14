import React from 'react';
import { ArrowRight } from 'iconsax-react';

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
  <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-700">
        <Icon size={20} className={color} />
      </div>
      
      {/* Name Only (Subtitle removed) */}
      <h3 className="text-zinc-100 font-medium">{name}</h3>
    </div>

    <ArrowRight size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
  </div>
);

const MyStacks: React.FC = () => {
  return (
    <section className=" px-6">
      <div className="">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-white">My Stacks</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl">
             My preferred technologies for building robust, scalable applications across the full stack.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stackItems.map((item, index) => (
            <StackCard 
              key={index} 
              name={item.name} 
              icon={item.icon} 
              color={item.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStacks;
import React from 'react';
// Imports for Left Sidebar
import { Eye, ArrowUp2 } from 'iconsax-react';
import { DesktopNavItem } from '../../Components/ui/NavItems';

// Imports for Right Sidebar
import { Instagram, Global, CloseCircle } from 'iconsax-react';
import { SocialButton } from '../../Components/ui/SocialButton';

interface SidebarsProps {
  navLinks: Array<{ path: string; label: string; icon: any }>;
}

export const Sidebars: React.FC<SidebarsProps> = ({ navLinks }) => {
  return (
    <>
      {/* --- LEFT SIDEBAR --- */}
      <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-[100px] flex-col justify-between items-center py-8 z-30 bg-black border-r border-zinc-800">
        <div className="flex flex-col gap-6 items-center">
           <div className="w-10 h-10 flex items-center justify-center">
               <Eye size={28} variant="Bold" color='currentColor' className="text-white" />
           </div>
        </div>

        <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
                <DesktopNavItem 
                  key={link.path} 
                  to={link.path} 
                  label={link.label}
                  icon={link.icon} 
                />
            ))}
        </nav>

        <div>
          <ArrowUp2 size={20} color='currentColor' className="text-zinc-600" />
        </div>
      </aside>

      {/* --- RIGHT SIDEBAR --- */}
      <aside className="hidden xl:flex fixed right-0 top-0 h-screen w-[100px] flex-col justify-center items-center py-8 z-30 bg-black border-l border-zinc-800">
        <div className="flex flex-col gap-8">
            <SocialButton icon={Instagram} />
            <SocialButton icon={Global} />
            <SocialButton icon={CloseCircle} />
        </div>
      </aside>
    </>
  );
};
import React from 'react';
import { HambergerMenu,  Sun1 } from 'iconsax-react';

interface HeaderMobileProps {
  onOpenDrawer: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ onOpenDrawer }) => {
  return (
    <div className="xl:hidden flex justify-between items-center p-4 border-b border-zinc-800 bg-black sticky top-0 z-40">
      
      {/* LEFT SIDE: Logo */}
      <h2 className="flex items-center gap-2 font-bold text-xl text-white">
   Aulex
     
      </h2>

      {/* RIGHT SIDE: Actions (Theme + Menu) */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button
          className="flex items-center justify-center rounded-lg  text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
          title="Toggle Theme"
        >
          <Sun1 size={24} variant="Linear" color="currentColor" />
        </button>

        {/* Menu Toggle */}
        <button 
            onClick={onOpenDrawer} 
            className="p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <HambergerMenu size={24} color="currentColor" />
        </button>
      </div>

    </div>
  );
};
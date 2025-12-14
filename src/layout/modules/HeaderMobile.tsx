import React from 'react';
import { HambergerMenu, Eye } from 'iconsax-react';
import {  Sun1 } from 'iconsax-react';

interface HeaderMobileProps {
  onOpenDrawer: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ onOpenDrawer }) => {
  return (
    <div className="xl:hidden flex justify-between items-center p-4 border-b border-zinc-800 bg-black sticky top-0 z-40">
        <div className="flex items-center gap-3 justify-between">
          <button onClick={onOpenDrawer} className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors">
              <HambergerMenu size={24} color='currentColor' />
          </button>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <Eye size={24} variant="Bold" color='currentColor' className="text-white" />
              <span>PRAGADESH</span>
          </div>
                  
                      <button 
                          className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                          title="Toggle Theme"
                      >
                         <Sun1 size={20} variant="Linear" color='currentColor' /> 
                      </button>
        </div>
    </div>
  );
};
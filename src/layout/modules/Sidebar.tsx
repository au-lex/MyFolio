import React from 'react';

import {  ArrowUp2 } from 'iconsax-react';
import { DesktopNavItem } from '../../Components/ui/NavItems';


import { SocialButton } from '../../Components/ui/SocialButton';
import { FaGithub, FaLinkedinIn,  FaXTwitter } from 'react-icons/fa6';

interface SidebarsProps {
  navLinks: Array<{ path: string; label: string; icon:React.ElementType }>;
}

export const Sidebars: React.FC<SidebarsProps> = ({ navLinks }) => {
  return (
    <>
      {/* --- LEFT SIDEBAR --- */}
      <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-[100px] flex-col justify-between items-center py-8 z-30 bg-black border-r border-zinc-800">
        <div className="flex flex-col gap-6 items-center">
   
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
            <SocialButton icon={FaGithub} href='https://github.com/au-lex?tab=repositories' />
            <SocialButton icon={FaLinkedinIn} href='https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247' />
            <SocialButton icon={FaXTwitter} href='https://x.com/Aulex_0'  />
        </div>
      </aside>
    </>
  );
};
import React from 'react';
import { Menu, CloseCircle, Instagram, Global, Moon, Sun1 } from 'iconsax-react';
import { MobileNavItem } from '../../Components/ui/NavItems'; 
import { SocialButton } from '../../Components/ui/SocialButton';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ path: string; label: string;   icon: React.ElementType;  }>;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, navLinks, isDarkMode = true, toggleTheme }) => {
  return (
    <div className={`fixed inset-0 z-50 flex xl:hidden pointer-events-none`}>
        {/* Overlay */}
        <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={onClose}
        ></div>
        
        {/* Drawer Content */}
        <div 
          className={`relative w-64 h-full bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-out pointer-events-auto ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2 font-bold tracking-tighter text-white">
                  <Menu size={20} color='currentColor' variant="Bold" className='text-white'/>
                  <span>MENU</span>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-lg transition-colors">
                    <CloseCircle size={24} className="text-zinc-400"/>
                </button>
            </div>

            <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                    <MobileNavItem 
                      key={link.path}
                      to={link.path} 
                      label={link.label}
                      icon={link.icon} 
                      onClick={onClose}
                    />
                ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-zinc-900 flex flex-col gap-4">
                {/* Mobile Dark Mode Toggle */}
                <button 
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400"
                >
                    <span className="text-sm font-medium">Dark Mode</span>
                    {isDarkMode ? <Sun1 size={20} variant="Linear" /> : <Moon size={20} variant="Linear" />}
                </button>

                <div className="flex justify-between gap-2">
                    <SocialButton icon={Instagram} />
                    <SocialButton icon={Global} />
                    <SocialButton icon={CloseCircle} />
                </div>
            </div>
        </div>
    </div>
  );
};
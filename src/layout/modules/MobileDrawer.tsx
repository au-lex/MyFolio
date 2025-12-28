import React from 'react';
import { Menu, CloseCircle, } from 'iconsax-react';
import { MobileNavItem } from '../../Components/ui/NavItems'; 
import { SocialButton } from '../../Components/ui/SocialButton';
import { FaGithub, FaLinkedinIn,  FaXTwitter } from 'react-icons/fa6';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ path: string; label: string;   icon: React.ElementType;  }>;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, navLinks,  }) => {
  return (
    <div className={`fixed inset-0 z-50 flex xl:hidden pointer-events-none`}>

        <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={onClose}
            aria-hidden="true"
        ></div>
        

        <aside 
          className={`relative w-72 h-full bg-card border-r border-border p-6 flex flex-col shadow-2xl transition-transform duration-300 ease-out pointer-events-auto ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
            {/* Header section */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2 font-black tracking-tighter text-text uppercase">
                  <Menu size={20} variant="Bold" color='currentColor' className='text-text'/>
                  <span>Menu</span>
                </div>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-sec/10 text-sec hover:text-text rounded-sm transition-all"
                  aria-label="Close Menu"
                >
                    <CloseCircle size={24} />
                </button>
            </div>

            {/* Navigation section */}
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

            {/* Footer section - Changed to <footer> for semantic structure */}
            <footer className="mt-auto pt-8 border-t border-border flex flex-col gap-6">
                
                
          

                {/* Social Actions */}
                <div className="flex justify-between items-center bg-sec/5 p-2 border border-border rounded-sm">
                   <SocialButton icon={FaGithub} href='https://github.com/au-lex?tab=repositories' />
                   <SocialButton icon={FaLinkedinIn} href='https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247' />
                   <SocialButton icon={FaXTwitter} href='https://x.com/Aulex_0'  />
                </div>
                
     
            </footer>
        </aside>
    </div>
  );
};
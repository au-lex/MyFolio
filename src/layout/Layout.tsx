import React, { useState } from 'react';
import { Home2, Briefcase, Sms } from 'iconsax-react';
import { Sidebars } from './modules/Sidebar';
import { HeaderDesktop } from './modules/HeaderDesktop';
import { HeaderMobile } from './modules/HeaderMobile';
import { MobileDrawer } from './modules/MobileDrawer';
import { useTheme } from '../Context/ThemeContext';

interface PortfolioLayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  

  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const navLinks = [
    { path: '/', label: 'Home', icon: Home2 },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Sms },
  ];

  return (
  
    <div className="min-h-screen flex flex-col font-sans bg-pri text-text selection:bg-sec selection:text-pri transition-colors duration-300">
      
      {/* 1. MOBILE HEADER */}
      <HeaderMobile onOpenDrawer={() => setIsDrawerOpen(true)} />

      <Sidebars navLinks={navLinks} />

      {/* 4. MAIN CONTENT WRAPPER - Remove bg-black */}
      <main className="flex-1 flex flex-col min-w-0 xl:mx-[100px]">
        
        <HeaderDesktop 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />

        {/* Dynamic Page Content */}
        <div className="flex-1 w-full p-6">
            {children}
        </div>

        {/* 5. FOOTER - Update border and text colors */}
        <footer className="w-full py-6 px-6 border-t border-border mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
            
            {/* Copyright - change text-zinc-100 to text-sec */}
            <p className='text-sec'>
              &copy; {new Date().getFullYear()} Aulex. All Rights Reserved.
            </p>
          </div>
        </footer>

      </main>

      {/* 4. MOBILE DRAWER */}
      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        navLinks={navLinks}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

    </div>
  );
};

export default Layout;
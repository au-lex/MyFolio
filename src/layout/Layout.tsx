import React, { useState } from 'react';
import { Home2, Briefcase, Sms } from 'iconsax-react';
import { Sidebars } from './modules/Sidebar';
import { HeaderDesktop } from './modules/HeaderDesktop';
import { HeaderMobile } from './modules/HeaderMobile';
import { MobileDrawer } from './modules/MobileDrawer';

interface PortfolioLayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Note: Toggle functionality is usually handled by a ThemeContext, 
  // but kept local here as per your snippet.
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home2 },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Sms },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white selection:bg-zinc-800 selection:text-white">
      
      {/* 1. MOBILE HEADER */}
      <HeaderMobile onOpenDrawer={() => setIsDrawerOpen(true)} />

      <Sidebars navLinks={navLinks} />

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-1 flex flex-col min-w-0 bg-black xl:mx-[100px]">
        
        <HeaderDesktop 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />

        {/* Dynamic Page Content */}
        <div className="flex-1 w-full p-6">
            {children}
        </div>

        {/* 5. FOOTER */}
        <footer className="w-full py-6 px-6 border-t border-zinc-800 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
            
            {/* Copyright */}
            <p className='text-zinc-100'>
              &copy; {new Date().getFullYear()} Aulex. All Rights Reserved.
            </p>

            {/* Optional Footer Links */}
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300 text-zinc-100 transition-colors">Twitter</a>
              <a href="#" className="hover:text-zinc-300 text-zinc-100 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-zinc-300  text-zinc-100 transition-colors">Github</a>
            </div>

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
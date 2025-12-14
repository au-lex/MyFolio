import React, { useState } from 'react';
import { Home2, Briefcase, Sms } from 'iconsax-react';
import { Sidebars } from './modules/Sidebar'; // Import the combined component
import { HeaderDesktop } from './modules/HeaderDesktop';
import { HeaderMobile } from './modules/HeaderMobile';
import { MobileDrawer } from './modules/MobileDrawer';

interface PortfolioLayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
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

      {/* 2. COMBINED SIDEBARS 
          Contains both fixed Left and Fixed Right bars.
          They sit "above" the layout visually due to position: fixed.
      */}
      <Sidebars navLinks={navLinks} />

      {/* 3. MAIN CONTENT
          We apply left and right margins (xl:mx-[100px]) to push the 
          content into the center, between the two fixed sidebars.
      */}
      <main className="flex-1 flex flex-col min-w-0 bg-black xl:mx-[100px]">
        
        <HeaderDesktop 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />

        <div className="flex-1 w-full p-6">
            {children}
        </div>

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
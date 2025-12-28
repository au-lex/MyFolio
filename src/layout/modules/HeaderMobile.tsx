import React from 'react';
import { HambergerMenu, Sun1, Moon } from 'iconsax-react'; 
import { useTheme } from '../../Context/ThemeContext';

interface HeaderMobileProps {
  onOpenDrawer: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ onOpenDrawer }) => {

  const { theme, toggleTheme } = useTheme();

  return (

    <div className="xl:hidden flex justify-between items-center p-4 border-b border-border bg-card sticky top-0 z-40 transition-colors duration-300">
      
      {/* LEFT SIDE: Logo */}
      <h2 className="flex items-center gap-2 font-bold text-xl text-text">
        Aulex
      </h2>

      <div className="flex items-center gap-6">
        
        {/* 3. The Theme Toggle Button */}
        <button
          onClick={toggleTheme} 
          className="flex items-center justify-center rounded-lg text-sec hover:text-text transition-all"
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
 
          {theme === 'light' ? (
            <Moon size={24} variant="Linear" color="currentColor" />
          ) : (
            <Sun1 size={24} variant="Linear" color="currentColor" />
          )}
        </button>


        <button 
            onClick={onOpenDrawer} 
            className="p-2 text-sec hover:text-text transition-colors"
        >
          <HambergerMenu size={24} color="currentColor" />
        </button>
      </div>

    </div>
  );
};
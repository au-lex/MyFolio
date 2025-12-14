import React from 'react';
import { Moon, Sun1 } from 'iconsax-react';

interface HeaderDesktopProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ isDarkMode = true, toggleTheme }) => {
  return (
    <header className="hidden xl:flex h-24 border-b border-zinc-800 items-center justify-between px-8 sticky top-0 bg-black/80 backdrop-blur-md z-10">
        <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Available For Work</span>
        </div>

        <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
                <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Local Time ( IST )</span>
                <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg font-mono text-zinc-300 text-sm">
                    01:59:45
                </div>
            </div>

           
            <button 
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                title="Toggle Theme"
            >
                {isDarkMode ? <Sun1 size={20} variant="Linear" color='currentColor' /> : <Moon size={20} color='currentColor' variant="Linear" />}
            </button>
        </div>
    </header>
  );
};
import React from 'react';
import { Moon, Sun1 } from 'iconsax-react';

interface HeaderDesktopProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ isDarkMode = true, toggleTheme }) => {
  return (
    // Updated: bg-black/80 -> bg-pri/80, border-zinc-800 -> border-border
    <header className="hidden xl:flex h-24 border-b border-border items-center justify-between px-8 sticky top-0 bg-pri/80 backdrop-blur-md z-10 transition-colors duration-300">

      {/* Availability Badge - Updated: bg-zinc-900 -> bg-sec/10, border-zinc-800 -> border-border */}
      <div className="bg-sec/10 border border-border px-4 py-2 rounded-full flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-medium text-text uppercase tracking-wide">Available For Work</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="text-sec text-xs font-medium uppercase tracking-wider">Local Time ( IST )</span>
          {/* Time Display - Updated: bg-zinc-900 -> bg-card, text-zinc-300 -> text-text */}
          <div className="bg-card border border-border px-4 py-2 rounded-lg font-mono text-text text-sm s">
            01:59:45
          </div>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          // Updated: bg-zinc-900 -> bg-card, border-zinc-800 -> border-border, text-zinc-400 -> text-sec
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-card text-sec hover:text-purple-500 hover:border-purple-500 transition-all s"
          title="Toggle Theme"
        >
          {isDarkMode ? (
            <Sun1 size={20} variant="Linear" color='currentColor' />
          ) : (
            <Moon size={20} color='currentColor' variant="Linear" />
          )}
        </button>
      </div>
    </header>
  );
};
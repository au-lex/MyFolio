import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  icon: React.ElementType; 
  label: string;
  onClick?: () => void;
}

export const DesktopNavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => (
    <NavLink 
        to={to}
        className={({ isActive }) => `
            group relative p-4 rounded-2xl transition-all duration-300
            ${isActive ? 'text-white bg-zinc-900' : 'text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300'}
        `}
    >
        {({ isActive }) => (
             <>
                <Icon size={24} color='currentColor' variant={isActive ? "Bold" : "Linear"} />
                {/* Tooltip */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-medium rounded-lg opacity-0 invisible -translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-50">
                    {label}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[5px] w-2 h-2 bg-zinc-800 border-l border-b border-zinc-700 transform rotate-45"></div>
                </div>
             </>
        )}
    </NavLink>
);

export const MobileNavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, onClick }) => (
    <NavLink 
        to={to} 
        onClick={onClick}
        className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
            ${isActive 
                ? ' text-text' 
                : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
            }
        `}
    >
         {({ isActive }) => (
            <>
                <Icon size={20} color='currentColor' variant={isActive ? "Bold" : "Linear"} />
                {label}
            </>
         )}
    </NavLink>
);
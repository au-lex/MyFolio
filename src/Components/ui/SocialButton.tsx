import React from 'react';

interface SocialButtonProps {
  icon: React.ElementType; 
  href?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, href = "#" }) => (
    <a 
      href={href} 
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-100 hover:text-white hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300"
    >
        <Icon size={20} color='currentColor' />
    </a>
);
import React from 'react';

interface SocialButtonProps {
  icon: React.ElementType; 
  href?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, href = "#" }) => (
    <a 
      href={href} 
      target="_blank"

      className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-sec hover:text-text hover:border-purple-500 hover:bg-sec/10 transition-all duration-300"
    >
        <Icon size={20} color='currentColor' />
    </a>
);
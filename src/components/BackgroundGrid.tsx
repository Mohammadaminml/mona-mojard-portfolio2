import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ellipse 3 (Blur Glow) */}
      <div className="absolute w-[280px] h-[280px] left-[4px] top-[4px] bg-[#59487E] blur-[225px] rounded-full" />
    </div>
  );
};
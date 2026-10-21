import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${event.clientX - 200}px, ${event.clientY - 200}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-[280px] h-[280px] left-[4px] top-[4px] bg-[#59487E] blur-[225px] rounded-full" />

      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/10 blur-[150px] rounded-full pointer-events-none transition-transform duration-75 ease-out will-change-transform"
      />
    </div>
  );
};
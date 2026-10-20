import React, { useEffect, useState } from 'react';

export const BackgroundGrid: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* هاله‌ی بنفش ثابت قبلی */}
      <div className="absolute w-[280px] h-[280px] left-[4px] top-[4px] bg-[#59487E] blur-[225px] rounded-full" />

      {/* هاله‌ی سفیدِ متحرک که دنبال‌کننده‌ی موس است */}
      <div
        className="absolute w-[400px] h-[400px] bg-white/10 blur-[150px] rounded-full pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
        }}
      />
    </div>
  );
};
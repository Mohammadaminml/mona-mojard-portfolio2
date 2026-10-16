import React from 'react';

interface SidebarProfileProps {
  name: string;
  role: string;
  bio: string;
  activeSection: string;
}

export const SidebarProfile: React.FC<SidebarProfileProps> = ({
  name,
  role,
  bio,
  activeSection
}) => {
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ];

  return (
    <aside className="lg:sticky lg:top-[90px] lg:h-[calc(100vh-180px)] flex flex-col justify-between w-full lg:w-[420px] shrink-0 z-10">
      <div>
        <h1 className="text-[36px] sm:text-[42px] font-bold text-white tracking-tight leading-tight">
          {name}
        </h1>
        <h2 className="mt-2 text-[20px] font-medium text-[#E2E8F0]">
          {role}
        </h2>
        <p className="mt-4 text-[16px] leading-[24px] font-light text-[#A8A8A8] max-w-[340px]">
          {bio}
        </p>

        {/* Navigation Links */}
        <nav className="hidden lg:flex flex-col gap-4 mt-16">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-4 text-[12px] font-bold tracking-widest uppercase transition-all"
              >
                <span
                  className={`h-[1px] transition-all duration-300 ${
                    isActive
                      ? 'w-16 bg-white'
                      : 'w-8 bg-[#7C7585] group-hover:w-16 group-hover:bg-white'
                  }`}
                />
                <span
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#7C7585] group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Social Icons / Contact */}
      <div className="flex items-center gap-5 mt-10 lg:mt-0 text-[#A8A8A8]">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
          </svg>
        </a>
        <a href="mailto:info@example.com" className="hover:text-white transition">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </aside>
  );
};
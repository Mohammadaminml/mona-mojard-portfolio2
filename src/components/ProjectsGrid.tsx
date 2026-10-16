import React from 'react';
import { IMainProject } from '../interfaces/main-portfolio.interface';

interface ProjectsGridProps {
  projects: IMainProject[];
  onViewAll: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onViewAll }) => {
  return (
    <section id="projects" className="flex flex-col items-start gap-[32px] w-full lg:w-[679px] pt-16 pb-24">
      <h3 className="text-[20px] font-bold text-white lg:hidden">Projects</h3>

      <div className="flex flex-col gap-[32px] w-full">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col sm:flex-row items-start py-4 gap-[24px] w-full transition"
          >
            {/* Device Thumbnail - Without black background or border */}
            <div className="w-[100px] h-[208px] shrink-0 flex items-center justify-center">
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col items-start gap-2 flex-grow">
              <a
                href={proj.link}
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-white hover:text-[#9D84D2] transition"
              >
                <span>{proj.title}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>

              <p className="text-[15px] leading-[22px] font-light text-[#A8A8A8]">
                {proj.description}
              </p>

              {/* Process Box */}
              <div className="p-3 bg-[#7C65AE]/20 rounded-lg w-full text-[#7C65AE] text-[14px] font-semibold leading-[24px] mt-1">
                {proj.processText}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to open All Projects Page */}
      <button
        onClick={onViewAll}
        className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[#9D84D2] transition cursor-pointer mt-2 group"
      >
        <span className="border-b border-transparent group-hover:border-[#9D84D2] pb-0.5">
          View Full Project Archive
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};
import React from 'react';
import { IMainProject } from '../interfaces/main-portfolio.interface';

interface ProjectsGridProps {
  projects: IMainProject[];
  onViewAll?: () => void;
}

const defaultProcessTexts: Record<string, string> = {
  'Digi Tala': 'Researched competitors and existing solutions, analyzed requirements and user flows, documented key interactions, and designed high-fidelity screens with thoughtful micro-interactions to create an intuitive ordering experience.',
  'CryptoGold': 'Reviewed requirements for new features, designed user flows for added functionalities, documented key interactions, and created high-fidelity screens with polished UI elements while maintaining consistency with the existing product design.',
  'Safir': 'Benchmarked each module individually, designed modular user flows and an overall flow connecting shared touchpoints, then created initial wireframes. The UI design went through iterative refinements, with features and modules adjusted through multiple stakeholder reviews until final approval.'
};

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, onViewAll }) => {
  return (
    <section id="projects" className="flex flex-col items-start gap-[40px] w-full lg:w-[679px] pt-16">
      <h3 className="text-[20px] font-bold text-white lg:hidden">Projects</h3>

      <div className="flex flex-col gap-[48px] w-full">
        {projects.map((project, idx) => {
          const title = (project as any).title || '';

          const projectImage = 
            (project as any).image || 
            (project as any).img || 
            (project as any).imageUrl || 
            (project as any).thumbnail || 
            (project as any).mockup ||
            (project as any).cover ||
            (project as any).src ||
            '';

          const processText = 
            (project as any).process || 
            (project as any).processDescription || 
            (project as any).processText || 
            (project as any).details || 
            (project as any).content || 
            (project as any).body || 
            (project as any).summary || 
            defaultProcessTexts[title] || 
            '';

          return (
            <div
              key={idx}
              className="group flex flex-col sm:flex-row items-start sm:items-stretch gap-6 sm:gap-8 p-5 -mx-5 rounded-2xl hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 w-[calc(100%+40px)]"
            >
              {/* ستون تصویر موکاپ (هم‌قد با کل بخش متنی) */}
              <div className="w-[125px] sm:w-[130px] shrink-0 flex items-center justify-center">
                {projectImage ? (
                  <img
                    src={projectImage}
                    alt={title || 'Project'}
                    className="w-full h-full max-h-[260px] object-contain object-left drop-shadow-xl"
                  />
                ) : (
                  <div className="w-full h-[250px] rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-[11px] text-[#7C7585]">
                    No Image
                  </div>
                )}
              </div>

              {/* ستون محتوای سمت راست */}
              <div className="flex flex-col flex-grow w-full justify-between">
                <div>
                  {/* ۱. تنظیم سایز عنوان پروژه (18px) */}
                  <a
                    href={(project as any).link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[18px] font-semibold text-white transition leading-snug"
                  >
                    <span>{title}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>

                  {/* ۲. تنظیم سایز توضیحات زیر عنوان (16px و فونت نازک) */}
                  <p className="mt-2 text-[16px] leading-[24px] font-light text-[#A8A8A8]">
                    {(project as any).description}
                  </p>
                </div>

                {/* ۳. تنظیم سایز متن داخل باکس Process (14px با خوانایی و فاصله خطوط دقیق) */}
                <div className="mt-4 p-5 rounded-xl bg-[#2D214A]/60 border border-[#7C65AE]/10 flex flex-col justify-center gap-1.5 text-[14px] leading-[23px] text-[#9D84D2] w-full flex-grow">
                  <span className="font-medium text-[#9D84D2]">
                    Process:
                  </span>
                  <p className="font-normal text-[#9D84D2]/90">
                    {processText}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* دکمه View Full Project Archive */}
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#9D84D2] transition mt-4"
        >
          <span>View Full Project Archive</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      )}
    </section>
  );
};
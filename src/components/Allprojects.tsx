import React, { useState } from 'react';
import { IMainProject } from '../interfaces/main-portfolio.interface';

interface AllProjectsProps {
  projects: IMainProject[];
  onBackHome: () => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({ projects, onBackHome }) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'app'>('desktop');

  const filteredProjects = projects.filter((p) =>
    activeTab === 'desktop' ? p.category === 'desktop' : p.category === 'app'
  );

  const displayList = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <section className="max-w-[1248px] mx-auto pt-[90px] pb-[120px] px-6 xl:px-0 flex flex-col items-start relative z-10">
      
      {/* Back Button & Title */}
      <div className="flex flex-col items-start gap-[2px] mb-[46px]">
        <button
          onClick={onBackHome}
          className="flex items-center gap-[4px] text-[#7C65AE] hover:text-white transition text-[18px] leading-[22px] font-semibold tracking-[-0.04em] cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-rotate-90"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
          <span>Back</span>
        </button>

        <h1
          className="text-[40px] leading-[48px] font-normal text-white tracking-[-0.04em]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          All Projects
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-[32px] mb-[64px]">
        <button
          onClick={() => setActiveTab('desktop')}
          className="flex flex-col justify-center items-start gap-[6px] cursor-pointer"
        >
          <span
            className={`text-[18px] leading-[24px] font-extrabold tracking-[-0.04em] transition ${
              activeTab === 'desktop' ? 'text-white' : 'text-[#7C7585]'
            }`}
          >
            Desktop Designs (14)
          </span>
          <div
            className={`h-[2px] transition-all duration-300 ${
              activeTab === 'desktop' ? 'w-full bg-white' : 'w-0 bg-transparent'
            }`}
          />
        </button>

        <button
          onClick={() => setActiveTab('app')}
          className="flex flex-col justify-center items-start gap-[6px] cursor-pointer"
        >
          <span
            className={`text-[18px] leading-[24px] font-extrabold tracking-[-0.04em] transition ${
              activeTab === 'app' ? 'text-white' : 'text-[#7C7585]'
            }`}
          >
            App Designs (12)
          </span>
          <div
            className={`h-[2px] transition-all duration-300 ${
              activeTab === 'app' ? 'w-full bg-white' : 'w-0 bg-transparent'
            }`}
          />
        </button>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[24px] gap-y-[40px] w-full">
        {displayList.map((proj) => (
          <div
            key={proj.id}
            // اضافه شدن کلاس‌های group و افکت هاور شیشه‌ای و نرم
            className="group flex flex-col sm:flex-row items-start p-[16px] gap-[24px] w-full xl:w-[612px] min-h-[264px] rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            {/* Left Image Container */}
            <div className="w-[100px] h-[208px] shrink-0 flex items-center justify-center">
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-start gap-[8px] w-full sm:w-[456px] flex-grow">
              {/* Title & Arrow */}
              <a
                href={proj.link}
                // استفاده از group-hover برای تغییر رنگ متن و حرکت فلش در زمان هاور روی کارت
                className="inline-flex items-center gap-[4px] text-[#7C7585] group-hover:text-white transition"
              >
                <span className="text-[15px] leading-[22px] font-medium">
                  {proj.title}
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
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>

              {/* Description */}
              <p className="text-[16px] leading-[22px] font-normal text-[#79819A] min-h-[44px]">
                {proj.description}
              </p>

              {/* Process Box */}
              <div className="flex justify-center items-center p-[12px] w-full min-h-[144px] bg-[#7C65AE]/20 rounded-[8px]">
                <p className="text-[14px] leading-[24px] font-semibold tracking-[-0.04em] text-[#7C65AE]">
                  {proj.processText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
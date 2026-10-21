import React from 'react';
import { IExperience } from '../interfaces/main-portfolio.interface';

interface ExperienceSectionProps {
  experiences: IExperience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="flex flex-col items-start gap-[32px] w-full lg:w-[679px] pt-16">
      <h3 className="text-[20px] font-bold text-white lg:hidden">Experience</h3>

      <div className="flex flex-col gap-[40px] w-full">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            // اضافه شدن کلاس‌های border و hover برای افکت بنفش شبیه به بخش پروژه‌ها
            className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-8 p-4 -mx-4 rounded-xl border border-transparent hover:border-[#9D84D2]/30 hover:bg-[#7C65AE]/10 hover:shadow-[0_0_30px_rgba(124,101,174,0.12)] transition-all duration-300"
          >
            {/* Period */}
            <span className="text-[13px] font-medium text-[#7C7585] uppercase tracking-wider w-[130px] shrink-0 pt-1">
              {exp.period}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-3 flex-grow">
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                // تغییر رنگ تایتل و آیکون به بنفش هنگام هاور
                className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-white group-hover:text-[#9D84D2] transition"
              >
                <span>{exp.role} · {exp.company}</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-white group-hover:text-[#9D84D2]"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>

              <p className="text-[15px] leading-[23px] font-light text-[#A8A8A8]">
                {exp.description}
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-[12px] font-medium text-[#9D84D2] bg-[#7C65AE]/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Resume Link */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-[#9D84D2] transition mt-2"
      >
        <span>View Full Resume</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </section>
  );
};
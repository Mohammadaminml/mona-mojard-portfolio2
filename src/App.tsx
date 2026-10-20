import React, { useState, useEffect } from 'react';
import {
  BackgroundGrid,
  SidebarProfile,
  AboutBio,
  ExperienceSection,
  ProjectsGrid,
  AllProjects,
} from './components';
import { mainPortfolioData } from './data/main-portfolio.data';

export function App() {
  const [view, setView] = useState<'home' | 'archive'>('home');
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  useEffect(() => {
    if (view !== 'home') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = ['about', 'experience', 'projects'];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  return (
    <div className="min-h-screen bg-[#1C1330] text-white relative selection:bg-[#7C65AE] selection:text-white pb-32">
      {/* Background Glow */}
      <BackgroundGrid />

      {view === 'home' ? (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[96px] pt-[90px] relative z-10 flex flex-col items-center">
          
          <div className="w-full max-w-[1248px] flex flex-col lg:flex-row justify-between gap-12 pb-24">
            
            <SidebarProfile
              name={mainPortfolioData.name}
              role={mainPortfolioData.role}
              bio={mainPortfolioData.bio}
              activeSection={activeSection}
            />

            <main className="flex flex-col items-start w-full lg:w-[679px]">
              
              <AboutBio paragraphs={mainPortfolioData.aboutParagraphs} />
              
              <div className="w-full mt-24"> 
                <ExperienceSection experiences={mainPortfolioData.experiences} />
              </div>

              <div className="w-full mt-24">
                <ProjectsGrid
                  projects={mainPortfolioData.projects}
                  onViewAll={() => setView('archive')}
                />
              </div>

            </main>

          </div>

        </div>
      ) : (
        <AllProjects
          projects={mainPortfolioData.archiveProjects}
          onBackHome={() => setView('home')}
        />
      )}
    </div>
  );
}

export default App;
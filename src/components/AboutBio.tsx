import React from 'react';

interface AboutBioProps {
  paragraphs: string[];
}

export const AboutBio: React.FC<AboutBioProps> = ({ paragraphs }) => {
  return (
    <div id="about" className="flex flex-col items-start gap-[20px] w-full lg:w-[679px] text-[18px] leading-[26px] font-light text-[#A8A8A8] tracking-tight">
      <p className="w-full">{paragraphs[0]}</p>
      
      <p className="w-full">
        Currently, I’m a UX/UI Designer at{' '}
        <span className="font-semibold text-white">VistaApp</span>
        {paragraphs[1]?.replace("Currently, I’m a UX/UI Designer at VistaApp", "")}
      </p>

      <p className="w-full">
        Before that, I spent 7 months as a UI/UX intern at{' '}
        <span className="font-semibold text-white">Mavara Pooya Sharif</span>
        {paragraphs[2]?.replace("Before that, I spent 7 months as a UI/UX intern at Mavara Pooya Sharif", "")}
      </p>

      <p className="w-full">{paragraphs[3]}</p>
      <p className="w-full">{paragraphs[4]}</p>
    </div>
  );
};
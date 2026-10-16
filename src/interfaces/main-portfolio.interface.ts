export interface IExperience {
  period: string;
  role: string;
  company: string;
  link: string;
  description: string;
  skills: string[];
}

export interface IMainProject {
  id: number;
  title: string;
  link: string;
  description: string;
  processText: string;
  deviceType: 'iphone' | 'macbook';
  category: 'desktop' | 'app';
  imageUrl: string;
}

export interface IMainPortfolioData {
  name: string;
  role: string;
  bio: string;
  aboutParagraphs: string[];
  experiences: IExperience[];
  projects: IMainProject[];
  archiveProjects: IMainProject[];
}
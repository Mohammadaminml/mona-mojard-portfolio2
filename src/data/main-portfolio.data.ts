import { IMainPortfolioData } from '../interfaces/main-portfolio.interface';

export const mainPortfolioData: IMainPortfolioData = {
  name: 'Mona Haffar Mojarrad',
  role: 'UI/UX Designer',
  bio: 'I design clean, intuitive, and user-focused digital experiences that feel both visually refined and effortlessly functional.',
  aboutParagraphs: [
    "I'm a UX/UI designer passionate about creating intuitive, human-centered digital experiences that balance aesthetics with clarity and purpose. My favorite work happens where thoughtful interaction design meets clean visual execution, crafting interfaces that not only look polished but genuinely solve user problems through simplicity and usability.",
    "Currently, I’m a UX/UI Designer at VistaApp, where I’ve been for the past 2 years and 6 months, designing product flows, crafting intuitive user journeys, and shaping interfaces that feel both functional and visually cohesive. My work spans from refining user flows and improving drop-off points to building scalable design systems and delivering high-fidelity UI for real-world products.",
    "Before that, I spent 7 months as a UI/UX intern at Mavara Pooya Sharif, where I worked on a product redesign and documented key design decisions, an experience that strengthened my foundations and helped me shape a more structured design process.",
    "Over the years, I’ve worked on a variety of projects, from mobile apps and web dashboards to motion-enhanced interfaces, always focusing on clarity, simplicity, and a deep understanding of user intent.",
    "When I’m not designing, I’m usually exploring new design trends, improving my workflow in Figma, or diving into product thinking to stay sharp and inspired."
  ],
  experiences: [
    {
      period: '2023 — Present',
      role: 'UX/UI Designer',
      company: 'VistaApp',
      link: 'https://vistaapp.ir/',
      description: 'Design and refine user flows, build intuitive interfaces, and contribute to the development of scalable design systems for web and mobile products. Collaborate closely with product managers and developers to create seamless, human-centered experiences.',
      skills: ['Figma', 'Adobe XD', 'Wireframing', 'User Flows', 'Prototyping', 'Interaction Design', 'Responsive Design', 'Usability Testing']
    },
    {
      period: '2021 — 2022',
      role: 'UI/UX Intern',
      company: 'Mavara Pooya Sharif',
      link: '#',
      description: 'Contributed to a product redesign and documented design decisions, gaining hands-on experience in wireframing, basic user research, and interface refinement.',
      skills: ['Figma', 'Adobe XD', 'Wireframing', 'Documentation', 'UI Redesign', 'Basic User Research']
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Digi Tala',
      link: '#',
      description: 'Gold jewelry sales application with order placement functionality.',
      processText: 'Process: Researched competitors and existing solutions, analyzed requirements and user flows, documented key interactions, and designed high-fidelity screens with thoughtful micro-interactions to create an intuitive ordering experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-1.png'
    },
    {
      id: 2,
      title: 'CryptoGold',
      link: '#',
      description: 'Crypto & gold trading platform with PROP and OTC.',
      processText: 'Process: Reviewed requirements for new features, designed user flows for added functionalities, documented key interactions, and created high-fidelity screens with polished UI elements while maintaining consistency with the existing product design.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-2.png'
    },
    {
      id: 3,
      title: 'Safir',
      link: '#',
      description: 'All-in-one travel super app for Arabic tourists.',
      processText: 'Process: Benchmarked each module individually, designed modular user flows and an overall flow connecting shared touchpoints, then created initial wireframes. The UI design went through iterative refinements, with features and modules adjusted through multiple stakeholder reviews until final approval.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-3.png'
    }
  ],
  archiveProjects: [
    // --- DESKTOP DESIGNS (14) ---
    {
      id: 1,
      title: 'CryptoGold',
      link: '#',
      description: 'Crypto & gold trading platform with PROP and OTC.',
      processText: 'Process: Reviewed requirements for new features, designed user flows for added functionalities, documented key interactions, and created high-fidelity screens with polished UI elements while maintaining consistency with the existing product design.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-4.png'
    },
    {
      id: 2,
      title: 'Ditex',
      link: '#',
      description: 'P2P & OTC crypto exchange with advanced trading features.',
      processText: 'Process: Evaluated requested features using a comparable global platform as reference, structured user flows for newly introduced functionalities, and delivered refined UI designs that remained consistent with the current system while localizing and adapting the reference patterns.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-5.png'
    },
    {
      id: 3,
      title: 'WhereCY',
      link: '#',
      description: 'Business platform for service listings, in-person discount codes, and classifieds.',
      processText: 'Process: Gathered requirements and analyzed competitor marketplaces, mapped user journeys for service registration and listings, and designed intuitive interfaces for discounts and classifieds. Iterated on layouts to ensure clarity and smooth navigation across all panels.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-6.png'
    },
    {
      id: 4,
      title: 'Baroque',
      link: '#',
      description: 'Booking platform for photography spaces and services for weddings and modeling.',
      processText: 'Process: Reviewed and benchmarked initial project documentation, mapped user flows, and created initial wireframes. The design went through extensive iterations, with over a dozen document revisions and frequent adjustments to features due to unclear initial requirements.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-7.png'
    },
    {
      id: 5,
      title: 'GhotbNama',
      link: '#',
      description: 'A multi-category classifieds platform with Reels and Stories to enhance product and profile discovery.',
      processText: 'Process: Researched inspiration from top marketplace platforms, mapped user flows, documented interactions, and adapted the design mid-process to a new language. Created high-fidelity screens with interactive elements for listings and Reels/Stories.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-8.png'
    },
    {
      id: 6,
      title: 'Shiko',
      link: '#',
      description: 'A multi-store fashion platform where users can purchase clothing from vendors in a single platform.',
      processText: 'Process: Researched competitors, mapped user flows, and documented interactions. Designed both user-facing screens and vendor/admin panels simultaneously with development constraints and admin restrictions.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-9.png'
    },
    {
      id: 7,
      title: 'Warmy',
      link: '#',
      description: 'A booking app for reserving boats, hotels, vessels, and tourist attractions for Hormuz Island.',
      processText: 'Process: Reviewed existing product flows, redesigned selected screens, and designed new pages to improve clarity and usability, focused on simplifying the booking experience while maintaining a cohesive visual language across redesigned and newly created interfaces.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-10.png'
    },
    {
      id: 8,
      title: 'Prop Trading',
      link: '#',
      description: 'A Prop-focused platform for trading and portfolio management.',
      processText: 'Process: Reviewed client requirements and trading flows, documented key interactions, and designed high-fidelity screens emphasizing clarity and efficiency. Iterated on visual directions based on feedback to ensure a consistent and engaging user experience.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-11.png'
    },
    {
      id: 9,
      title: 'Ferdowsi',
      link: '#',
      description: 'An e-commerce website designed for an online pharmacy platform.',
      processText: 'Process: Reviewed business requirements, structured product categories, mapped user flows, and designed high-fidelity screens with a focus on clarity, trust, accessibility, user confidence, and smooth checkout experience.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-12.png'
    },
    {
      id: 10,
      title: 'Odinex',
      link: '#',
      description: 'A crypto trading platform offering both Prop and OTC markets, delivering a clear, reliable experience.',
      processText: 'Process: Analyzed trading requirements, mapped flows for buying, selling, and order management, and documented interactions. Created high-fidelity screens emphasizing usability and quick execution. Iterated designs based on feedback to ensure a cohesive experience.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-13.png'
    },
    {
      id: 11,
      title: 'MatchPoint',
      link: '#',
      description: 'A website for booking courts, joining leagues, enrolling in classes, and connecting with coaches.',
      processText: 'Process: Analyzed user needs and client requirements, mapped flows for booking, leagues, and classes, and documented interactions. Designed high-fidelity pages ensuring clarity, usability, and engaging experience for all users.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-14.png'
    },
    {
      id: 12,
      title: 'Dandunet',
      link: '#',
      description: 'An app for booking dental appointments with insurance support, offering text, phone, and AI chat.',
      processText: 'Process: Reviewed client requirements and mapped appointment, insurance, and loan flows. Documented interactions and designed high-fidelity screens for patients and staff, integrating AI chat and ensuring a seamless, user-friendly experience.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-15.png'
    },
    {
      id: 13,
      title: 'Services',
      link: '#',
      description: 'A website for users to book and manage services, with access to schedules and expert profiles.',
      processText: 'Process: Reviewed client requirements, mapped booking and service flows, and documented interactions. Designed high-fidelity pages for users, focusing on clarity, ease of navigation, and a seamless experience across all services.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-16.png'
    },
        {
      id: 14,
      title: 'Formula',
      link: '#',
      description: 'A website for listing and selling cars, similar to Divar, featuring car valuations and custom sales options.',
      processText: 'Process: Reviewed client requirements, mapped listing, valuation, and sales flows, and documented key interactions. Designed high-fidelity pages for buyers and sellers, focusing on usability, clarity, and a seamless transaction experience.',
      deviceType: 'macbook',
      category: 'desktop',
      imageUrl: '/images/project-17.png'
    },

    // --- APP DESIGNS (12) ---
    {
      id: 15,
      title: 'Digi Tala',
      link: '#',
      description: 'Gold jewelry sales application with order placement functionality.',
      processText: 'Process: Researched competitors and existing solutions, analyzed requirements and user flows, documented key interactions, and designed high-fidelity screens with thoughtful micro-interactions to create an intuitive ordering experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-18.png'
    },
    {
      id: 16,
      title: 'Safir',
      link: '#',
      description: 'All-in-one travel super app for Arabic tourists.',
      processText: 'Process: Benchmarked each module individually, designed modular user flows and an overall flow connecting shared touchpoints, then created initial wireframes. The UI design went through iterative refinements, with features and modules adjusted through multiple stakeholder reviews until final approval.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-19.png'
    },
    {
      id: 17,
      title: 'Hamrah Style',
      link: '#',
      description: 'Fashion & styling platform with courses, consultations, sessions, and shop.',
      processText: 'Process: Reviewed project documentation and benchmarked relevant modules, mapped user flows in Miro, and created initial wireframes. The design evolved through multiple iterations as features were added or adjusted based on stakeholder feedback, including the introduction of a dedicated instructor panel during development.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-20.png'
    },
    {
      id: 18,
      title: 'Path Finder',
      link: '#',
      description: 'Psychology platform featuring personality assessments and an Ikigai module for self-discovery and life goal clarity.',
      processText: 'Process: Analyzed requirements and benchmarked similar products, defined and mapped user flows, and designed high-fidelity screens focused on clarity and self-reflection. Key interactions were documented and refined to ensure a smooth experience across personality tests and the Ikigai journey.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-21.png'
    },
    {
      id: 19,
      title: 'TamTam',
      link: '#',
      description: 'A bakery app that allows users to order bread online, with a dedicated delivery panel for couriers.',
      processText: 'Process: Analyzed the end-to-end ordering and delivery experience, defined key touchpoints for customers and couriers, and designed clear, task-focused interfaces for both sides. Delivered high-fidelity screens to support fast ordering and efficient delivery management.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-22.png'
    },
    {
      id: 20,
      title: 'Trade App',
      link: '#',
      description: 'A crypto exchange app featuring bold, vibrant visuals with dedicated Prop and OTC trading experiences.',
      processText: 'Process: Reviewed client requirements, mapped Prop and OTC trading flows, and documented key interactions. Based on client feedback, the visual direction evolved through multiple color iterations, with secondary and tertiary color palettes added to strengthen the overall visual identity during the design process.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-23.png'
    },
        {
      id: 21,
      title: 'The Dex',
      link: '#',
      description: 'A mini trading app designed for quick and easy execution of trades on-the-go.',
      processText: 'Process: Reviewed trading requirements, mapped essential user flows, and documented interactions. Designed high-fidelity screens focusing on speed, clarity, and seamless trading experience. Iterated based on feedback to ensure intuitive and efficient use.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-24.png'
    },
    {
      id: 22,
      title: 'MatchPoint',
      link: '#',
      description: 'An app for booking courts and clubs, participating in leagues, enrolling in classes, and connecting with coaches.',
      processText: 'Process: Reviewed user needs and client requirements, mapped booking, league, and class flows, and documented interactions. Designed high-fidelity screens for players, coaches, and admins, integrating social features and league management to ensure a smooth and engaging experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-25.png'
    },
    {
      id: 23,
      title: 'Dandunet',
      link: '#',
      description: 'An app for booking dental appointments with insurance support, offering text, phone, in-app, and dental panel.',
      processText: 'Process: Reviewed client requirements and mapped appointment, insurance, and loan flows. Documented interactions and designed high-fidelity screens for patients and dentists, integrating AI chat and ensuring a seamless, user-friendly experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-26.png'
    },
    {
      id: 24,
      title: 'Services',
      link: '#',
      description: 'An app for booking and managing various services, featuring a dedicated expert panel.',
      processText: 'Process: Reviewed client requirements, mapped booking and service flows, and documented key interactions. Designed high-fidelity screens for users and specialists, incorporating features to streamline communication, scheduling, and service management. Iterated designs based on feedback for a seamless experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-27.png'
    },
    {
      id: 25,
      title: 'Docio',
      link: '#',
      description: 'An app for booking appointments, featuring a dedicated doctor panel for schedule and visit management.',
      processText: 'Process: Reviewed client requirements and user needs, mapped appointment and availability flows, and documented key interactions. Designed high-fidelity screens for both patients and doctors, focusing on clarity, efficiency, and a smooth booking experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-28.png'
    },
    {
      id: 26,
      title: 'Adlyar',
      link: '#',
      description: 'An app for lawyers to manage cases and events, with text consultations and a client panel for booking sessions.',
      processText: 'Process: Reviewed client requirements and legal workflows, mapped case management and consultation flows, and documented key interactions. Designed high-fidelity screens for both lawyers and clients, focusing on clarity, confidentiality, and a smooth consultation experience.',
      deviceType: 'iphone',
      category: 'app',
      imageUrl: '/images/project-29.png'
    }
  ]
};
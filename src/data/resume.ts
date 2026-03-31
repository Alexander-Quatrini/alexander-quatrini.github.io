// ============================================================
// Resume Data — edit this file to update all site content
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string; // e.g. 'Jan 2024' or 'Present'
  description: string;
  bullets: string[];
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Hobby {
  label: string;
  icon: string;
  description: string;
  transferableSkills: string[];
}

export interface ContactLink {
  label: string;
  url: string;
  icon: 'email' | 'github' | 'linkedin' | 'website';
  external: boolean;
}

// ----------------------------------------------------------
// Site config
// ----------------------------------------------------------
export const siteConfig = {
  name: 'Alexander Quatrini',
  title: 'Software Engineer',
  tagline: 'A young developer with a passion for complex problems and new technologies.',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Built with AI', href: '#built-with-ai' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],
};

// ----------------------------------------------------------
// Hero
// ----------------------------------------------------------
export const heroData = {
  name: siteConfig.name,
  title: siteConfig.title,
  tagline: siteConfig.tagline,
  //ctaPrimary: { label: 'View My Work', href: '#projects' },
  ctaSecondary: { label: 'Get In Touch', href: '#contact' },
};

// ----------------------------------------------------------
// About Me
// ----------------------------------------------------------
export const aboutData = {
  education: [
    {
      institution: 'Northern Illinois University',
      degree: 'Bachelor of Science in Computer Science',
      startYear: '2016',
      endYear: '2020',
    },
  ],
  lookingFor:
    'I am seeking a software engineering role where I can contribute to meaningful projects with complex problems. ' +
    'I am commited to continuous growth in technical expertise and skills such as communication and leadership. ' +
    'Eager to join a team with a strong mentorship culture where I can learn from experienced engineers while contributing my own perspective to collaborative problem-solving.',
  personality:
    'I am naturally curious and driven to understand how systems work. I am commited to searching for opportunites to improve.' +
    'I value empathy in and out of the workplace. I enjoy creating software that will help people, and enjoy growing positive relations with other team members.',
};

// ----------------------------------------------------------
// Work Experience
// ----------------------------------------------------------
export const workExperience: WorkExperience[] = [
  {
    company: 'RedMane Technology',
    role: 'Software Developer',
    startDate: 'June 2021',
    endDate: 'April 2022',
    description: 'Worked with Cúram, a social program management platform, to create case-management systems that implement extensive eligibility rules for programs like Medicaid.',
    bullets: [
      'Exposed and worked hands on with the full software development life cycle, including design, implementation, testing, and maintenance',
      'Responsible for writing and updating documentation on existing systems',
      'Communicated with clients, translating desires into technical designs',
    ],
    skills: ['C#', '.NET', 'Java', 'Cúram'],
  },
  {
    company: 'Symbeo',
    role: 'Software Developer',
    startDate: 'November 2022',
    endDate: 'May 2023',
    description: 'Junior developer working to improve BillOCR, an optical character recognition software that turned hand written forms into text data.',
    bullets: [
      'Worked individually and closely with each member of the team to understand the entire workflow of BillOCR',
      'Responsible for bug fixes on existing systems and updating documentation',
      'Responsible for design, documentation, and development of new systems',
    ],
    skills: ['Amazon Textract', 'C#', '.NET', 'Azure DevOps', 'Git'],
  },
];

// ----------------------------------------------------------
// Skills
// ----------------------------------------------------------
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'C#', 'C++', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'jQuery', '.NET / ASP.NET'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Node.js', 'Claude Code', 'Azure DevOps'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Attention to detail',
      'Self-motivated learner',
      'Empathy & collaboration'
    ],
  },
];

// ----------------------------------------------------------
// Projects
// ----------------------------------------------------------
export const projects: Project[] = [
  {
    name: 'Online Resume',
    description:
      'This page! Built with AI',
    tech: ['Astro', 'Tailwind CSS', 'TypeScript',  'Claude (Anthropic)'],
    demoUrl: 'https://alexander-quatrini.github.io/',
    sourceUrl: 'https://github.com/Alexander-Quatrini/alexander-quatrini.github.io',
  },
];

export interface AIPoint {
  heading: string;
  body: string;
}

export interface BuiltWithAI {
  intro: string;
  points: AIPoint[];
  techUsed: string[];
}

// ----------------------------------------------------------
// Built with AI
// ----------------------------------------------------------
export const builtWithAI: BuiltWithAI = {
  intro:
    'This website was built entirely with the help of Claude, an AI assistant made by Anthropic. ' +
    'Having been out of the workforce for a few years, I used this project as a deliberate on-ramp. ' +
    'This page is a hands-on way to get back up to speed with modern tooling while building something real and useful.',
  points: [
    {
      heading: 'Learning Astro from scratch',
      body:
        'I had no prior experience with Astro before this project. ' +
        'I used AI to accelerate my learning curve. I asked questions about syntax and architecture, and iterated on the design in real time.',
    },
    {
      heading: 'Practicing a professional workflow',
      body:
        'The project followed a structured process: planning the architecture before writing code and reviewing changes incrementally. ' +
        'Working with an AI pair programmer reinforced good habits rather than replacing them.',
    },
    {
      heading: 'AI as a tool, not a shortcut',
      body:
        'Every decision on this site — the layout, the sections, the color scheme, the content — was made by me. ' +
        'The AI helped me execute those decisions faster and learn as I went. ' +
        'I see AI as a tool. Not something to be afraid of, but embrace.',
    },
    {
      heading: 'Reviewing and improving AI-generated code',
      body:
        'I do not blindly trust what the AI does. During a walkthrough of the codebase, a structural problem was identified: ' +
        'SVG icon markup was duplicated across multiple components with inconsistent abstraction. Some icons had paths hard coded inline.' +
        'The fix was to extract a reusable Icon component, giving every icon a single source of truth. ' +
        'While this was a minor problem on a small project, it is important to reinforce skepticism of generated code, lest a major problem arises.',
    },
  ],
  techUsed: ['Astro', 'Tailwind CSS', 'TypeScript', 'Claude (Anthropic)'],
};

// ----------------------------------------------------------
// Hobbies & Interests
// ----------------------------------------------------------
export const hobbies: Hobby[] = [
  {
    label: 'Dungeons & Dragons',
    icon: '🐉',
    description:
      'I both play and run games as a Dungeon Master. DMing means building worlds, crafting stories, ' +
      'managing a table of players with different goals, and improvising when nothing goes to plan.',
    transferableSkills: [
      'Leadership & facilitation',
      'Storytelling & communication',
      'Improvisation under pressure',
      'Conflict resolution',
      'Long-term planning',
    ],
  },
  {
    label: 'Card Games',
    icon: '🃏',
    description:
      'I play card games such as Magic: The Gathering at a casual level. ' +
      'These games reward deep strategic thinking, careful resource management, and reading your opponent. As well as allowing me to meet with and interact with a large variety of people.',
    transferableSkills: [
      'Strategic thinking',
      'Resource management',
      'Pattern recognition',
      'Adaptability',
      'Analytical decision-making',
    ],
  },
  {
    label: 'Reading',
    icon: '📚',
    description:
      'I consume books in both physical and audiobook formats across a wide range of genres and subjects. ' +
      'Reading keeps me curious, builds my vocabulary, and exposes me to perspectives outside my own experience.',
    transferableSkills: [
      'Continuous self-improvement',
      'Focus & concentration',
      'Critical thinking',
      'Empathy & perspective-taking',
      'Written communication',
    ],
  },
  {
    label: 'Music',
    icon: '🎵',
    description:
      'I listen broadly across most popular genres. Music is how I decompress, ' +
      'find focus during deep work, and stay attuned to patterns and emotion in ways that carry over into creative problem-solving.',
    transferableSkills: [
      'Emotional intelligence',
      'Creative thinking',
      'Deep focus & flow state',
    ],
  },
];

// ----------------------------------------------------------
// Contact
// ----------------------------------------------------------
export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    url: 'mailto:alexanderquatrini@gmail.com',
    icon: 'email',
    external: false,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Alexander-Quatrini',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/alexander-quatrini',
    icon: 'linkedin',
    external: true,
  },
];

export const contactBlurb =
  "I'm currently open to new opportunities. Whether you have a role in mind or just want to connect, feel free to reach out.";

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
  name: 'Your Name',
  title: 'Software Engineer',
  tagline: 'Building thoughtful, reliable software with a focus on clean code and great user experiences.',
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
  ctaPrimary: { label: 'View My Work', href: '#projects' },
  ctaSecondary: { label: 'Get In Touch', href: '#contact' },
};

// ----------------------------------------------------------
// About Me
// ----------------------------------------------------------
export const aboutData = {
  education: [
    {
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      startYear: '20XX',
      endYear: '20XX',
    },
  ],
  lookingFor:
    'I am seeking a software engineering role where I can contribute to meaningful projects, ' +
    'continue growing my technical skills, and collaborate with a supportive team. ' +
    'I thrive in environments that value thoughtful problem-solving and clear communication.',
  personality:
    'I am detail-oriented and methodical, with a genuine curiosity about how things work under the hood. ' +
    'I value empathy in the workplace — both in writing software that real people use and in working well with teammates.',
};

// ----------------------------------------------------------
// Work Experience
// ----------------------------------------------------------
export const workExperience: WorkExperience[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    startDate: 'Jan 20XX',
    endDate: 'Jan 20XX',
    description: 'Brief overview of your role and the product or team you worked on.',
    bullets: [
      'Describe a key achievement or responsibility here',
      'Another impactful contribution or project you worked on',
      'A third bullet highlighting a skill or outcome',
    ],
    skills: ['C#', '.NET', 'TypeScript', 'SQL'],
  },
  {
    company: 'Another Company',
    role: 'Junior Developer',
    startDate: 'Jun 20XX',
    endDate: 'Dec 20XX',
    description: 'Brief overview of your role and the product or team you worked on.',
    bullets: [
      'Key responsibility or project at this role',
      'Something you built or improved',
      'A metric or outcome that shows impact',
    ],
    skills: ['JavaScript', 'React', 'CSS', 'Git'],
  },
];

// ----------------------------------------------------------
// Skills
// ----------------------------------------------------------
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Angular', 'Astro', '.NET / ASP.NET'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Node.js'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Attention to detail',
      'Clear written communication',
      'Self-motivated learner',
      'Empathy & collaboration',
      'Problem decomposition',
    ],
  },
];

// ----------------------------------------------------------
// Projects
// ----------------------------------------------------------
export const projects: Project[] = [
  {
    name: 'Project One',
    description:
      'A short description of what this project does and why you built it. Mention the problem it solves.',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yourusername/project-one',
  },
  {
    name: 'Project Two',
    description:
      'Another project description. Focus on what makes it interesting or technically challenging.',
    tech: ['C#', '.NET', 'SQL Server'],
    sourceUrl: 'https://github.com/yourusername/project-two',
  },
  {
    name: 'Project Three',
    description:
      'A third project. Could be a CLI tool, a library, a game, or anything you built for fun or learning.',
    tech: ['JavaScript', 'Node.js'],
    sourceUrl: 'https://github.com/yourusername/project-three',
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
    'This resume site was built entirely with the help of Claude, an AI assistant made by Anthropic. ' +
    'Having been out of the workforce for a few years, I used this project as a deliberate on-ramp — ' +
    'a hands-on way to get back up to speed with modern tooling while building something real and useful.',
  points: [
    {
      heading: 'Learning Astro from scratch',
      body:
        'I had no prior experience with Astro before this project. Rather than spending weeks working through documentation alone, ' +
        'I used AI to accelerate the learning curve — asking questions, understanding architectural decisions, and iterating on the design in real time.',
    },
    {
      heading: 'Practicing a professional workflow',
      body:
        'The project followed a structured process: planning the architecture before writing code, reviewing changes incrementally, ' +
        'and using version control throughout. Working with an AI pair programmer reinforced good habits rather than replacing them.',
    },
    {
      heading: 'AI as a tool, not a shortcut',
      body:
        'Every decision on this site — the layout, the sections, the color scheme, the content — was made by me. ' +
        'The AI helped me execute those decisions faster and learn as I went. ' +
        'I see AI tooling the same way I see any other tool: something a good engineer learns to use well.',
    },
    {
      heading: 'Reviewing and improving AI-generated code',
      body:
        'The AI-generated code was not blindly trusted. During a walkthrough of the codebase, a structural problem was identified: ' +
        'SVG icon markup was duplicated across multiple components with an inconsistent abstraction — some icons used a shared data object, ' +
        'others had paths hardcoded inline. The fix was to extract a reusable Icon component, giving every icon a single source of truth. ' +
        'This is the kind of iteration that separates using AI effectively from using it carelessly.',
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
      'I play Magic: The Gathering and Sorcery: Contested Realm at a competitive and casual level. ' +
      'Both games reward deep strategic thinking, careful resource management, and reading your opponent.',
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
      'I listen broadly across most popular genres — the exceptions are few. Music is how I decompress, ' +
      'find focus during deep work, and stay attuned to patterns and emotion in ways that carry over into creative problem-solving.',
    transferableSkills: [
      'Emotional intelligence',
      'Creative thinking',
      'Deep focus & flow state',
      'Appreciation for patterns & structure',
    ],
  },
];

// ----------------------------------------------------------
// Contact
// ----------------------------------------------------------
export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    url: 'mailto:you@example.com',
    icon: 'email',
    external: false,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
    external: true,
  },
];

export const contactBlurb =
  "I'm currently open to new opportunities. Whether you have a role in mind or just want to connect, feel free to reach out.";

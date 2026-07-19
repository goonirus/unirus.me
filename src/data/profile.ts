export const profile = {
  name: 'Donglin Yan',
  role: 'Game Researcher / Designer / Developer',
  location: 'Gothenburg, Sweden',
  email: 'donglinyan2000@outlook.com',
  trainerId: '2000',
  trainerClass: 'Game Researcher',
  trainerType: 'Strategy / System / History',
  region: 'Gothenburg',
  specialAbility: 'System Deconstruction',
  favoriteFields: ['Historical Games', 'Board Games', 'Moral & Aesthetic Distance'],
  statement:
    'I design playful systems where history, strategy, and mechanics become interactive experiences.',
  subtitle:
    'My work moves between historical strategy games, systemic design, board game mechanics, numerical balancing, and research-driven game analysis.',
  tags: [
    'Historical Strategy',
    'System Design',
    'Board Games',
    'Game Research',
    'Numerical Balancing',
    'Unity',
    'Unreal',
    'C#',
    'Moral Distance',
  ],
};

export const stats = [
  { label: 'Research', value: 95 },
  { label: 'System Design', value: 94 },
  { label: 'Development', value: 88 },
  { label: 'Numerical Balancing', value: 92 },
  { label: 'Board Game Analysis', value: 96 },
  { label: 'Historical Play', value: 93 },
];

export const education = [
  {
    period: '2025–2027',
    institution: 'University of Gothenburg',
    degree: 'M.Sc. in Game Design & Technology, Sweden',
    highlights: [
      'Intro to Game Research: Grade 5/5',
      'Gameplay Design: 94/100',
      'Game Engine Architecture: 51/50',
    ],
  },
  {
    period: '2019–2023',
    institution: 'Jiangnan University',
    degree: 'B.Eng. in Internet of Things Engineering, China',
    highlights: [
      'Focused on software engineering and low-level system optimization.',
    ],
  },
];

export const experience = [
  {
    period: '2024–Present',
    company: 'GStoneGames',
    role: 'Board Game Reviewer & Contributing Author',
    description:
      'Authored 150+ analytical reviews focusing on mechanics deconstruction and systemic balance.',
  },
  {
    period: '12/2025–03/2026',
    company: 'Realdini Studios',
    role: 'Game Developer Intern, Gothenburg',
    description:
      'Developed a multiplayer shooter in UE5, including weapon mechanics, multiplayer systems, and AI.',
  },
  {
    period: '2023–2025',
    company: 'HiSilicon Huawei',
    role: 'Software Engineer, Shanghai',
    description:
      'Developed RRC modules for Hi2118/Hi2131 chips, achieved 98% code coverage, resolved crashes and PCT failures.',
  },
  {
    period: '07/2022–11/2022',
    company: 'Lanchuang Technology',
    role: 'Intern Back-end Developer, China',
    description:
      'Developed data processing systems using Java and MyBatis.',
  },
];

export const awards = [
  {
    id: 'badge-1',
    title: 'Global Game Jam Gothenburg 2026',
    subtitle: 'Best Design & Best Innovation',
    description:
      'Awarded for innovative puzzle mechanics and cohesive systemic design in a jam environment.',
    color: 'from-primary to-secondary',
  },
  {
    id: 'badge-2',
    title: 'Xmas Game Jam Gothenburg 2025',
    subtitle: 'Best Design',
    description:
      'Recognized for strong mechanical clarity and player-facing design in a compressed dev cycle.',
    color: 'from-cyan to-secondary',
  },
  {
    id: 'badge-3',
    title: 'The 13th Blue Bridge Cup Software',
    subtitle: 'Provincial 2nd Prize',
    description:
      'Competitive programming achievement demonstrating algorithmic rigor and problem decomposition.',
    color: 'from-badge to-primary',
  },
];

export type SkillType = 'Research' | 'Design' | 'Development' | 'Tool';

export const skillGroups: { type: SkillType; skills: string[] }[] = [
  {
    type: 'Research',
    skills: [
      'Historical Strategy Games',
      'Gameplay Evaluative Frameworks',
      'Moral and Aesthetic Distance',
      'Systemic Design',
    ],
  },
  {
    type: 'Design',
    skills: [
      'Mathematical Modeling & Balancing',
      'Core Gameplay Mechanics',
      'Strategy System Design',
      'Board Game Deconstruction',
    ],
  },
  {
    type: 'Development',
    skills: [
      'Custom C# Engine Architecture & Implementation',
      'Unity C#',
      'Unreal C++ / Blueprint',
      'Python',
      'MATLAB',
      'Java / MyBatis',
    ],
  },
  {
    type: 'Tool',
    skills: ['Git', 'LaTeX', 'Advanced Excel', 'Blender Modeling & Texturing'],
  },
];

export const researchProjects = [
  {
    id: 'theory-i',
    label: 'Theory Project I',
    title: 'Aesthetic Distance & Moral Perception',
    description:
      'Analyzed how strategy games abstract suffering into data, while survival games create moral proximity.',
  },
  {
    id: 'modeling-ii',
    label: 'Modeling Project II',
    title: 'Survival-Driven Ethical Decay',
    description:
      'Formalized "Morality as Fuel" patterns through MDA and Machinations in titles like Frostpunk.',
  },
  {
    id: 'framework-iii',
    label: 'Framework Project III',
    title: 'Historical Strategy Analysis',
    description:
      'Constructing a five-dimensional framework covering History, Strategy, UX, Cognition, and Ethics to bridge narrative and mechanics.',
  },
];

export const biomes = [
  {
    region: 'Academic Pursuits',
    items: ['Geohistory', 'General History', 'Occultism & Divination', 'Astronomy'],
  },
  {
    region: 'Digital Games',
    items: ['Novel Mechanics', 'Level Design', 'Narrative Immersion'],
  },
  {
    region: 'Tabletop Games',
    items: [
      'Mid to Heavy Eurogames',
      'Cooperative Ameritrash',
      'Gaia Project BGA Top 500',
      'Age of Innovation BGA Top 1000',
    ],
  },
];

export const navItems = [
  { label: 'Trainer', href: '#trainer' },
  { label: 'ProjectDex', href: '#projectdex' },
  { label: 'Move Set', href: '#moveset' },
  { label: 'Research', href: '#research' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

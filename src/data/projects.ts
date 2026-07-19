export type Rarity = 'Rare' | 'Epic' | 'Mythic';

export interface Project {
  dexNumber: string;
  id: string;
  title: string;
  type: string;
  role: string;
  description: string;
  abilities: string[];
  tags: string[];
  rarity: Rarity;
  cover?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    dexNumber: '#001',
    id: 'roguelike-eat-well',
    title: 'Roguelike Eat Well',
    type: 'Strategic Management Game',
    role: 'Numerical & System Designer',
    description:
      'A strategic management game focused on high-pressure survival dynamics.',
    abilities: [
      'Economic Equilibrium',
      'Food Value System',
      'SAN-value Penalty Logic',
      '20+ Functional Items',
    ],
    tags: ['Unity', 'C#', 'Balancing', 'Survival', 'Strategy'],
    rarity: 'Epic',
    cover: '/picture/portfolio/eatwell/cover.png',
  },
  {
    dexNumber: '#002',
    id: 'who-are-you',
    title: 'Who Are You',
    type: 'Cosmic Horror Experience',
    role: 'Narrative & Technical Developer',
    description:
      'A cosmic horror typing experience where reality and interface stability gradually diminish as the player uncovers their identity.',
    abilities: [
      'Interface Instability',
      '3D Scene Composition',
      'Environmental Lighting',
      'Interaction Feedback',
    ],
    tags: ['Unity', 'Narrative', 'Horror', 'Interaction'],
    rarity: 'Rare',
    cover: '/picture/portfolio/whoareyou/whoareyou.png',
    url: '/portfolio/projects/whoareyou/whoareyou.html',
  },
  {
    dexNumber: '#003',
    id: 'peng-win',
    title: 'Peng-win',
    type: '2.5D Logic Puzzle',
    role: 'Lead System Designer',
    description:
      'A grid-based puzzle where Santa kicks penguins that slide across ice and water until hitting obstacles or the sleigh.',
    abilities: [
      'Slippery Physics',
      'Grid Puzzle Logic',
      'Modular Interaction Scripts',
      'Spatial Challenge Design',
    ],
    tags: ['Puzzle', 'Unity', 'System Design', 'Level Design'],
    rarity: 'Rare',
    cover: '/picture/portfolio/pengwin/pengwin_menu.png',
    url: '/portfolio/projects/pengwin/pengwin.html',
  },
  {
    dexNumber: '#004',
    id: 'action-1000',
    title: '1000, Action!',
    type: 'Non-linear Puzzle',
    role: 'Mechanics & Lead Developer',
    description:
      'An experimental puzzle game where reality functions like a video editor, using masks to hide environment pieces or the UI itself as a gameplay tool.',
    abilities: [
      'Hiding vs Destroying',
      'UI-as-Gameplay',
      'Mask-based Puzzle Logic',
      'Environmental Interaction',
    ],
    tags: ['Experimental', 'Puzzle', 'UI', 'Mechanics'],
    rarity: 'Mythic',
    cover: '/picture/portfolio/action1000/covery.png',
    url: '/portfolio/projects/action1000/action1000.html',
  },
  {
    dexNumber: '#005',
    id: 'hundred-years-war',
    title: "Hundred Years' War",
    type: 'Dice-driven Wargame',
    role: 'Solo Designer & Developer',
    description:
      'A tabletop wargame featuring dice-based combat, resource management, and territorial control.',
    abilities: [
      'Dice Combat',
      'Territorial Control',
      'Resource Management',
      'Hand-drawn Maps',
    ],
    tags: ['Tabletop', 'Wargame', 'History', 'Strategy'],
    rarity: 'Epic',
    cover: '/picture/portfolio/hyw/hyw.png',
  },
  {
    dexNumber: '#006',
    id: 'joust',
    title: 'Joust',
    type: 'Tactical Duel Game',
    role: 'Solo Designer & Developer',
    description:
      'A tactical card and board hybrid centered on momentum, spacing, and rhythmic combat resolution.',
    abilities: [
      'Momentum',
      'Spacing',
      'Simultaneous Action Selection',
      'Medieval Duel Psychology',
    ],
    tags: ['Tabletop', 'Tactical', 'Card Game', 'Balance'],
    rarity: 'Rare',
    cover: '/picture/portfolio/joust/joust.png',
    url: '/portfolio/projects/joust/joust.html',
  },
];

export const starterProjects = [
  {
    id: 'hundred-years-war',
    starterLabel: 'Starter 1',
    typeLabel: 'Historical Strategy Type',
    projectId: 'hundred-years-war',
  },
  {
    id: 'action-1000',
    starterLabel: 'Starter 2',
    typeLabel: 'System Puzzle Type',
    projectId: 'action-1000',
  },
  {
    id: 'who-are-you',
    starterLabel: 'Starter 3',
    typeLabel: 'Horror Narrative Type',
    projectId: 'who-are-you',
  },
];

export const rarityStyles: Record<Rarity, string> = {
  Rare: 'border-cyan/50 text-cyan shadow-glow-cyan',
  Epic: 'border-secondary/50 text-secondary shadow-glow-purple',
  Mythic: 'border-badge/50 text-badge shadow-[0_0_20px_rgba(255,209,102,0.35)]',
};

export const rarityBg: Record<Rarity, string> = {
  Rare: 'from-cyan/20 to-cyan/5',
  Epic: 'from-secondary/20 to-secondary/5',
  Mythic: 'from-badge/20 to-primary/10',
};

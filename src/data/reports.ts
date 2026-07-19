export interface FieldReport {
  id: string;
  number: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

export const fieldReports: FieldReport[] = [
  {
    id: 'report-001',
    number: 'Report #001',
    title: 'Aesthetic Distance in Grand Strategy Games',
    category: 'Game Research',
    date: '2025-11-12',
    readTime: '8 min',
    excerpt:
      'How abstraction layers in grand strategy titles reshape player empathy, moral weight, and historical interpretation.',
    tags: ['Grand Strategy', 'Aesthetics', 'Ethics'],
  },
  {
    id: 'report-002',
    number: 'Report #002',
    title: 'Morality as Fuel in Survival Games',
    category: 'System Analysis',
    date: '2025-12-03',
    readTime: '10 min',
    excerpt:
      'Examining how survival mechanics convert ethical dilemmas into resource loops — and what that means for player agency.',
    tags: ['Survival', 'MDA', 'Morality'],
  },
  {
    id: 'report-003',
    number: 'Report #003',
    title: 'Designing Historical Strategy Frameworks',
    category: 'Framework Design',
    date: '2026-01-18',
    readTime: '12 min',
    excerpt:
      'A five-dimensional lens for evaluating how history, strategy, UX, cognition, and ethics intersect in design.',
    tags: ['History', 'Framework', 'Strategy'],
  },
  {
    id: 'report-004',
    number: 'Report #004',
    title: 'Why Board Game Balance Feels Different from Video Game Balance',
    category: 'Comparative Design',
    date: '2026-02-05',
    readTime: '9 min',
    excerpt:
      'Tactile feedback, social dynamics, and information asymmetry create fundamentally different balance problems on the table.',
    tags: ['Board Games', 'Balance', 'Systems'],
  },
];

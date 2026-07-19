import { motion } from 'framer-motion';
import { skillGroups, type SkillType } from '../data/profile';

const typeStyles: Record<SkillType, { border: string; bg: string; accent: string }> = {
  Research: {
    border: 'border-cyan/40',
    bg: 'from-cyan/10 to-cyan/5',
    accent: 'text-cyan',
  },
  Design: {
    border: 'border-primary/40',
    bg: 'from-primary/10 to-primary/5',
    accent: 'text-primary',
  },
  Development: {
    border: 'border-secondary/40',
    bg: 'from-secondary/10 to-secondary/5',
    accent: 'text-secondary',
  },
  Tool: {
    border: 'border-badge/40',
    bg: 'from-badge/10 to-badge/5',
    accent: 'text-badge',
  },
};

export default function MoveSet() {
  return (
    <section id="moveset" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-primary">ABILITY DATABASE</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">MOVE SET</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Skills grouped by type — research insight, design craft, development tools, and production utilities.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const style = typeStyles[group.type];
            return (
              <motion.div
                key={group.type}
                className={`gamedex-card bg-gradient-to-br ${style.bg} ${style.border}`}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className={`pixel-label ${style.accent}`}>{group.type.toUpperCase()} TYPE</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`rounded-lg border ${style.border} bg-bg/40 px-3 py-1.5 text-xs font-medium text-text transition-shadow hover:shadow-glow`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { awards } from '../data/profile';

export default function BadgeWall() {
  return (
    <section id="badges" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-badge">ACHIEVEMENT SYSTEM</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">BADGES UNLOCKED</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Jam wins, design honors, and competitive milestones — each earned through play and craft.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((badge, i) => (
            <motion.div
              key={badge.id}
              className="gamedex-card group cursor-default text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${badge.color} shadow-lg`}
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
                  <polygon
                    points="24,4 28,18 44,18 31,27 36,42 24,33 12,42 17,27 4,18 20,18"
                    fill="#FFD166"
                    stroke="#F7F3FF"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>

              <h3 className="font-heading text-sm font-bold leading-snug text-text">
                {badge.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-primary">{badge.subtitle}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted opacity-0 transition-opacity group-hover:opacity-100">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

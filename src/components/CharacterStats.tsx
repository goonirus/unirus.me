import { motion } from 'framer-motion';
import { stats, education, experience } from '../data/profile';

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-text">{label}</span>
        <span className="font-heading font-bold text-primary">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function CharacterStats() {
  return (
    <section id="stats" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-cyan">MODULE UNLOCKED</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">CHARACTER STATS</h2>
        <p className="mt-2 max-w-2xl text-muted">
          CV data transformed into trainer attributes — research depth, design craft, and dev execution.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="gamedex-card space-y-4">
            <p className="pixel-label text-primary">BASE ATTRIBUTES</p>
            {stats.map((stat) => (
              <StatBar key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>

          <div className="space-y-6">
            <div className="gamedex-card">
              <p className="pixel-label mb-4 text-secondary">EDUCATION LOG</p>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.institution} className="border-l-2 border-secondary/50 pl-4">
                    <p className="pixel-label text-muted">{edu.period}</p>
                    <h3 className="font-heading font-semibold text-text">{edu.institution}</h3>
                    <p className="text-sm text-muted">{edu.degree}</p>
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h) => (
                        <li key={h} className="text-sm text-text/80 before:mr-2 before:text-primary before:content-['▸']">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="gamedex-card">
              <p className="pixel-label mb-4 text-cyan">EXPERIENCE LOG</p>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.company + exp.period} className="border-l-2 border-cyan/50 pl-4">
                    <p className="pixel-label text-muted">{exp.period}</p>
                    <h3 className="font-heading font-semibold text-text">
                      {exp.company}
                      <span className="ml-2 text-sm font-normal text-primary">— {exp.role}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, rarityStyles, rarityBg } from '../data/projects';

function ProjectCover({ title, cover, rarity }: { title: string; cover?: string; rarity: string }) {
  const [failed, setFailed] = useState(false);

  if (cover && !failed) {
    return (
      <img
        src={cover}
        alt={`${title} cover`}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${rarityBg[rarity as keyof typeof rarityBg]}`}
    >
      <span className="font-heading text-2xl font-bold text-white/20">{title.charAt(0)}</span>
    </div>
  );
}

export default function ProjectDex() {
  return (
    <section id="projectdex" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-cyan">ENCYCLOPEDIA</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          PROJECTDEX // SELECTED ENTRIES
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Six curated project entries — each with type, role, abilities, and rarity classification.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="gamedex-card group flex flex-col overflow-hidden p-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/10">
                <ProjectCover title={project.title} cover={project.cover} rarity={project.rarity} />
                <span className="pixel-label absolute left-3 top-3 rounded bg-bg/80 px-2 py-1 text-cyan">
                  {project.dexNumber}
                </span>
                <span
                  className={`absolute right-3 top-3 rounded-full border px-2 py-0.5 text-[0.6rem] font-bold ${rarityStyles[project.rarity]}`}
                >
                  {project.rarity}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-primary">{project.type}</p>
                <p className="mt-0.5 text-xs text-muted">Role: {project.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-3">
                  <p className="pixel-label mb-1.5 text-secondary">SPECIAL ABILITIES</p>
                  <div className="flex flex-wrap gap-1">
                    {project.abilities.map((a) => (
                      <span
                        key={a}
                        className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[0.65rem] text-text/80"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan/30 bg-cyan/5 px-2 py-0.5 text-[0.65rem] text-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    className="console-btn mt-4 w-full text-center text-xs"
                  >
                    Open Entry
                  </a>
                ) : (
                  <span className="mt-4 block w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-center text-xs text-muted">
                    Entry Archived — Details Soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

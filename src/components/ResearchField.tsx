import { motion } from 'framer-motion';
import { researchProjects } from '../data/profile';

export default function ResearchField() {
  return (
    <section id="research" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-secondary">FIELD NOTES</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">RESEARCH FIELD</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Academic research framed as field expedition logs — theory, modeling, and framework design.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {researchProjects.map((item, i) => (
            <motion.article
              key={item.id}
              className="gamedex-card relative overflow-hidden border-dashed border-secondary/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute right-3 top-3 h-8 w-8 rounded border border-white/10 bg-white/5" />
              <p className="pixel-label text-secondary">{item.label}</p>
              <h3 className="mt-2 font-heading text-base font-bold leading-snug text-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              <div className="mt-4 border-t border-white/5 pt-3">
                <p className="pixel-label text-muted">STATUS: ARCHIVED</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { fieldReports } from '../data/reports';

export default function FieldReports() {
  return (
    <section id="journal" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-cyan">EXPEDITION LOG</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">FIELD REPORTS</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Research journal entries on aesthetics, morality, balance, and historical strategy design.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {fieldReports.map((report, i) => (
            <motion.article
              key={report.id}
              className="gamedex-card flex flex-col"
              initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: 'rgba(0, 240, 255, 0.3)' }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="pixel-label text-cyan">{report.number}</span>
                <span className="text-xs text-muted">{report.date}</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-text">{report.title}</h3>
              <div className="mt-2 flex gap-3 text-xs text-muted">
                <span>{report.category}</span>
                <span>·</span>
                <span>{report.readTime} read</span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{report.excerpt}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {report.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 px-2 py-0.5 text-[0.65rem] text-text/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="console-btn-secondary mt-4 w-full text-xs">
                Read Report
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { biomes } from '../data/profile';

const biomeColors = [
  { border: 'border-secondary/40', dot: 'bg-secondary', label: 'text-secondary' },
  { border: 'border-primary/40', dot: 'bg-primary', label: 'text-primary' },
  { border: 'border-cyan/40', dot: 'bg-cyan', label: 'text-cyan' },
];

export default function FavoriteBiomes() {
  return (
    <section id="biomes" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-badge">WORLD MAP</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">FAVORITE BIOMES</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Personal interest regions — academic pursuits, digital games, and tabletop territories.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {biomes.map((biome, i) => {
            const color = biomeColors[i % biomeColors.length];
            return (
              <motion.div
                key={biome.region}
                className={`gamedex-card ${color.border}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${color.dot}`} />
                  <h3 className={`font-heading text-sm font-bold ${color.label}`}>
                    {biome.region}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {biome.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted before:text-xs before:content-['◆']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

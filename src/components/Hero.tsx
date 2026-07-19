import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import TrainerCard from './TrainerCard';

const tagStyles = [
  'border-primary/50 bg-primary/10 text-primary hover:shadow-glow',
  'border-secondary/50 bg-secondary/10 text-secondary hover:shadow-glow-purple',
  'border-cyan/50 bg-cyan/10 text-cyan hover:shadow-glow-cyan',
  'border-badge/50 bg-badge/10 text-badge',
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="trainer"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="section-shell grid w-full gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="pixel-label mb-4 text-primary">DONGDEX // TRAINER PROFILE</p>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-heading text-lg text-primary sm:text-xl">{profile.role}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text sm:text-lg">
            {profile.statement}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('#projectdex')} className="console-btn">
              View ProjectDex
            </button>
            <button onClick={() => scrollTo('#starter')} className="console-btn-secondary">
              Choose Starter Project
            </button>
            <button
              onClick={() => scrollTo('#journal')}
              className="inline-flex items-center rounded-lg border border-cyan/40 bg-cyan/10 px-5 py-2.5 text-sm font-medium text-text transition-all hover:border-cyan hover:shadow-glow-cyan"
            >
              Read Field Reports
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.tags.map((tag, i) => (
              <motion.span
                key={tag}
                whileHover={{ y: -2, scale: 1.03 }}
                className={`type-tag ${tagStyles[i % tagStyles.length]}`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <TrainerCard />
        </motion.div>
      </div>
    </section>
  );
}

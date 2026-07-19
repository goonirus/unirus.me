import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const tagColors = [
  'border-primary/40 bg-primary/10 text-primary',
  'border-secondary/40 bg-secondary/10 text-secondary',
  'border-cyan/40 bg-cyan/10 text-cyan',
  'border-badge/40 bg-badge/10 text-badge',
];

export default function TrainerCard() {
  return (
    <motion.div
      className="gamedex-card relative overflow-hidden border-primary/30 shadow-glow"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />

      <div className="relative">
        <p className="pixel-label mb-3">TRAINER CARD // VERIFIED</p>

        <div className="mb-4 flex items-start gap-4">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-primary/50 bg-gradient-to-br from-secondary/30 to-primary/20">
            <div className="flex h-full w-full items-center justify-center">
              <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden="true">
                <circle cx="40" cy="28" r="16" fill="#7C5CFF" opacity="0.6" />
                <ellipse cx="40" cy="62" rx="22" ry="14" fill="#FF3EA5" opacity="0.5" />
                <circle cx="34" cy="26" r="3" fill="#F7F3FF" />
                <circle cx="46" cy="26" r="3" fill="#F7F3FF" />
                <path d="M32 32 Q40 38 48 32" stroke="#F7F3FF" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-bg/60 py-0.5 text-center">
              <span className="pixel-label text-[0.45rem] text-cyan">AVATAR</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-text">{profile.name}</h3>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>

        <dl className="space-y-2 text-sm">
          {[
            ['Trainer ID', profile.trainerId],
            ['Class', profile.trainerClass],
            ['Type', profile.trainerType],
            ['Region', profile.region],
            ['Special Ability', profile.specialAbility],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 border-b border-white/5 pb-1.5">
              <dt className="pixel-label text-muted">{label}</dt>
              <dd className="text-right font-medium text-text">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4">
          <p className="pixel-label mb-2">FAVORITE FIELDS</p>
          <div className="flex flex-wrap gap-1.5">
            {profile.favoriteFields.map((field, i) => (
              <span
                key={field}
                className={`rounded-full border px-2 py-0.5 text-[0.65rem] ${tagColors[i % tagColors.length]}`}
              >
                {field}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

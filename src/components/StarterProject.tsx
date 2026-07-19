import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { starterProjects, projects } from '../data/projects';

type Phase = 'idle' | 'loading' | 'loaded';

export default function StarterProject() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');

  const selectedProject = projects.find((p) => p.id === selectedId);

  const handleSelect = (projectId: string) => {
    setSelectedId(projectId);
    setPhase('loading');
    setTimeout(() => setPhase('loaded'), 900);
  };

  return (
    <section id="starter" className="border-t border-white/5">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-badge">INTERACTIVE MODULE</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          CHOOSE YOUR STARTER PROJECT
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Pick a starter cartridge — the GameDex terminal will load your selection.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="relative gamedex-card console-grid min-h-[320px] overflow-hidden border-cyan/30">
            <div className="scanline-overlay" />
            <div className="relative z-10 flex h-full flex-col p-6 font-mono text-sm">
              <p className="pixel-label mb-4 text-cyan">GAMEDEX TERMINAL v1.0</p>

              <AnimatePresence mode="wait">
                {phase === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-1 flex-col justify-center text-muted"
                  >
                    <p className="text-cyan">&gt; AWAITING STARTER SELECTION...</p>
                    <p className="mt-2">&gt; Choose a project cartridge below.</p>
                    <motion.span
                      className="mt-4 inline-block h-4 w-2 bg-cyan"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                )}

                {phase === 'loading' && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-1 flex-col justify-center"
                  >
                    <p className="pixel-label text-primary">LOADING...</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-cyan"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.85 }}
                      />
                    </div>
                  </motion.div>
                )}

                {phase === 'loaded' && selectedProject && (
                  <motion.div
                    key="loaded"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-1 flex-col justify-center space-y-2"
                  >
                    <p className="pixel-label text-primary">PROJECT LOADED</p>
                    <p className="font-heading text-xl font-bold text-text">
                      {selectedProject.title}
                    </p>
                    <p>
                      <span className="text-muted">TYPE:</span>{' '}
                      <span className="text-cyan">{selectedProject.type}</span>
                    </p>
                    <p>
                      <span className="text-muted">ROLE:</span>{' '}
                      <span className="text-primary">{selectedProject.role}</span>
                    </p>
                    <p>
                      <span className="text-muted">SPECIAL ABILITY:</span>{' '}
                      <span className="text-secondary">{selectedProject.abilities[0]}</span>
                    </p>
                    <p className="mt-2 text-muted">{selectedProject.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="grid gap-4">
            {starterProjects.map((starter) => {
              const project = projects.find((p) => p.id === starter.projectId);
              if (!project) return null;
              const isActive = selectedId === starter.projectId;

              return (
                <motion.button
                  key={starter.id}
                  onClick={() => handleSelect(starter.projectId)}
                  className={`gamedex-card flex items-center gap-4 text-left transition-all ${
                    isActive
                      ? 'border-primary shadow-glow'
                      : 'hover:border-white/20 hover:shadow-glow-purple'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-secondary/20 to-primary/10">
                    <span className="font-heading text-lg font-bold text-primary/60">
                      {project.dexNumber.replace('#', '')}
                    </span>
                  </div>
                  <div>
                    <p className="pixel-label text-muted">{starter.starterLabel}</p>
                    <p className="text-xs text-cyan">{starter.typeLabel}</p>
                    <p className="font-heading font-semibold text-text">{project.title}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

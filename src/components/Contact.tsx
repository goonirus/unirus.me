import { profile } from '../data/profile';

export default function Contact() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="border-t border-white/5 pb-24">
      <div className="section-shell">
        <p className="pixel-label mb-2 text-primary">CO-OP REQUEST</p>
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">START A CO-OP QUEST</h2>

        <div className="mt-10 gamedex-card max-w-2xl border-primary/30 shadow-glow">
          <p className="text-muted">
            Want to collaborate on game design, historical systems, board games, or research-driven
            interactive experiences?
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="pixel-label text-cyan">EMAIL</span>
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-text underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="pixel-label text-muted">REGION</span>
            <span className="text-sm text-text">{profile.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="console-btn">
              Send Message
            </a>
            <button
              className="console-btn-secondary"
              onClick={() => window.open('/cv-donglin-yan.pdf', '_blank')}
            >
              Download CV
            </button>
            <button onClick={() => scrollTo('#projectdex')} className="inline-flex items-center rounded-lg border border-cyan/40 bg-cyan/10 px-5 py-2.5 text-sm font-medium text-text transition-all hover:border-cyan hover:shadow-glow-cyan">
              View Projects
            </button>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="pixel-label text-muted">
            DONGDEX OS 1.0 // {profile.name.toUpperCase()} // ALL SYSTEMS NOMINAL
          </p>
          <p className="mt-2 text-xs text-muted/60">
            © {new Date().getFullYear()} Donglin Yan. GameDex-inspired portfolio — original design, no copyrighted assets.
          </p>
        </footer>
      </div>
    </section>
  );
}

import useReveal from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref  = useReveal()
  const ref2 = useReveal()

  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-img-col reveal-left" ref={ref}>
          <div className="about-img-frame">
            <div className="frame-corner tl" />
            <div className="frame-corner tr" />
            <div className="frame-corner bl" />
            <div className="frame-corner br" />
            <div className="about-img-placeholder">
              <img
                className="about-img"
                src="/videos/about section 2.png"
                alt="About section"
              />
              <div className="img-overlay-text">ABHISHEK</div>
              <div className="lens-circle" />
              <div className="lens-circle lc2" />
              <svg className="aperture" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="rgba(168,125,232,0.2)" strokeWidth="1"/>
                <circle cx="100" cy="100" r="55" stroke="rgba(168,125,232,0.15)" strokeWidth="1"/>
                <circle cx="100" cy="100" r="30" stroke="rgba(168,125,232,0.3)" strokeWidth="1.5" strokeDasharray="6 4"/>
                <path d="M100 20 L100 40 M100 160 L100 180 M20 100 L40 100 M160 100 L180 100" stroke="rgba(168,125,232,0.25)" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="100" cy="100" r="10" fill="rgba(168,125,232,0.2)" stroke="var(--accent-light)" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="exp-badge">
              <span className="exp-num">5+</span>
              <span className="exp-label">Years<br/>Experience</span>
            </div>
          </div>
        </div>

        <div className="about-text-col reveal" ref={ref2}>
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">
            I Turn Raw Footage<br />
            Into <em>Cinematic Stories</em>
          </h2>
          <p className="about-bio">
            I'm Abhishek Sharma — a visual story architect based in India, available worldwide.
            With over 5 years of professional experience, I specialise in crafting high-impact
            video content that connects brands to their audiences on a visceral level.
          </p>
          <p className="about-bio">
            From scroll-stopping short-form reels to full-length cinematic brand films, I blend
            sharp editing, intentional color grading, and immersive sound design to create
            experiences that don't just inform — they resonate.
          </p>

          <div className="about-pillars">
            {[
              { icon: '🎬', label: 'Narrative-Driven' },
              { icon: '🎨', label: 'Color Grading' },
              { icon: '⚡', label: 'Fast Turnaround' },
              { icon: '🌐', label: 'Remote-Ready' },
            ].map(p => (
              <div key={p.label} className="pillar">
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Work With Me
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <a
              className="about-link"
              href="https://wa.me/918368751086"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Me →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

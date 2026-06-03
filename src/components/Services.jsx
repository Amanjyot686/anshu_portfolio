import useReveal from '../hooks/useReveal'
import './Services.css'

const services = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <rect x="4" y="10" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 15l10 5-10 5V15z" fill="currentColor" opacity="0.6"/>
        <rect x="1" y="14" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="1" y="23" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="36" y="14" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4"/>
        <rect x="36" y="23" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: 'Reels & Short-Form Content',
    desc: 'Scroll-stopping Instagram Reels, YouTube Shorts and TikToks engineered for maximum retention and virality.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
        <path d="M20 8v24M8 20h24" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
    title: 'Cinematic Brand Films',
    desc: 'Long-form storytelling that elevates your brand identity — documentaries, brand narratives, and corporate films.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <rect x="6" y="8" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 32h14M20 26v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17l5-4 5 3 4-4 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    title: 'Commercial Advertisements',
    desc: 'High-impact product and brand ads crafted to drive conversions — polished, professional, and on-brand.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <path d="M8 28 Q12 8 20 20 Q28 32 32 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="8" cy="28" r="2.5" fill="currentColor" opacity="0.5"/>
        <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
        <circle cx="32" cy="12" r="2.5" fill="currentColor" opacity="0.5"/>
        <path d="M6 34h28" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    title: 'Storytelling & Visual Branding',
    desc: 'Cohesive visual language across all touchpoints — making your brand unforgettable through motion and story.',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <rect x="6" y="14" width="6" height="18" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="14" y="8" width="6" height="24" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="22" y="18" width="6" height="14" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="30" y="11" width="6" height="21" rx="1" fill="currentColor"/>
        <path d="M4 34h32" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    title: 'Color Grading & Sound Design',
    desc: 'Cinematic grade with DaVinci Resolve + immersive audio mixing that transforms footage into a full sensory experience.',
  },
  {
    num: '06',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="svc-icon-svg">
        <polygon points="20,4 26,14 38,14 28,22 32,34 20,27 8,34 12,22 2,14 14,14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.4"/>
        <path d="M20 4v16M38 14H20M32 34L20 20M8 34L20 20M2 14H20M12 22l8-2" stroke="currentColor" strokeWidth="0.5" opacity="0.25"/>
      </svg>
    ),
    title: 'Motion Graphics & VFX',
    desc: 'Dynamic lower thirds, kinetic typography, particle FX, and 3D elements that make your content stand out.',
  },
]

export default function Services() {
  const headRef = useReveal()

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-head reveal" ref={headRef}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Crafting Every Frame<br />
            <em>With Purpose</em>
          </h2>
          <p className="services-sub">
            End-to-end video production and post-production — from concept to final delivery.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.num} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ num, icon, title, desc, delay }) {
  const ref = useReveal(0.1)
  return (
    <div
      className="svc-card reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="svc-num">{num}</div>
      <div className="svc-icon">{icon}</div>
      <h3 className="svc-title">{title}</h3>
      <p className="svc-desc">{desc}</p>
      <div className="svc-line" />
    </div>
  )
}

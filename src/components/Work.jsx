import useReveal from '../hooks/useReveal'
import './Work.css'

const projects = [
  {
    // 🎬 VIDEO 1 — information videos
    id: 1,
    title: 'information videos demo - client work',
    category: 'information videos',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design'],
    year: '2026',
    link: null,
    accent: '#9a7de0',
    videoUrl: '/videos/information videos demo.mp4',
    thumbnail: null,
  },
  {
    // 🎬 VIDEO 2 — clipping reels 
    id: 2,
    title: 'clipping reels — Client Work',
    category: 'clipping reels / Client Work',
    tags: ['Premiere Pro', 'after effects', 'Color Grading'],
    year: '2026',
    link: null,
    accent: '#5c4a9e',
    videoUrl: '/videos/clipping reel.mp4',
    thumbnail: null,
  },
  {
    // 🎬 VIDEO 3 — motion graphics ad
    id: 3,
    title: 'motion graphics ads — Client Work',
    category: 'Social Media / Reels',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    year: '2026',
    link: null,
    accent: '#8a6dd0',
    videoUrl: '/videos/motion graphics ads.mp4',
    thumbnail: null,
  },
  {
    // 🎬 VIDEO 4 — Product Commercial Ad
    id: 4,
    title: 'Product Commercial Ad - Client Work',
    category: 'Commercial / Advertisement',
    tags: ['Premiere Pro', 'After Effects', 'sound design'],
    year: '2026',
    link: null,
    accent: '#6b53b0',
    videoUrl: '/videos/Product Commercial Ad.mp4',
    thumbnail: null,
  },
  {
    // 🎬 VIDEO 5 — motion graphics
    id: 5,
    title: 'motion graphics — personal project',
    category: 'Motion Graphics / Animation',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    year: '2026',
    link: null,
    accent: '#7c5cbf',
    videoUrl: '/videos/motion graphic.mp4',
    thumbnail: null,
  },
  {
    // 🎬 VIDEO 6 — Documentary: Visual Story
    id: 6,
    title: 'short documentary - client work',
    category: 'Documentary / Narrative',
    tags: ['notion', 'Premiere Pro', 'Storytelling'],
    year: '2026',
    link: null,
    accent: '#7455c2',
    videoUrl: '/videos/short documentary — client work.mp4',
    thumbnail: null,
  },
]

export default function Work() {
  const headRef = useReveal()

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work-head reveal" ref={headRef}>
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Frames That <em>Tell Stories</em>
          </h2>
          <p className="work-sub">
            A curated selection of projects across various formats and industries.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} {...p} delay={i * 70} />
          ))}
        </div>

        <div className="work-cta-row reveal" ref={useReveal()}>
          <p className="work-cta-text">Have a project in mind?</p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Create Together
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, category, tags, year, link, accent, delay, videoUrl, thumbnail }) {
  const ref = useReveal(0.1)

  const handleClick = () => {
    if (link) window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className={`project-card reveal ${link ? 'has-link' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <div className="project-thumb" style={{ '--card-accent': accent }}>
        <video
          src={videoUrl}
          poster={thumbnail}
          controls
          preload="metadata"
          onClick={e => e.stopPropagation()}
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }}
        />
        <div className="thumb-noise" />
        <div className="thumb-grid" />
        <div className="thumb-center">
          <div className="thumb-play">
            {link ? (
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <path d="M16 13l14 7-14 7V13z" fill="white" opacity="0.9"/>
              </svg>
            ) : (
              <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                <rect x="8" y="12" width="24" height="16" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                <path d="M16 16l10 5-10 5V16z" fill="white" opacity="0.6"/>
              </svg>
            )}
          </div>
        </div>
        <div className="thumb-tag">{year}</div>
        {link && (
          <div className="thumb-ext">
            <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
              <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View
          </div>
        )}
      </div>

      <div className="project-info">
        <div className="project-cat">{category}</div>
        <h3 className="project-title">{title}</h3>
        <div className="project-tags">
          {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'Video Editor',
  'Visual Story Architect',
  'Cinematic Director',
  'Color Grading Artist',
  'Motion Graphics Artist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIndex]
    let i = typing ? 0 : target.length
    const interval = setInterval(() => {
      if (typing) {
        i++
        setDisplayed(target.slice(0, i))
        if (i >= target.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        i--
        setDisplayed(target.slice(0, i))
        if (i <= 0) {
          clearInterval(interval)
          setRoleIndex(p => (p + 1) % roles.length)
          setTyping(true)
        }
      }
    }, typing ? 65 : 35)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  return (
    <section id="hero" className="hero">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      {/* Film grain lines */}
      <div className="scan-lines" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for projects
        </div>

        <h1 className="hero-name">
          <span className="name-first">Abhishek</span>
          <span className="name-last">Sharma</span>
        </h1>

        <div className="hero-role">
          <span className="role-prefix">— </span>
          <span className="role-text">{displayed}</span>
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-tagline">
          Crafting cinematic experiences that leave an impression.
          <br />
          From raw footage to compelling stories — every frame with purpose.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* Floating reel icon */}
      <div className="hero-visual">
        <div className="reel-wrapper">
          <div className="reel-circle outer" />
          <div className="reel-circle mid" />
          <div className="reel-circle inner" />
          <div className="reel-core">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="play-icon">
              <circle cx="30" cy="30" r="28" stroke="rgba(168,125,232,0.3)" strokeWidth="1.5"/>
              <path d="M24 20l16 10-16 10V20z" fill="var(--accent-light)" />
            </svg>
          </div>
          <div className="reel-hole h1" /><div className="reel-hole h2" />
          <div className="reel-hole h3" /><div className="reel-hole h4" />
          <div className="reel-hole h5" /><div className="reel-hole h6" />
        </div>
        <div className="reel-glow" />
      </div>
    </section>
  )
}

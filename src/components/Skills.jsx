import useReveal from '../hooks/useReveal'
import './Skills.css'

const tools = [
  { name: 'Premiere Pro', level: 90, cat: 'Editing' },
  { name: 'After Effects', level: 96, cat: 'Motion' },
  { name: 'DaVinci Resolve', level: 70, cat: 'Grading' },
  { name: 'Photoshop', level: 85, cat: 'Design' },
  { name: 'Lightroom', level: 88, cat: 'Photo' },
  { name: 'Blender', level: 60, cat: '3D / VFX' },
  { name: 'CapCut Pro', level: 92, cat: 'Short-form' },
  { name: 'Canva', level: 90, cat: 'Design' },
]

const softSkills = [
  'Visual Storytelling',
  'Color Theory',
  'Sound Design',
  'Motion Graphics',
  'Client Communication',
  'Creative Direction',
  'Deadline Management',
  'Remote Collaboration',
]

export default function Skills() {
  const headRef = useReveal()

  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="skills-head reveal" ref={headRef}>
          <span className="section-label">My Arsenal</span>
          <h2 className="section-title">
            Tools & <em>Expertise</em>
          </h2>
        </div>

        <div className="skills-layout">
          <div className="skills-bars-col">
            <h3 className="skills-sub-head">Software Proficiency</h3>
            <div className="skills-bars">
              {tools.map((t, i) => (
                <SkillBar key={t.name} {...t} delay={i * 60} />
              ))}
            </div>
          </div>

          <div className="skills-right-col">
            <div className="soft-skills-block">
              <h3 className="skills-sub-head">Core Competencies</h3>
              <div className="soft-tags">
                {softSkills.map(s => (
                  <span key={s} className="soft-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="workflow-block">
              <h3 className="skills-sub-head">Workflow</h3>
              <div className="workflow-steps">
                {['Brief & Discovery', 'Pre-Production', 'Editing & Assembly', 'Color Grade', 'Sound Mix', 'Final Delivery'].map((step, i) => (
                  <div key={step} className="w-step">
                    <div className="w-step-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="w-step-label">{step}</div>
                    {i < 5 && <div className="w-step-line" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillBar({ name, level, cat, delay }) {
  const ref = useReveal(0.1)

  return (
    <div className="skill-row reveal" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <div className="skill-right">
          <span className="skill-cat">{cat}</span>
          <span className="skill-pct">{level}%</span>
        </div>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ '--target-w': `${level}%` }}
        />
      </div>
    </div>
  )
}

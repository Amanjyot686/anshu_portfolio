import useReveal from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const headRef = useReveal()
  const cardsRef = useReveal()

  const contacts = [
    {
      label: 'WhatsApp',
      value: '+91 836 875 1086',
      href: 'https://wa.me/918368751086',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="contact-svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.852L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.819 9.819 0 01-5.002-1.368l-.36-.214-3.735.975.998-3.645-.234-.374A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'as0315569@gmail.com',
      href: 'mailto:as0315569@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 7l10 7 10-7"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: '@abhishx.k',
      href: 'https://instagram.com/abhishx.k',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-svg">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="contact">
      {/* Ambient glow */}
      <div className="contact-glow" />

      <div className="container">
        <div className="contact-inner">
          <div className="contact-head reveal" ref={headRef}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's Build Something<br />
              <em>Unforgettable</em>
            </h2>
            <p className="contact-desc">
              Ready to bring your vision to life? I'm open to freelance projects,
              long-term collaborations, and remote work globally. Reach out — let's talk.
            </p>

            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Available for new projects — Remote worldwide</span>
            </div>
          </div>

          <div className="contact-cards reveal" ref={cardsRef}>
            {contacts.map(c => (
              <a
                key={c.label}
                className="contact-card"
                href={c.href}
                target={c.href.startsWith('http') || c.href.startsWith('mailto:') ? '_blank' : undefined}
                rel={c.href.startsWith('http') || c.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div className="contact-card-body">
                  <span className="contact-card-label">{c.label}</span>
                  <span className="contact-card-value">{c.value}</span>
                </div>
                <svg className="contact-card-arrow" viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            <span className="logo-a">A</span>
            <span className="logo-s">S</span>
          </div>
          <p className="footer-copy">
            © 2025 Abhishek Sharma. Crafted with precision.
          </p>
          <div className="footer-links">
            <a href="https://instagram.com/abhishx.k" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:as0315569@gmail.com">Email</a>
            <a href="https://wa.me/918368751086" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>
    </section>
  )
}

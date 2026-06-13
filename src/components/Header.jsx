import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const LogoSVG = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="17" stroke="url(#lg)" strokeWidth="2.5" fill="none"/>
    <path d="M18 6 L22 14 L18 12 L14 14 Z" fill="url(#lg)"/>
    <path d="M12 16 Q18 28 24 16" stroke="url(#lg)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="18" cy="20" r="2.5" fill="url(#lg)"/>
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="36" y2="36">
        <stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/>
      </linearGradient>
    </defs>
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <LogoSVG />
          <div className="logo-text">
            <span className="logo-title">Olympiad</span>
            <span className="logo-subtitle">School Portal</span>
          </div>
        </Link>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { label: 'Home', href: '/#hero' },
            { label: 'Programs', href: '/#programs' },
            { label: 'Why Us', href: '/#why-us' },
            { label: 'Results', href: '/#awards' },
            { label: 'FAQs', href: '/#faqs' },
          ].map(item => (
            <a key={item.label} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/register" className="btn-register-header">Register School</Link>
          <Link to="/login" className="btn-login-header">Login</Link>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  )
}

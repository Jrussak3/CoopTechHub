import { useState } from 'react';
import iconFacebook from '../../assets/social/facebook.svg';
import iconYoutube from '../../assets/social/youtube.svg';
import iconLinkedin from '../../assets/social/linkedin.svg';
import iconInstagram from '../../assets/social/instagram.svg';

const menuItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'O hubie', href: '/o-hubie' },
  { label: 'Aktualności', href: '/blog' },
  { label: 'Nasze projekty', href: '/nasze-projekty' },
  { label: 'Spółdzielnie energetyczne', href: '/spoldzielnie-energetyczne' },
  { label: 'Technologie', href: '/cyfryzacja' },
  { label: 'Publikacje', href: '/publikacje' },
  { label: 'Rozwój lokalny', href: '/rozwoj-lokalny' },
  { label: 'Zespół', href: '/zespol' },
];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="menu-overlay"
          aria-label="Zamknij menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Menu nawigacyjne">
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <button type="button" className="menu-close" aria-label="Zamknij menu" onClick={() => setMenuOpen(false)}>
              ×
            </button>
          </div>

          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="social-links" aria-label="Social media">
            <a href="https://www.facebook.com/cooptechhub/" aria-label="Facebook" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={iconFacebook} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@cooptechhub" aria-label="YouTube" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={iconYoutube} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/cooptechhub/" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={iconLinkedin} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/cooptechhub/" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={iconInstagram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

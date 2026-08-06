import type { PublicationItem } from '../data/publications';
import { publicationTagLabels } from '../data/publications';
import cthLogo from '../../assets/brand/cth-logo.svg';
import iconFacebook from '../../assets/social/facebook.svg';
import iconYoutube from '../../assets/social/youtube.svg';
import iconLinkedin from '../../assets/social/linkedin.svg';
import iconInstagram from '../../assets/social/instagram.svg';
import './article-detail-page.css';
import MobileMenu from './MobileMenu';

const footerColumns = [
  [
    { label: 'Strona główna', href: '/' },
    { label: 'Aktualności', href: '/blog' },
    { label: 'Nasze projekty', href: '/nasze-projekty' },
    { label: 'Energia', href: '/spoldzielnie-energetyczne' },
  ],
  [
    { label: 'Technologie', href: '/cyfryzacja' },
    { label: 'Rozwój lokalny', href: '/rozwoj-lokalny' },
    { label: 'Publikacje', href: '/publikacje' },
    { label: 'Kontakt', href: '/#kontakt' },
  ],
];

const footerSocials = [
  { label: 'Facebook', src: iconFacebook, href: 'https://www.facebook.com/cooptechhub/' },
  { label: 'YouTube', src: iconYoutube, href: 'https://www.youtube.com/@cooptechhub' },
  { label: 'LinkedIn', src: iconLinkedin, href: 'https://www.linkedin.com/company/cooptechhub/' },
  { label: 'Instagram', src: iconInstagram, href: 'https://www.instagram.com/cooptechhub/' },
];

export default function PublicationDetailPage({ publication }: { publication: PublicationItem }) {
  return (
    <div className="article-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="article-hero">
          <div className="article-hero-wrapper">
            <a className="article-back-link" href="/publikacje">
              ← Wróć do listy
            </a>
            <p className="article-category-badge">{publicationTagLabels[publication.tag]}</p>
            <h1>
              <span className="article-hero-title">{publication.title}</span>
            </h1>
          </div>
        </section>

        <article className="article-body">
          <div className="article-body-wrapper">
            <p className="article-lead">
              {publication.authors.join(', ')} · {publication.date}
            </p>

            {publication.thumbnailUrl && (
              <div className="article-image">
                <img src={publication.thumbnailUrl} alt={publication.title} loading="lazy" />
              </div>
            )}

            <p>{publication.description}</p>

            <a
              className="primary-button"
              href={publication.attachment.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {publication.attachment.label}
            </a>
          </div>
        </article>
      </main>

      <footer className="site-footer" id="kontakt">
        <div className="footer-top">
          <p className="footer-brand">CoopTech Hub</p>
          <p className="footer-subtitle">Centrum Technologii Spółdzielczych</p>
        </div>

        <div className="footer-bottom">
          {footerColumns.map((column, index) => (
            <nav key={`footer-column-${index}`} className="footer-column">
              {column.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          ))}

          <div className="footer-column footer-address">
            <p>PLZ Spółdzielnia</p>
            <p>kontakt@plz.coop</p>
          </div>

          <div className="footer-column footer-address">
            <p>ul. Grażyny 13</p>
            <p>02-548 Warszawa</p>
          </div>

          <div className="footer-socials">
            {footerSocials.map((social) => (
              <a href={social.href} key={social.label} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                <img src={social.src} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

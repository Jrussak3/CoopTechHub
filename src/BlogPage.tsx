import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import { blogPosts, featuredPost } from './data/posts';
import './blog-page.css';
import MobileMenu from './components/MobileMenu';

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
    { label: 'Zespół', href: '/zespol' },
    { label: 'Kontakt', href: '/#kontakt' },
  ],
];

const footerSocials = [
  { label: 'Facebook', src: iconFacebook, href: 'https://www.facebook.com/cooptechhub/' },
  { label: 'YouTube', src: iconYoutube, href: 'https://www.youtube.com/@cooptechhub' },
  { label: 'LinkedIn', src: iconLinkedin, href: 'https://www.linkedin.com/company/cooptechhub/' },
  { label: 'Instagram', src: iconInstagram, href: 'https://www.instagram.com/cooptechhub/' },
];

export default function BlogPage() {
  return (
    <div className="blog-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="blog-page-hero">
          <div className="blog-page-wrapper">
            <p className="blog-page-hero-eyebrow">Wyróżniony wpis</p>
            <h1>{featuredPost.title}</h1>
            <p>{featuredPost.description}</p>
            <a
              className="blog-page-card-link"
              href={featuredPost.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              czytaj wpis <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="blog-page-list-section">
          <div className="blog-page-wrapper">
            <div className="blog-page-grid">
              {blogPosts.map((post) => (
                <article className="blog-page-card" key={post.id}>
                  <p className="blog-page-card-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <a
                    className="blog-page-card-link"
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    czytaj wpis <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
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

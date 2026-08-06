import { useEffect, useLayoutEffect, useState } from 'react';
import EnergyPage from './EnergyPage';
import LocalDevelopmentPage from './LocalDevelopmentPage';
import DigitalizationPage from './DigitalizationPage';
import PublicationsPage from './PublicationsPage';
import TeamPage from './TeamPage';
import BlogPage from './BlogPage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import SupportContactSection from './components/SupportContactSection';
import ArticleDetailPage from './components/ArticleDetailPage';
import PublicationDetailPage from './components/PublicationDetailPage';
import { getArticle } from './data/articles';
import cyfryzacjaIcon from '../assets/cyfryzacja.svg';
import rozwójLokalnyIcon from '../assets/rozwoj-lokalny.svg';
import energiaSpołecznaIcon from '../assets/spoldzielnie-energetyczne.svg';
import arrowRightBottom from '../assets/arrow_right_bottom.svg';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import iconYoutube from '../assets/social/youtube.svg';
import googlePlayBadge from '../assets/store/google-play-badge.svg';
import appStoreBadge from '../assets/store/app-store-badge.svg';
import contactHomeImage from '../assets/contact/contact-home.jpg';
import plzAppMockup from '../assets/plz-app-mockup.png';
import plzQrCode from '../assets/qr/plz-qr.png';
import heroIllustration from '../assets/hero-illustration.png';
import { getFeaturedPublications, getHighlightedPublications, publications, publicationTagLabels } from './data/publications';
import { blogPosts } from './data/posts';

const imgFrame = iconFacebook;
const imgG59 = iconYoutube;
const imgFrame1 = iconLinkedin;
const imgInstagram = iconInstagram;

const ENERGY_PAGE_PATH = '/spoldzielnie-energetyczne';
const LOCAL_DEVELOPMENT_PAGE_PATH = '/rozwoj-lokalny';
const DIGITALIZATION_PAGE_PATH = '/cyfryzacja';
const PUBLICATIONS_PAGE_PATH = '/publikacje';
const TEAM_PAGE_PATH = '/zespol';
const BLOG_PAGE_PATH = '/blog';
const PROJECTS_PAGE_PATH = '/nasze-projekty';
const ABOUT_PAGE_PATH = '/o-hubie';

const menuItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'O hubie', href: ABOUT_PAGE_PATH },
  { label: 'Aktualności', href: BLOG_PAGE_PATH },
  { label: 'Nasze projekty', href: PROJECTS_PAGE_PATH },
  { label: 'Spółdzielnie energetyczne', href: ENERGY_PAGE_PATH },
  { label: 'Technologie', href: DIGITALIZATION_PAGE_PATH },
  { label: 'Publikacje', href: PUBLICATIONS_PAGE_PATH },
  { label: 'Rozwój lokalny', href: LOCAL_DEVELOPMENT_PAGE_PATH },
  { label: 'Zespół', href: TEAM_PAGE_PATH },
];

const offers = [
  {
    title: 'Cyfryzacja',
    bullets: ['Wdrożenie Platformy PLZ', 'Asystenci i chatboty AI', 'Transformacja cyfrowa organizacji', 'Szkolenia z kompetencji cyfrowych'],
    accent: '#F3F0FC',
    text: '#4B2935',
    icon: cyfryzacjaIcon,
    href: DIGITALIZATION_PAGE_PATH,
  },
  {
    title: 'Spółdzielnie energetyczne',
    bullets: ['Koncepcje i analizy OZE', 'Dofinansowania inwestycji', 'Zarządzanie projektem', 'Szkolenia i edukacja'],
    accent: '#FCEBF1',
    text: '#4B2935',
    icon: energiaSpołecznaIcon,
    href: ENERGY_PAGE_PATH,
  },
  {
    title: 'Rozwój lokalny',
    bullets: ['Transformacja miast', 'Rozwój farm miejskich i kooperatyw spożywczych', 'Inkubacja spółdzielni rozwojowych', 'Warsztaty i szkolenia'],
    accent: '#FAFCF0',
    text: '#4B2935',
    icon: rozwójLokalnyIcon,
    href: LOCAL_DEVELOPMENT_PAGE_PATH,
  },
];

const visibleOffers = offers.slice(0, 6);
const visiblePosts = blogPosts.slice(0, 6);

const logoModules = import.meta.glob('../assets/logo/*.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

const logoItems = Object.keys(logoModules).length
  ? Object.entries(logoModules)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([path, src]) => ({
        id: path.split('/').pop() ?? 'logo',
        src,
        alt: path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'Logo',
      }))
  : Array.from({ length: 12 }, (_, index) => ({
      id: `placeholder-${index + 1}`,
      src: '',
      alt: `Logo ${index + 1}`,
    }));

const logoRows = [
  logoItems.filter((_, index) => index % 2 === 0),
  logoItems.filter((_, index) => index % 2 === 1),
];

const imgVector1 = 'https://www.figma.com/api/mcp/asset/8780fb60-1fa5-4e31-aa21-97cdb018e594';
const imgGooglePlayBadge = googlePlayBadge;
const imgAppStoreIcon = appStoreBadge;
const imgPlzImage = plzAppMockup;
const imgHeroIllustration = heroIllustration;

const imgFooterFacebook = iconFacebook;
const imgFooterYoutube = iconYoutube;
const imgFooterLinkedin = iconLinkedin;
const imgFooterInstagram = iconInstagram;

const footerColumns = [
  [
    { label: 'Strona główna', href: '/' },
    { label: 'Aktualności', href: BLOG_PAGE_PATH },
    { label: 'Nasze projekty', href: PROJECTS_PAGE_PATH },
    { label: 'Energia', href: ENERGY_PAGE_PATH },
  ],
  [
    { label: 'Technologie', href: DIGITALIZATION_PAGE_PATH },
    { label: 'Rozwój lokalny', href: LOCAL_DEVELOPMENT_PAGE_PATH },
    { label: 'Zespół', href: TEAM_PAGE_PATH },
    { label: 'Kontakt', href: '#kontakt' },
  ],
];

const featuredPublications = getFeaturedPublications();

const highlightedPublications = getHighlightedPublications();

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePublication, setActivePublication] = useState(0);

  const isEnergyPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === ENERGY_PAGE_PATH;

  const isLocalDevelopmentPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === LOCAL_DEVELOPMENT_PAGE_PATH;

  const isDigitalizationPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === DIGITALIZATION_PAGE_PATH;

  const isPublicationsPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === PUBLICATIONS_PAGE_PATH;

  const isTeamPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === TEAM_PAGE_PATH;

  const isBlogPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === BLOG_PAGE_PATH;

  const isProjectsPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === PROJECTS_PAGE_PATH;

  const isAboutPage =
    typeof window !== 'undefined' &&
    window.location.pathname.replace(/\/+$/, '') === ABOUT_PAGE_PATH;

  const normalizedPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : '';

  const projectArticle = normalizedPath.startsWith(`${PROJECTS_PAGE_PATH}/`)
    ? getArticle('projekt', normalizedPath.slice(PROJECTS_PAGE_PATH.length + 1))
    : undefined;

  const blogArticle = normalizedPath.startsWith(`${BLOG_PAGE_PATH}/`)
    ? getArticle('aktualnosc', normalizedPath.slice(BLOG_PAGE_PATH.length + 1))
    : undefined;

  const publicationArticle = normalizedPath.startsWith(`${PUBLICATIONS_PAGE_PATH}/`)
    ? getArticle('publikacja', normalizedPath.slice(PUBLICATIONS_PAGE_PATH.length + 1))
    : undefined;

  const publicationItem = normalizedPath.startsWith(`${PUBLICATIONS_PAGE_PATH}/`)
    ? publications.find((publication) => publication.id === normalizedPath.slice(PUBLICATIONS_PAGE_PATH.length + 1))
    : undefined;

  const article = projectArticle ?? blogArticle ?? publicationArticle;

  useEffect(() => {
    if (!featuredPublications.length) {
      return;
    }

    const rotationTimer = window.setInterval(() => {
      setActivePublication((value) => (value === featuredPublications.length - 1 ? value : value + 1));
    }, 5000);

    return () => {
      window.clearInterval(rotationTimer);
    };
  }, []);

  useLayoutEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, '', cleanUrl);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const segments = Array.from(document.querySelectorAll<HTMLElement>('.segment-reveal'));

    if (!segments.length) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    let initialized = false;

    const setupRevealAfterScroll = () => {
      if (initialized) {
        return;
      }

      if (window.scrollY < 8) {
        return;
      }

      initialized = true;
      window.removeEventListener('scroll', setupRevealAfterScroll);

      const revealCutoff = window.innerHeight * 0.9;

      segments.forEach((segment) => {
        const rect = segment.getBoundingClientRect();

        if (rect.top <= revealCutoff) {
          segment.classList.add('is-visible');
          return;
        }

        segment.classList.add('segment-hidden');
        observer.observe(segment);
      });
    };

    window.addEventListener('scroll', setupRevealAfterScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', setupRevealAfterScroll);
      observer.disconnect();
    };
  }, []);

  if (article) {
    return <ArticleDetailPage article={article} />;
  }

  if (publicationItem) {
    return <PublicationDetailPage publication={publicationItem} />;
  }

  if (isEnergyPage) {
    return <EnergyPage />;
  }

  if (isLocalDevelopmentPage) {
    return <LocalDevelopmentPage />;
  }

  if (isDigitalizationPage) {
    return <DigitalizationPage />;
  }

  if (isPublicationsPage) {
    return <PublicationsPage />;
  }

  if (isTeamPage) {
    return <TeamPage />;
  }

  if (isBlogPage) {
    return <BlogPage />;
  }

  if (isProjectsPage) {
    return <ProjectsPage />;
  }

  if (isAboutPage) {
    return <AboutPage />;
  }

  return (
    <div className="page-shell">
      <header className="topbar">
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

        <a className="brand-logo" href="#start" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

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
              <img src={imgFrame} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@cooptechhub" aria-label="YouTube" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={imgG59} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/cooptechhub/" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={imgFrame1} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/cooptechhub/" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={imgInstagram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>

      <section className="hero-section" id="start">
        <div className="hero-visual segment-reveal segment-delay-1" aria-hidden="true">
          <img src={imgHeroIllustration} alt="" />
        </div>
        <div className="hero-copy segment-reveal segment-delay-2">
          <h1>Centrum Technologii Spółdzielczych</h1>
          <p>
            Tworzymy rozwiązania dla nowoczesnej spółdzielczości. Łączymy technologię
            z potencjałem społeczności: wdrażamy autorskie modele działania, edukujemy
            i doradzamy w obszarach energetyki społecznej, rozwoju lokalnego oraz cyfryzacji.
          </p>
          <a className="primary-button" href="#kontakt">
            Skontaktuj się
          </a>
        </div>
      </section>

      <section className="offers-section" id="oferta">
        <div className="section-header">
          <h2>
            Nasza <span>oferta</span>
          </h2>
        </div>

        <div className="offers-grid segment-reveal segment-delay-3">
          {visibleOffers.map((offer) => (
            <article key={offer.title} className="offer-card" style={{ backgroundColor: offer.accent }}>
              <img className="offer-icon" src={offer.icon} alt="" aria-hidden="true" />
              <h3 style={{ color: offer.text }}>{offer.title}</h3>
              <ul style={{ color: offer.text }}>
                {offer.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a
                className="offer-cta"
                href={offer.href}
                onClick={(event) => {
                  if (offer.href === '#') {
                    event.preventDefault();
                  }
                }}
              >
                Zobacz więcej
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="news-section" id="aktualnosci">
        <div className="section-header section-header--inline">
          <h2>Aktualności</h2>
          <a className="publications-link" href={BLOG_PAGE_PATH}>
            wszystkie aktualności
          </a>
        </div>

        <div className="news-grid segment-reveal segment-delay-4">
          {visiblePosts.map((post) => (
            <a
              key={post.id}
              className="news-card"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{post.title}</h3>
              <p className="news-description">{post.description}</p>
              <img className="news-arrow" src={arrowRightBottom} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="logos-section" aria-label="Partnerzy i marki">
        {logoRows.map((row, rowIndex) => (
          <div key={`logo-row-${rowIndex}`} className="logos-row">
            <div className="logos-track" style={{ ['--duration' as string]: `${18 + rowIndex * 3}s` }}>
              {['a', 'b', 'c', 'd'].map((copy) => (
                <div key={copy} className="logos-group">
                  {row.map((logo) => (
                    <div key={`${logo.id}-${copy}`} className="logo-pill">
                      {logo.src ? <img src={logo.src} alt={logo.alt} /> : <span>{logo.alt}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="publications-section" id="publikacje">
        <div className="publications-header">
          <div className="section-header">
            <h2>Publikacje</h2>
          </div>
          <a className="publications-link" href={PUBLICATIONS_PAGE_PATH}>
            wszystkie publikacje
          </a>
        </div>

        <div className="publications-carousel segment-reveal segment-delay-5">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Poprzednia publikacja"
            disabled={activePublication === 0}
            onClick={() => setActivePublication((value) => Math.max(0, value - 1))}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="carousel-window">
            <div
              className="publications-track"
              style={{ transform: `translateX(-${activePublication * 100}%)` }}
            >
              {featuredPublications.map((publication) => (
                <a
                  key={publication.title}
                  className={`publication-slide is-${publication.tag}`}
                  href={`${PUBLICATIONS_PAGE_PATH}/${publication.id}`}
                >
                  <div className={`publication-visual is-${publication.tag}`}>
                    <div className="publication-image-stack">
                      {publication.thumbnailUrl ? (
                        <img src={publication.thumbnailUrl} alt={`Miniatura publikacji: ${publication.title}`} loading="lazy" />
                      ) : (
                        <img className="publication-image-fallback" src={cthLogo} alt="" aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="publication-body">
                      <p className="publication-authors">
                        {publication.authors.join(', ')} · {publication.date}
                      </p>
                      <h3>{publication.title}</h3>
                      <p className="publication-copy">{publication.description}</p>
                    </div>

                    <div className="publication-footer">
                      <img className="publication-divider" src={imgVector1} alt="" aria-hidden="true" />
                      <span className="publication-link-row">
                        <span>czytaj więcej</span>
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow"
            aria-label="Następna publikacja"
            disabled={activePublication === featuredPublications.length - 1}
            onClick={() =>
              setActivePublication((value) => Math.min(featuredPublications.length - 1, value + 1))
            }
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

        </div>

        <div className="publications-highlights segment-reveal segment-delay-6">
          {highlightedPublications.map((publication) => (
            <a
              key={publication.id}
              className="publication-highlight-card"
              href={`${PUBLICATIONS_PAGE_PATH}/${publication.id}`}
            >
              <p className="publication-highlight-category">{publicationTagLabels[publication.tag]}</p>
              <h3>{publication.title}</h3>
              <p className="publication-highlight-description">{publication.description}</p>
              <img className="publication-highlight-arrow" src={arrowRightBottom} alt="" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="plz-section" id="plz">
        <div className="plz-grid">
          <div className="plz-copy">
            <h2>Dołącz do naszej społeczności w PLZ</h2>
            <p>
              PLZ to spółdzielcza aplikacja społecznościowa. Można na niej m.in. przeprowadzać głosowania i ankiety,
              sprzedawać produkty i usługi, wymieniać różnego rodzaju informacje, tworzyć wydarzenia i zadania czy
              pobierać opłaty.
            </p>
            <div className="plz-download">
              <img className="plz-qr" src={plzQrCode} alt="Kod QR do aplikacji PLZ" />
              <div className="store-badges">
                <a className="store-badge store-badge--google" href="#kontakt" aria-label="Google Play">
                  <img src={imgGooglePlayBadge} alt="Google Play" />
                </a>
                <a className="store-badge store-badge--apple" href="#kontakt" aria-label="App Store">
                  <img src={imgAppStoreIcon} alt="App Store" />
                </a>
              </div>
            </div>
            <a className="plz-button" href="#kontakt">
              Wejdź na stronę
            </a>
          </div>

          <div className="plz-visual segment-reveal segment-delay-6" aria-hidden="true">
            <img className="plz-image" src={imgPlzImage} alt="" />
          </div>
        </div>
      </section>

      <SupportContactSection
        className="home-support-section segment-reveal segment-delay-7"
        title="Skontaktuj się z nami"
        description="Szukasz wsparcia w kwestiach cyfrowych, energetycznych, społecznych lub żadnego rozwiązania? Zostaw nam kontakt, odezwiemy się do ciebie!"
        backgroundImageSrc={contactHomeImage}
      />

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
            <a href="https://www.facebook.com/cooptechhub/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img src={imgFooterFacebook} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@cooptechhub" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src={imgFooterYoutube} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/company/cooptechhub/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={imgFooterLinkedin} alt="" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/cooptechhub/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={imgFooterInstagram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

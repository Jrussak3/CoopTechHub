import { useEffect, useLayoutEffect, useState } from 'react';
import cyfryzacjaIcon from '../assets/cyfryzacja.svg';
import rozwójLokalnyIcon from '../assets/rozwoj-lokalny.svg';
import energiaSpołecznaIcon from '../assets/spoldzielnie-energetyczne.svg';
import arrowRightBottom from '../assets/arrow_right_bottom.svg';
import cthLogo from '../assets/brand/cth-logo.svg';

const imgFrame = 'https://www.figma.com/api/mcp/asset/c087de0e-4e87-48e8-8cdf-3f17fe0d9a28';
const imgG59 = 'https://www.figma.com/api/mcp/asset/bdb09f81-55b6-4f38-b537-90a7beb1ed9b';
const imgFrame1 = 'https://www.figma.com/api/mcp/asset/c18e50a0-7f55-4bd8-b6ba-5a78ebeda9ec';
const imgInstagram = 'https://www.figma.com/api/mcp/asset/96fd0b9d-4760-47c4-b636-b4e802ac69b6';

const menuItems = [
  'Strona główna',
  'O hubie',
  'Aktualności',
  'Nasze projekty',
  'Energia',
  'Technologie',
  'Publikacje',
  'Rozwój lokalny',
  'Zespół',
  'Kontakt',
];

const offers = [
  {
    title: 'Cyfryzacja',
    bullets: ['Sztuczna inteligencja', 'Wdrożenia open source', 'Transformacja cyfrowa organizacji', 'Etyczna monetyzacja treści'],
    accent: '#F3F0FC',
    text: '#4B2935',
    icon: cyfryzacjaIcon,
  },
  {
    title: 'Spółdzielnie energetyczne',
    bullets: ['Koncepcje i analizy OZE', 'Dofinansowania inwestycji', 'Zarządzanie projektem', 'Szkolenia i edukacja'],
    accent: '#FCEBF1',
    text: '#4B2935',
    icon: energiaSpołecznaIcon,
  },
  {
    title: 'Rozwój lokalny',
    bullets: ['Spółdzielnie rozwojowe', 'Miejska odporność', 'Rolnictwo miejskie'],
    accent: '#FAFCF0',
    text: '#4B2935',
    icon: rozwójLokalnyIcon,
  },
];

const posts = [
  {
    category: 'Aktualności',
    title: 'Zakończyliśmy pierwszą edycję programu Regenerator Miast!',
    description: 'W kwietniu 2026 roku zakończyliśmy pierwszą edycję programu Regeneratora Miast.',
  },
  {
    category: 'Aktualności',
    title: 'Współpracujemy z lokalnymi społecznościami przy projektach OZE.',
    description: 'Razem z partnerami przygotowujemy szkolenia i wdrożenia dla spółdzielni energetycznych.',
  },
  {
    category: 'Aktualności',
    title: 'Nowe narzędzia cyfrowe dla organizacji społecznych.',
    description: 'Tworzymy rozwiązania wspierające transformację organizacji i ich komunikację.',
  },
  {
    category: 'Aktualności',
    title: 'Zapraszamy do udziału w warsztatach o energetyce społecznej.',
    description: 'Organizujemy spotkania dla lokalnych liderów i mieszkańców zainteresowanych transformacją energetyczną.',
  },
  {
    category: 'Aktualności',
    title: 'Tworzymy mapę potrzeb lokalnych społeczności w obszarze cyfryzacji.',
    description: 'Badamy potrzeby organizacji, aby projektować rozwiązania realnie wspierające ich rozwój.',
  },
  {
    category: 'Aktualności',
    title: 'Wkrótce ruszamy z nową edycją programów edukacyjnych.',
    description: 'Przygotowujemy kolejne szkolenia i narzędzia dla partnerów z całej Polski.',
  },
];

const visibleOffers = offers.slice(0, 6);
const visiblePosts = posts.slice(0, 6);

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
  logoItems.slice(0, Math.ceil(logoItems.length / 2)),
  logoItems.slice(Math.ceil(logoItems.length / 2)),
];

const imgImage7 = 'https://www.figma.com/api/mcp/asset/e46156a2-ed6e-48a1-8841-6df44473e0b8';
const imgImage8 = 'https://www.figma.com/api/mcp/asset/4f1e570c-91cf-4118-86f9-8281d09fffd5';
const imgImage9 = 'https://www.figma.com/api/mcp/asset/5c84c7bf-0715-4e19-9dde-eec7bc81aa3d';
const imgVector1 = 'https://www.figma.com/api/mcp/asset/8780fb60-1fa5-4e31-aa21-97cdb018e594';
const imgGooglePlayBadge = 'https://www.figma.com/api/mcp/asset/89891818-1e65-4b96-b965-2bd7a9498bc6';
const imgAppStoreIcon = 'https://www.figma.com/api/mcp/asset/2a971919-2a9b-4792-bd28-786ebe5b5551';
const imgPlzImage = 'https://www.figma.com/api/mcp/asset/5b6cf357-da95-41ac-9a31-d5a1e851d8cc';

const imgFooterFacebook = 'https://www.figma.com/api/mcp/asset/12e3edcf-2c93-49e4-bcbf-5677dfd263e2';
const imgFooterYoutube = 'https://www.figma.com/api/mcp/asset/6371123f-b2cd-4421-846b-7301c474f1de';
const imgFooterLinkedin = 'https://www.figma.com/api/mcp/asset/de705ff9-4957-43be-b521-b73d1ec65f94';
const imgFooterInstagram = 'https://www.figma.com/api/mcp/asset/08dd1858-a39c-4cf3-aca0-246541dc851d';

const footerColumns = [
  ['Strona główna', 'Aktualności', 'Nasze projekty', 'Energia'],
  ['Technologie', 'Rozwój lokalny', 'Zespół', 'Kontakt'],
];

const publications = [
  {
    authors: 'Joanna Erbel, Anna Jakubowska, Alicja Wójcik',
    title: 'Miasta dla suwerenności żywnościowej',
    description:
      'Lokalne polityki żywnościowe to dziś nie tylko element strategii rozwoju, ale konkretne narzędzie wzmacniania społecznej odporności. Raport Miasta dla suwerenności żywnościowej pokazuje, jakie działania mogą podejmować samorządy, by wspierać polskie rolnictwo, oraz które rozwiązania są już skutecznie wdrażane.',
    accent: '#F3F0FC',
    image: imgImage7,
  },
  {
    authors: 'Bartłomiej Kupiec, Rafał Krenz, Wojciech Matejko, Julia Potrzebowska, Jan Oleszczuk-Zygmuntowski',
    title: 'Miejska energetyka obywatelska',
    description:
      'Celem publikacji jest przedstawienie szeregu możliwości i modeli tworzenia społeczności energetycznych w obszarach miejskich, które mogą przyczynić się do zwiększenia udziału odnawialnych źródeł energii (OZE) w produkcji energii, jak również wzmacniać lokalne społeczności i ich zaangażowanie w transformację energetyczną.',
    accent: '#FFFDEE',
    image: imgImage8,
  },
  {
    authors: 'CoopTech Hub, Enercode, Urząd Miasta Krakowa',
    title: 'Krakowska Energetyka Obywatelska',
    description:
      'Kryzys energetyczno-klimatyczny, z jakim się obecnie mierzymy, mobilizuje mieszkanki i mieszkańców, przedsiębiorstwa, instytucje naukowe oraz jednostki samorządu terytorialnego do poszukiwania nowych rozwiązań technicznych i organizacyjnych w celu ograniczenia zużycia energii, zmniejszenia opłat za rachunki oraz ograniczenia emisji gazów cieplarnianych.',
    accent: '#F3F0FC',
    image: imgImage9,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePublication, setActivePublication] = useState(0);

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
            {menuItems.map((item, index) => (
              <a key={item} href={index === 0 ? '#start' : '#'} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>

          <div className="social-links" aria-label="Social media">
            <a href="#kontakt" aria-label="Facebook" className="social-link">
              <img src={imgFrame} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="LinkedIn" className="social-link">
              <img src={imgG59} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="X" className="social-link">
              <img src={imgFrame1} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="Instagram" className="social-link">
              <img src={imgInstagram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>

      <section className="hero-section" id="start">
        <div className="hero-copy segment-reveal segment-delay-1">
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
        <div className="hero-visual segment-reveal segment-delay-2" aria-hidden="true" />
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
              <a className="offer-cta" href="#" onClick={(event) => event.preventDefault()}>
                Zobacz więcej
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="news-section" id="aktualnosci">
        <div className="section-header">
          <h2>Aktualności</h2>
        </div>

        <div className="news-grid segment-reveal segment-delay-4">
          {visiblePosts.map((post) => (
            <article key={post.title} className="news-card">
              <p className="news-category">{post.category}</p>
              <h3>{post.title}</h3>
              <p className="news-description">{post.description}</p>
              <img className="news-arrow" src={arrowRightBottom} alt="" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="logos-section" aria-label="Partnerzy i marki">
        {logoRows.map((row, rowIndex) => (
          <div key={`logo-row-${rowIndex}`} className="logos-row">
            <div className="logos-track" style={{ ['--duration' as string]: `${18 + rowIndex * 3}s` }}>
              <div className="logos-group">
                {row.map((logo) => (
                  <div key={`${logo.id}-a`} className="logo-pill">
                    {logo.src ? <img src={logo.src} alt={logo.alt} /> : <span>{logo.alt}</span>}
                  </div>
                ))}
              </div>
              <div className="logos-group">
                {row.map((logo) => (
                  <div key={`${logo.id}-b`} className="logo-pill">
                    {logo.src ? <img src={logo.src} alt={logo.alt} /> : <span>{logo.alt}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="publications-section" id="publikacje">
        <div className="publications-header">
          <div className="section-header">
            <h2>Publikacje</h2>
          </div>
          <a className="publications-link" href="#kontakt">
            wszystkie Publikacje
          </a>
        </div>

        <div className="publications-carousel segment-reveal segment-delay-5">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Poprzednia publikacja"
            onClick={() => setActivePublication((value) => (value === 0 ? publications.length - 1 : value - 1))}
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
              {publications.map((publication) => (
                <article key={publication.title} className="publication-slide">
                  <div className="publication-visual" style={{ backgroundColor: publication.accent }}>
                    <div className="publication-image-stack">
                      <img src={publication.image} alt="" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="publication-content">
                    <div className="publication-body">
                      <p className="publication-authors">{publication.authors}</p>
                      <h3>{publication.title}</h3>
                      <p className="publication-copy">{publication.description}</p>
                    </div>

                    <div className="publication-footer">
                      <img className="publication-divider" src={imgVector1} alt="" aria-hidden="true" />
                      <div className="publication-link-row">
                        <span>czytaj więcej</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-arrow"
            aria-label="Następna publikacja"
            onClick={() => setActivePublication((value) => (value === publications.length - 1 ? 0 : value + 1))}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
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
            <a className="plz-button" href="#kontakt">
              Dowiedz się więcej
            </a>
            <div className="store-badges">
              <a className="store-badge store-badge--google" href="#kontakt" aria-label="Google Play">
                <img src={imgGooglePlayBadge} alt="Google Play" />
              </a>
              <a className="store-badge store-badge--apple" href="#kontakt" aria-label="App Store">
                <img src={imgAppStoreIcon} alt="App Store" />
              </a>
            </div>
          </div>

          <div className="plz-visual segment-reveal segment-delay-6" aria-hidden="true">
            <img className="plz-image" src={imgPlzImage} alt="" />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <p className="footer-brand">CoopTech Hub</p>
          <p className="footer-subtitle">Centrum Technologii Spółdzielczych</p>
        </div>

        <div className="footer-bottom">
          {footerColumns.map((column, index) => (
            <nav key={`footer-column-${index}`} className="footer-column">
              {column.map((item) => (
                <a key={item} href="#">
                  {item}
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
            <a href="#kontakt" aria-label="Facebook">
              <img src={imgFooterFacebook} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="YouTube">
              <img src={imgFooterYoutube} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="LinkedIn">
              <img src={imgFooterLinkedin} alt="" aria-hidden="true" />
            </a>
            <a href="#kontakt" aria-label="Instagram">
              <img src={imgFooterInstagram} alt="" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

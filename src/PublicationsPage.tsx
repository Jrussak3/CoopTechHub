import { useEffect, useMemo, useRef, useState } from 'react';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import { publicationTagLabels, publications, type PublicationItem, type PublicationTag } from './data/publications';
import './publications-page.css';
import MobileMenu from './components/MobileMenu';

type PublicationFilter = 'wszystkie' | PublicationTag;

const PAGE_SIZE = 6;

const filterItems: Array<{ key: PublicationFilter; label: string }> = [
  { key: 'wszystkie', label: 'Wszystkie' },
  { key: 'cyfryzacja', label: publicationTagLabels.cyfryzacja },
  { key: 'energetyka', label: publicationTagLabels.energetyka },
  { key: 'rozwoj-lokalny', label: publicationTagLabels['rozwoj-lokalny'] },
];

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

function PublicationCard({ publication }: { publication: PublicationItem }) {
  return (
    <article className={`publications-page-card is-${publication.tag}`}>
      <div className="publications-page-card__body">
        <p className="publications-page-card__title">📄 {publication.title}</p>
        <p className="publications-page-card__meta">
          {publication.authors.join(', ')} · {publication.date}
        </p>
        <p className="publications-page-card__description">{publication.description}</p>
        <p className="publications-page-card__tag">{publicationTagLabels[publication.tag]}</p>
      </div>
      <a className="publications-page-card__action" href={`/publikacje/${publication.id}`} aria-label={publication.attachment.label}>
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState<PublicationFilter>('wszystkie');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const filteredPublications = useMemo(() => {
    if (activeFilter === 'wszystkie') {
      return publications;
    }

    return publications.filter((publication) => publication.tag === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    const sentinel = loadMoreRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((count) => count + PAGE_SIZE);
        }
      },
      { rootMargin: '400px' },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore]);

  return (
    <div className="publications-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="publications-page-hero">
          <div className="publications-page-wrapper">
            <h1>Publikacje</h1>
            <p>Najnowsze publikacje znajdują się poniżej.</p>
          </div>
        </section>

        <section className="publications-page-list-section">
          <div className="publications-page-wrapper">
            <div className="publications-page-filters" role="tablist" aria-label="Filtry publikacji">
              {filterItems.map((item) => {
                const isActive = activeFilter === item.key;

                return (
                  <button
                    type="button"
                    key={item.key}
                    className={`publications-page-filter is-${item.key} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(item.key)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="publications-page-grid">
              {visiblePublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>

            {hasMore && <div ref={loadMoreRef} className="publications-page-load-more" aria-hidden="true" />}
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

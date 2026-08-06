import { useMemo, useState } from 'react';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import { projectTagLabels, projects, type ProjectItem, type ProjectTag } from './data/projects';
import { getArticle } from './data/articles';
import './projects-page.css';
import MobileMenu from './components/MobileMenu';

type ProjectFilter = 'wszystkie' | ProjectTag;

const filterItems: Array<{ key: ProjectFilter; label: string }> = [
  { key: 'wszystkie', label: 'Wszystkie' },
  { key: 'cyfryzacja', label: projectTagLabels.cyfryzacja },
  { key: 'energetyka', label: projectTagLabels.energetyka },
  { key: 'rozwoj-lokalny', label: projectTagLabels['rozwoj-lokalny'] },
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

function ProjectCard({ project }: { project: ProjectItem }) {
  const localArticle = getArticle('projekt', project.id);
  const href = localArticle ? `/nasze-projekty/${project.id}` : project.url;

  return (
    <article className={`projects-page-card is-${project.tag}`}>
      <div className="projects-page-card-image">
        <img src={project.image} alt="" aria-hidden="true" />
      </div>

      <div className="projects-page-card-body">
        <p className="projects-page-card-tag">{projectTagLabels[project.tag]}</p>
        <h3>{project.title}</h3>
        <p className="projects-page-card-description">{project.description}</p>
        <a
          className="projects-page-card-link"
          href={href}
          target={localArticle ? undefined : '_blank'}
          rel={localArticle ? undefined : 'noopener noreferrer'}
        >
          więcej <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('wszystkie');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'wszystkie') {
      return projects;
    }

    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  return (
    <div className="projects-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="projects-page-hero">
          <div className="projects-page-wrapper">
            <h1>Nasze projekty</h1>
            <p>Case studies naszych działań.</p>
          </div>
        </section>

        <section className="projects-page-list-section">
          <div className="projects-page-wrapper">
            <div className="projects-page-filters" role="tablist" aria-label="Filtry projektów">
              {filterItems.map((item) => {
                const isActive = activeFilter === item.key;

                return (
                  <button
                    type="button"
                    key={item.key}
                    className={`projects-page-filter is-${item.key} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(item.key)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="projects-page-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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

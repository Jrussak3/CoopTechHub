import { useState } from 'react';
import './energy-page.css';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import SupportContactSection from './components/SupportContactSection';
import contactEnergyImage from '../assets/contact/contact-energy.jpg';
import { getFirstPublicationByTag } from './data/publications';
import spoldzielczoscKlodzkaImage from '../assets/projects/spoldzielczosc-klodzka.jpg';
import lifeCometImage from '../assets/projects/life-comet.jpg';
import otwartyJazdowImage from '../assets/projects/otwarty-jazdow.jpg';
import doradztwoIcon from '../assets/icons/energy/doradztwo.svg';
import wdrozeniaIcon from '../assets/icons/energy/wdrozenia.svg';
import analizaIcon from '../assets/icons/energy/analiza.svg';
import szkoleniaIcon from '../assets/icons/energy/szkolenia.svg';
import step1Icon from '../assets/icons/energy/step1.png';
import step2Icon from '../assets/icons/energy/step2.png';
import step3Icon from '../assets/icons/energy/step3.png';
import step4Icon from '../assets/icons/energy/step4.png';
import step5Icon from '../assets/icons/energy/step5.png';
import step6Icon from '../assets/icons/energy/step6.png';
import MobileMenu from './components/MobileMenu';

const serviceCards = [
  {
    title: 'Doradztwo',
    description:
      'Doradzamy samorządom, podmiotom prywatnym, spółdzielniom i społecznościom przy transformacji energetycznej. Wspieramy wybór formy prawnej, model biznesowy, dokumentacja, komunikacja z mieszkańcami.',
    icon: doradztwoIcon,
  },
  {
    title: 'Wdrożenia',
    description:
      'Wdrażamy systemy zarządzania energią i zakładamy spółdzielnie energetyczne razem z wami. Towarzyszymy klientowi od analizy aż do momentu, realnego wdrożenia systemu.',
    icon: wdrozeniaIcon,
  },
  {
    title: 'Analiza',
    description:
      'Sprawdzamy, gdzie w waszej gminie lub społeczności są realne oszczędności i jaki jest potencjał energetyczny, następnie na tej podstawie proponujemy konkretne, policzalne rozwiązania.',
    icon: analizaIcon,
  },
  {
    title: 'Szkolenia',
    description:
      'Uczymy samorządowców, liderów społecznych i mieszkańców nie tylko, jak założyć spółdzielnię energetyczną, ale też samodzielnie ją prowadzić.',
    icon: szkoleniaIcon,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Zaczynamy od koncepcji',
    description:
      'Opracowujemy Koncepcję Rozwoju Społeczności Energetycznej zgodną z wymogami Ministerstwa Klimatu oraz programów KPO. Pokazujemy różne warianty (fotowoltaika, biogaz, wiatr, źródła termalne, rozwiązania łączone) i mówimy wprost, który ma sens przy waszych warunkach.',
    icon: step1Icon,
  },
  {
    number: '02',
    title: 'Liczymy inwestycję',
    description:
      'Analizy techniczno-ekonomiczne, programy funkcjonalno-użytkowe, Studia Wykonalności, dokumentacja do warunków zabudowy dla farm fotowoltaicznych, biogazowni i biometanowni rolniczych, źródeł geotermalnych i wodnych.',
    icon: step2Icon,
  },
  {
    number: '03',
    title: 'Zakładamy spółdzielnię',
    description:
      'Identyfikujemy interesariuszy, docieramy do lokalnej społeczności i bierzemy na siebie stronę prawno-organizacyjną: statut, uchwały zarządu i rady gminy, rejestrację spółdzielni energetycznej.',
    icon: step3Icon,
  },
  {
    number: '04',
    title: 'Zajmujemy się dofinansowaniem',
    description:
      'Przygotowujemy wnioski o dofinansowanie inwestycji OZE (np. Energia dla Wsi, NFOŚiGW, WFOŚiGW, KPO, a także programy europejskie LIFE, SHINE, RESCOOP).',
    icon: step4Icon,
  },
  {
    number: '05',
    title: 'Prowadzimy projekt, jeśli tego potrzebujecie',
    description:
      'Możemy wejść w rolę menedżera lub koordynatora projektu energetyki obywatelskiej i wziąć na siebie codzienne zarządzanie - od koncepcji po uruchomienie instalacji.',
    icon: step5Icon,
  },
  {
    number: '06',
    title: 'Uczymy Wasz zespół samodzielności',
    description:
      'Budujemy kompetencje pracowników samorządów i lokalnych liderów, żeby po naszym wyjściu spółdzielnia dalej działała bez problemu. Szkolenia i warsztaty wyceniamy osobno, w zależności od liczby uczestników i tematyki.',
    icon: step6Icon,
  },
];

const projects = [
  {
    title: 'Spółdzielczość energetyczna Ziemi Kłodzkiej',
    description:
      'CoopTech Hub, jako pionierski inkubator społeczności energetycznych w Polsce, odegrał rolę w promowaniu i wspieraniu rozwoju nowych spółdzielni energetycznych na obszarze Ziemi Kłodzkiej na etapie koncepcyjnym.',
    image: spoldzielczoscKlodzkaImage,
    href: '/nasze-projekty/spoldzielczosc-energetyczna-ziemi-klodzkiej',
    accent: '#FCEBF1',
    imageBg: 'transparent',
    imageContain: false,
  },
  {
    title: 'LIFE Comet 💫',
    description:
      'Drogą do sprawiedliwej transformacji energetycznej – a więc do czystej, bezpiecznej i zdecentralizowanej energetyki – są społeczności energetyczne. LIFE Comet wspiera tworzenie koalicji energetycznych na poziomie krajowym w krajach Europy Środkowo-Wschodniej. Pomagamy zakładać nowe społeczności energetycznych poprzez szkolenia i pomoc techniczną.',
    image: lifeCometImage,
    href: '/nasze-projekty/life-comet',
    accent: '#FFFDEE',
    imageBg: '#FFFDEE',
    imageContain: true,
  },
  {
    title: 'Spółdzielnia Otwarty Jazdów',
    description:
      'W 2023 roku założyliśmy, wraz z siedmioma innymi partnerami, pierwszą miejską spółdzielnię energetyczną - Spółdzielnię Otwarty Jazdów. Nasz model miejskiej spółdzielni energetycznej to nowa jakość obywatelskich społeczności energetycznych.',
    image: otwartyJazdowImage,
    href: '/nasze-projekty/spoldzielnia-otwarty-jazdow',
    accent: '#FCEBF1',
    imageBg: 'transparent',
    imageContain: false,
  },
];

const publication = getFirstPublicationByTag('energetyka');

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

export default function EnergyPage() {
  const [openStepNumbers, setOpenStepNumbers] = useState<Set<string>>(
    () => new Set(processSteps[0]?.number ? [processSteps[0].number] : []),
  );

  return (
    <div className="energy-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="energy-hero-section" id="start">
          <div className="energy-hero-copy segment-reveal segment-delay-1">
            <h1>
              <span>Transformacja</span>
              <strong>Energetyczna</strong>
            </h1>
            <p>
              Pomagamy samorządom i społecznościom wziąć sprawy energetyczne we własne ręce, od pierwszej rozmowy po
              działającą instalację.
            </p>
            <a className="primary-button" href="#kontakt">
              Skontaktuj się
            </a>
          </div>
        </section>

        <section className="energy-services-section">
          <div className="section-header">
            <h2>Czym się zajmujemy?</h2>
          </div>

          <div className="energy-services-grid segment-reveal segment-delay-2">
            {serviceCards.map((service) => (
              <article className="energy-card" key={service.title}>
                <div className="energy-card-head">
                  <img src={service.icon} alt="" aria-hidden="true" />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="energy-process-section">
          <div className="section-header">
            <h2>Jak przebiega współpraca?</h2>
          </div>

          <div className="energy-process-list segment-reveal segment-delay-3">
            {processSteps.map((step) => (
              <article className={`energy-step ${openStepNumbers.has(step.number) ? 'is-open' : ''}`} key={step.number}>
                <button
                  type="button"
                  className="energy-step-trigger"
                  aria-expanded={openStepNumbers.has(step.number)}
                  onClick={() => {
                    setOpenStepNumbers((current) => {
                      const next = new Set(current);
                      if (next.has(step.number)) {
                        next.delete(step.number);
                      } else {
                        next.add(step.number);
                      }
                      return next;
                    });
                  }}
                >
                  <div className="energy-step-head">
                    <p className="energy-step-number">{step.number}</p>
                    <h3 className="subpage-step-title">{step.title}</h3>
                  </div>
                  <span className="energy-step-indicator" aria-hidden="true">
                    {openStepNumbers.has(step.number) ? '−' : '+'}
                  </span>
                </button>

                <div className="energy-step-panel">
                  <p className="energy-step-copy">{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="energy-pricing segment-reveal segment-delay-4">
            <article className="energy-pricing-card">
              <h3>Samorządy</h3>
              <p>
                Kompleksowa realizacja projektu: analiza, warianty rozwiązań, wsparcie prawno-organizacyjne,
                dokumentacja inwestycyjna i wniosek o dofinansowanie.
              </p>
              <strong>od 20 000 zł</strong>
            </article>

            <article className="energy-pricing-card">
              <h3>Spółdzielnie mieszkaniowe</h3>
              <p>
                Dla wspólnot i podmiotów prywatnych przygotowujemy wycenę indywidualną, zależną od zakresu i skali
                projektu.
              </p>
              <strong>Wycena indywidualna</strong>
            </article>
          </div>
        </section>

        <section className="energy-projects-section">
          <div className="energy-section-head">
            <h2>Wybrane realizacje</h2>
            <a href="/nasze-projekty" className="publications-link">
              zobacz wszystkie
            </a>
          </div>

          <div className="energy-realizations segment-reveal segment-delay-5">
            {projects.map((project, index) => (
              <a
                className={`energy-realization ${index % 2 === 1 ? 'is-reverse' : ''}`}
                key={project.title}
                href={project.href}
                style={{ ['--energy-accent' as string]: project.accent }}
              >
                <div className="energy-realization-image" style={{ background: project.imageBg }}>
                  <img
                    className={project.imageContain ? 'is-contain' : ''}
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <div className="energy-realization-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="publications-section energy-publications-section" id="publikacje">
          <div className="publications-header">
            <div className="section-header">
              <h2>Publikacje</h2>
            </div>
            <a className="publications-link" href="/publikacje">
              Wszystkie publikacje
            </a>
          </div>

          <div className="publications-carousel segment-reveal segment-delay-6">
            <button type="button" className="carousel-arrow" aria-label="Poprzednia publikacja">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="carousel-window">
              <div className="publications-track">
                <article className={`publication-slide ${publication ? `is-${publication.tag}` : ''}`}>
                  <div className={`publication-visual ${publication ? `is-${publication.tag}` : ''}`}>
                    <div className="publication-image-stack" />
                  </div>

                  <div className="publication-content">
                    <div className="publication-body">
                      <p className="publication-authors">
                        {publication ? `${publication.authors.join(', ')} · ${publication.date}` : ''}
                      </p>
                      <h3>{publication?.title ?? ''}</h3>
                      <p className="publication-copy">{publication?.description ?? ''}</p>
                    </div>

                    <div className="publication-footer">
                      <a className="publication-link-row" href={publication ? `/publikacje/${publication.id}` : '#'}>
                        <span>czytaj więcej</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <button type="button" className="carousel-arrow" aria-label="Następna publikacja">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

          </div>
        </section>

        <SupportContactSection
          className="energy-support-section segment-reveal segment-delay-7"
          title="Potrzebujesz wsparcia w energetyce obywatelskiej?"
          description="Mamy pionierskie doświadczenie na tym rynku w Polsce i pracujemy zarówno z samorządami, jak i podmiotami prywatnymi. Napiszcie, a dobierzemy zakres pod Waszą sytuację."
          backgroundImageSrc={contactEnergyImage}
        />
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

import { useState } from 'react';
import './digitalization-page.css';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import SupportContactSection from './components/SupportContactSection';
import contactDigitalizationImage from '../assets/contact/contact-digitalization.jpg';
import plzAppMockup from '../assets/plz-app-mockup.png';
import zwiazkowaRewolucjaImage from '../assets/projects/zwiazkowa-rewolucja.jpg';
import opzzImage from '../assets/projects/opzz.jpg';
import dopasowujemyIcon from '../assets/icons/digital/dopasowujemy.svg';
import rozwijamyPlzIcon from '../assets/icons/digital/rozwijamy-platforme-plz.svg';
import narzedziaAiIcon from '../assets/icons/digital/budujemy-narzedzia-ai.svg';
import szkoleniaIcon from '../assets/icons/digital/szkolenia.svg';
import offer1Icon from '../assets/icons/digital/offer1.png';
import offer2Icon from '../assets/icons/digital/offer2.png';
import offer3Icon from '../assets/icons/digital/offer3.png';
import offer4Icon from '../assets/icons/digital/offer4.png';
import MobileMenu from './components/MobileMenu';

const digitalServices = [
  {
    title: 'Dopasowujemy wdrożenie do Waszej organizacji',
    description:
      'Przeprowadzamy związki zawodowe, spółdzielnie i organizacje społeczne krok po kroku przez cyfrową transformację: od diagnozy potrzeb i warsztatów współprojektowania, przez wdrożenie Platformy PLZ, po budowę rozwiązań skrojonych pod ich specyfikę.',
    icon: dopasowujemyIcon,
  },
  {
    title: 'Rozwijamy Platformę PLZ',
    description:
      'Rozwijamy Platformę PLZ czyli wielofunkcyjne narzędzie do komunikacji i zarządzania organizacją oraz medium społecznościowe. Dzięki funkcjom takim jak newsy, głosowania i ankiety, wydarzenia, zadania i projekty czy płatności PLZ stała się wirtualną przestrzenią dla setek organizacji w Polsce.',
    icon: rozwijamyPlzIcon,
  },
  {
    title: 'Budujemy narzędzia AI',
    description:
      'Tworzymy dedykowane rozwiązania AI odpowiadające na realne potrzeby organizacji, jak np. chatbot Nadzieja oraz Asystent Związkowca AI, oparty na znajomości prawa pracy i wspierający struktury związkowe w codziennych zadaniach.',
    icon: narzedziaAiIcon,
  },
  {
    title: 'Prowadzimy szkolenia',
    description:
      'Podnosimy kompetencje cyfrowe działaczy i liderek organizacji związkowych i społecznych: uczymy praktycznego wykorzystania AI i konkretnych narzędzi cyfrowych w codziennej pracy, od komunikacji online, przez zarządzanie informacją i ochronę danych, po automatyzację powtarzalnych zadań.',
    icon: szkoleniaIcon,
  },
];

const digitalOfferItems = [
  {
    number: '01',
    title: 'Rozwijamy PLZ — platformę do zarządzania lokalnymi społecznościami',
    description:
      'Wdrażamy Platformę PLZ: komunikacja z członkami, głosowania, wydarzenia, zadania i płatności w jednej, uporządkowanej przestrzeni, dopasowanej do Twojej organizacji.',
    icon: offer1Icon,
  },
  {
    number: '02',
    title: 'Przeprowadzamy organizacje przez cyfrową transformację',
    description: 'Diagnozujemy potrzeby, projektujemy rozwiązania wspólnie z użytkownikami i towarzyszymy przy wdrożeniu.',
    icon: offer2Icon,
  },
  {
    number: '03',
    title: 'Projektujemy i wdrażamy rozwiązania oparte na sztucznej inteligencji',
    description: 'Budujemy Asystentów AI od analizy potrzeb, przez dobór modelu i bazę wiedzy, po wdrożenie gotowego rozwiązania end-to-end.',
    icon: offer3Icon,
  },
  {
    number: '04',
    title: 'Szkolimy liderów i działaczy w zakresie kompetencji cyfrowych',
    description: 'Prowadzimy stacjonarne szkolenia w całej Polsce oraz online.',
    icon: offer4Icon,
  },
];

const digitalProjects = [
  {
    title: 'Platforma Lokalnych Zasobów (PLZ): rozwój systemu i nowych funkcjonalności',
    description:
      'Rozwijamy Platformę PLZ, projektujemy nowe funkcjonalności na podstawie realnych potrzeb użytkowników, prowadzimy development i testy oraz stały monitoring i optymalizację działania aplikacji.',
    image: plzAppMockup,
    href: undefined,
    accent: '#FCEBF1',
  },
  {
    title: 'Związkowa Rewolucja – Od Papieru do Cyfryzacji',
    description:
      'W partnerstwie z Ogólnopolskim Porozumieniem Związków Zawodowych oraz Instytutem Spraw Publicznych tworzymy i wdrażamy narzędzie cyfrowe „Asystent Związkowca AI", chatbota AI skoncentrowanego na tematyce prawa pracy i działalności związkowej opartego na mechanizmie RAG (Retrieval-Augmented Generation). Narzędzie to wspiera codzienną pracę struktur związkowych: automatyzację zadań administracyjnych, zarządzanie członkostwem, dostęp do dokumentów, obsługę zgłoszeń pracowniczych oraz dostęp do wiedzy z obszaru prawa pracy i działalności związkowej. Projekt realizowany jest w ramach programu FERS (Fundusze Europejskie dla Rozwoju Społecznego).',
    image: zwiazkowaRewolucjaImage,
    href: '/nasze-projekty/zwiazkowa-rewolucja',
    accent: '#FFFDEE',
  },
  {
    title: 'Cyfrowa transformacja OPZZ',
    description:
      'Dla OPZZ przeprowadziliśmy pełen proces: od diagnozy potrzeb po wdrożenie chatbota Nadzieja i dedykowanych funkcji w PLZ. Powstały dwa rozwiązania: chatbot doradczy Nadzieja na www.pracujgodnie.pl dostępny w języku polskim, ukraińskim i angielskim oraz automatyzujący porady prawne, oraz dedykowane funkcjonalności w Aplikacji PLZ (wydarzenia, kalendarz, głosowania, zadania) dla organizacji zakładowych. Efekt: ponad pół miliona osób skorzystało z Nadziei w pierwszym roku, a PLZ stała się „wirtualną tablicą związkową" dla ok. 30 ogólnopolskich związków zawodowych w Polsce, które komunikują się, głosują i pobierają składki w jednym, bezpiecznym miejscu.',
    image: opzzImage,
    href: '/nasze-projekty/cyfrowa-transformacja-opzz',
    accent: '#FCEBF1',
  },
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

export default function DigitalizationPage() {
  const [openOfferNumbers, setOpenOfferNumbers] = useState<Set<string>>(
    () => new Set(digitalOfferItems[0]?.number ? [digitalOfferItems[0].number] : []),
  );

  return (
    <div className="digital-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="digital-hero-section" id="start">
          <div className="digital-hero-copy segment-reveal segment-delay-1">
            <h1>
              <span>Nasze technologie</span>
              <strong>budują zaufanie</strong>
            </h1>
            <a className="primary-button" href="#kontakt">
              Skontaktuj się
            </a>
          </div>
        </section>

        <section className="digital-services-section">
          <div className="section-header">
            <h2>Czym się zajmujemy?</h2>
          </div>

          <div className="digital-services-grid segment-reveal segment-delay-2">
            {digitalServices.map((service) => (
              <article className="digital-service-card" key={service.title}>
                <div className="digital-service-head">
                  <img src={service.icon} alt="" aria-hidden="true" />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="digital-offer-section">
          <div className="section-header">
            <h2>Oferta</h2>
          </div>

          <div className="digital-offer-list segment-reveal segment-delay-3">
            {digitalOfferItems.map((item) => (
              <article className={`digital-offer-item ${openOfferNumbers.has(item.number) ? 'is-open' : ''}`} key={item.number}>
                <button
                  type="button"
                  className="digital-offer-trigger"
                  aria-expanded={openOfferNumbers.has(item.number)}
                  onClick={() => {
                    setOpenOfferNumbers((current) => {
                      const next = new Set(current);
                      if (next.has(item.number)) {
                        next.delete(item.number);
                      } else {
                        next.add(item.number);
                      }
                      return next;
                    });
                  }}
                >
                  <div className="digital-offer-head">
                    <p className="digital-offer-number">{item.number}</p>
                    <h3 className="subpage-step-title">{item.title}</h3>
                  </div>
                  <span className="digital-offer-indicator" aria-hidden="true">
                    {openOfferNumbers.has(item.number) ? '−' : '+'}
                  </span>
                </button>

                <div className="digital-offer-panel">
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="digital-projects-section">
          <div className="energy-section-head">
            <h2>Wybrane realizacje</h2>
            <a href="/nasze-projekty" className="publications-link">
              zobacz wszystkie
            </a>
          </div>

          <div className="digital-realizations segment-reveal segment-delay-4">
            {digitalProjects.map((project, index) => (
              <a
                className={`digital-realization ${index % 2 === 1 ? 'is-reverse' : ''}`}
                key={project.title}
                href={project.href}
              >
                <div className="digital-realization-image">
                  <img src={project.image} alt="" aria-hidden="true" />
                </div>

                <div className="digital-realization-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <SupportContactSection
          className="digital-support-section segment-reveal segment-delay-5"
          title="Technologia po Waszej stronie"
          description="Nie musisz wybierać między funkcjonalnością a wartościami. PLZ daje Twojej organizacji narzędzia, nad którymi masz kontrolę, bez uzależnienia od dostawców, którym nie ufasz. Skontaktuj się z nami!"
          backgroundImageSrc={contactDigitalizationImage}
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

import { useEffect, useState } from 'react';
import './local-development-page.css';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import SupportContactSection from './components/SupportContactSection';
import contactLocalDevelopmentImage from '../assets/contact/contact-local-development.jpg';
import { getPublicationsByTag } from './data/publications';
import mostFarmaImage from '../assets/projects/most-farma.jpg';
import akademiaGzmImage from '../assets/projects/akademia-gzm.jpg';
import regeneratorMiastImage from '../assets/projects/regenerator-miast.jpg';
import spoldzielnieRozwojoweIcon from '../assets/icons/local/spoldzielnie-rozwojowe.svg';
import miejskaOdpornoscIcon from '../assets/icons/local/miejska-odpornosc.svg';
import rolnictwoMiejskieIcon from '../assets/icons/local/rolnictwo-miejskie.svg';
import programySamorzadyIcon from '../assets/icons/local/programy-samorzady.svg';
import localOffer1Icon from '../assets/icons/local/offer1.png';
import localOffer2Icon from '../assets/icons/local/offer2.png';
import localOffer3Icon from '../assets/icons/local/offer3.png';
import localOffer4Icon from '../assets/icons/local/offer4.png';
import MobileMenu from './components/MobileMenu';

const localServices = [
  {
    title: 'Spółdzielnie rozwojowe',
    description:
      'Pomagamy samorządom i społecznościom tworzyć Lokalne Spółdzielnie Rozwojowe — hybrydy łączące samorząd, instytucje, firmy i mieszkańców w jednym podmiocie. To wehikuł lokalnej zmiany, który może prowadzić spółdzielnię energetyczną, zarządzać targowiskiem czy obsługiwać cyfrową platformę.',
    icon: spoldzielnieRozwojoweIcon,
  },
  {
    title: 'Miejska odporność',
    description:
      'Pracujemy z miastami nad budowaniem odporności na kryzysy — w oparciu o zasoby, które już mają. Używamy autorskich metod, żeby znaleźć potencjał tam, gdzie inni go nie dostrzegają: w relacjach, przestrzeniach i lokalnych instytucjach.',
    icon: miejskaOdpornoscIcon,
  },
  {
    title: 'Rolnictwo miejskie',
    description:
      'Wspieramy powstawanie spółdzielczych farm miejskich, ogrodów społecznościowych i lokalnych systemów żywnościowych. Pomagamy w całym procesie — od modelu społeczno-ekonomicznego, przez współpracę z urzędem, po budowanie społeczności wokół inicjatywy.',
    icon: rolnictwoMiejskieIcon,
  },
  {
    title: 'Programy dla samorządów',
    description:
      'Projektujemy i realizujemy wieloetapowe programy rozwojowe dla miast — takie jak Regenerator Miast czy Akademia Miejskiej Odporności. Łączymy pracę warsztatową z konkretnymi zadaniami wdrożeniowymi i metodami takimi jak Design Thinking.',
    icon: programySamorzadyIcon,
  },
];

const localOfferItems = [
  {
    number: '01',
    title: 'Wspieramy miasta w procesach rewitalizacji i dekarbonizacji',
    description:
      'Pomagamy samorządom budować Lokalne Spółdzielnie Rozwojowe, które łączą różne środowiska i zatrzymują kapitał w lokalnym obiegu. Poprzez współpracę z samorządami i lokalną społecznością wspieramy sprawiedliwą transformację energetyczną i cyfrową.',
    icon: localOffer1Icon,
  },
  {
    number: '02',
    title: 'Wspieramy powstawanie lokalnych przedsiębiorstw społecznych i spółdzielczych modeli biznesowych',
    description:
      'Inkubujemy spółdzielnie — od kooperatyw spożywczych i farm miejskich, po spółdzielnie projektantów i informatyków. Prowadzimy szkolenia w obszarze zarządzania przedsiębiorstwami ekonomii społecznej i spółdzielni.',
    icon: localOffer2Icon,
  },
  {
    number: '03',
    title: 'Wdrażamy innowacyjne rozwiązania z zakresu ulepszania miejskiej infrastruktury, takiej jak targowiska',
    description:
      'Łączymy wiedzę urbanistyczną, socjologiczną i technologiczną, żeby ożywiać przestrzenie, które już istnieją. Wspieramy procesy wprowadzania innowacji społecznych w gminach poprzez między innymi warsztaty dla samorządowców, badania z zakresu odporności miejskiej i współpracy miast i wsi.',
    icon: localOffer3Icon,
  },
  {
    number: '04',
    title: 'Specjalizujemy się w miejskim rolnictwie i budowaniu lokalnych systemów żywnościowych',
    description:
      'Wspieramy powstawanie spółdzielczych farm miejskich i ogrodów społecznościowych — od modelu ekonomicznego po budowanie społeczności oraz negocjacje z inwestorami, gminą i właścicielami ziemi.',
    icon: localOffer4Icon,
  },
];

const localProjects = [
  {
    title: 'MOST Spółdzielcza farma miejska',
    description:
      'Powołaliśmy Spółdzielnię MOST, która poprowadzi 3,6 ha farmę miejską w Warszawie. Będzie to pierwszy w Polsce ogólnodostępny park, łączący funkcje uprawy, edukacji i innowacji żywnościowej, prowadzony przez przedsiębiorstwo społeczne.',
    image: mostFarmaImage,
    href: '/nasze-projekty/most-spoldzielcza-farma-miejska',
    accent: '#FCEBF1',
    imageBg: 'transparent',
    imageContain: false,
  },
  {
    title: 'Akademia Miejskiej Odporności dla GZM 🏡',
    description:
      'Przeprowadziliśmy Akademię Miejskiej Odporności dla Górnośląsko-Zagłębiowskiej Metropolii, czyli serię warsztatów na temat rozwoju lokalnego w duchu miejskiej odporności w mniejszych miastach. Efektem warsztatów jest Podręcznik Dobrych Praktyk, który niebawem opublikujemy. W Podręczniku zarekomendowaliśmy projekty spółdzielni rozwojowych spersonalizowane do potrzeb każdej z gmin.',
    image: akademiaGzmImage,
    href: '/nasze-projekty/akademia-miejskiej-odpornosci-gzm',
    accent: '#FFFDEE',
    imageBg: '#FFFDEE',
    imageContain: false,
  },
  {
    title: 'Regenerator Miast',
    description:
      'Dotychczasowy model rozwoju polskich miast się wyczerpał. Pieniądze z zewnątrz – unijne dotacje, zagraniczny kapitał, tania praca – już nie wystarczą. Potrzebny jest model, który zatrzymuje kapitał w lokalnym obiegu i sprawia, że mieszkańcy stają się współwłaścicielami, a nie tylko odbiorcami usług. Regenerator Miast wspiera przedstawicieli samorządów miast z całej Polski w wypracowaniu modelu rozwojowego, wdrażającego rozwiązania Lokalnych Spółdzielni Rozwojowych.',
    image: regeneratorMiastImage,
    href: '/nasze-projekty/regenerator-miast',
    accent: '#FCEBF1',
    imageBg: 'transparent',
    imageContain: false,
  },
];

const imgVector1 = 'https://www.figma.com/api/mcp/asset/8780fb60-1fa5-4e31-aa21-97cdb018e594';

const featuredPublications = getPublicationsByTag('rozwoj-lokalny', 3);

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

export default function LocalDevelopmentPage() {
  const [openOfferNumbers, setOpenOfferNumbers] = useState<Set<string>>(
    () => new Set(localOfferItems[0]?.number ? [localOfferItems[0].number] : []),
  );
  const [activePublication, setActivePublication] = useState(0);

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

  return (
    <div className="local-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="local-hero-section" id="start">
          <div className="local-hero-copy segment-reveal segment-delay-1">
            <h1>Rozwój lokalny</h1>
            <a className="primary-button" href="#kontakt">
              Skontaktuj się
            </a>
          </div>
        </section>

        <section className="local-services-section">
          <div className="section-header">
            <h2>Czym się zajmujemy?</h2>
          </div>

          <div className="local-services-grid segment-reveal segment-delay-2">
            {localServices.map((service) => (
              <article className="local-service-card" key={service.title}>
                <div className="local-service-head">
                  <img src={service.icon} alt="" aria-hidden="true" />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="local-offer-section">
          <div className="section-header">
            <h2>Oferta</h2>
          </div>

          <div className="local-offer-list segment-reveal segment-delay-3">
            {localOfferItems.map((item) => (
              <article className={`local-offer-item ${openOfferNumbers.has(item.number) ? 'is-open' : ''}`} key={item.number}>
                <button
                  type="button"
                  className="local-offer-trigger"
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
                  <div className="local-offer-head">
                    <p className="local-offer-number">{item.number}</p>
                    <h3 className="subpage-step-title">{item.title}</h3>
                  </div>
                  <span className="local-offer-indicator" aria-hidden="true">
                    {openOfferNumbers.has(item.number) ? '−' : '+'}
                  </span>
                </button>

                <div className="local-offer-panel">
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="local-projects-section">
          <div className="energy-section-head">
            <h2>Wybrane realizacje</h2>
            <a href="/nasze-projekty" className="publications-link">
              zobacz wszystkie
            </a>
          </div>

          <div className="local-realizations segment-reveal segment-delay-4">
            {localProjects.map((project, index) => (
              <a
                className={`local-realization ${index % 2 === 1 ? 'is-reverse' : ''}`}
                key={project.title}
                href={project.href}
                style={{ ['--local-accent' as string]: project.accent }}
              >
                <div className="local-realization-image" style={{ background: project.imageBg }}>
                  <img className={project.imageContain ? 'is-contain' : ''} src={project.image} alt="" aria-hidden="true" />
                </div>

                <div className="local-realization-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="publications-section local-publications-section" id="publikacje">
          <div className="publications-header">
            <div className="section-header">
              <h2>Publikacje</h2>
            </div>
            <a className="publications-link" href="/publikacje">
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
                    href={`/publikacje/${publication.id}`}
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
        </section>

        <SupportContactSection
          className="local-support-section segment-reveal segment-delay-6"
          title="Chcesz rozpocząć projekt rozwoju lokalnego?"
          description="Skontaktuj się z nami! Pomożemy Ci dostosować model spółdzielni rozwojowej do kontekstu Twojego miasta i wesprzymy w budowaniu lokalnej przyszłości na spółdzielczym gruncie."
          backgroundImageSrc={contactLocalDevelopmentImage}
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

import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import './about-page.css';
import MobileMenu from './components/MobileMenu';

const heroParagraphs = [
  'CoopTech Hub to pierwsze w Polsce centrum technologii spółdzielczych, prowadzone przez PLZ Spółdzielnię. Naszym celem jest tworzenie wspólnoty opartej o zaufanie przez cyfrowy restart spółdzielczości. Edukujemy, szkolimy, doradzamy i wdrażamy własne rozwiązania technologiczne. Inkubujemy spółdzielnie rozwojowe i społeczności energetyczne.',
  'Postrzegamy innowację jako usługę publiczną, która powinna być powszechnie dostępna i zrozumiała. Oferujemy technologie i usługi oparte o doświadczenie interdyscyplinarnego zespołu, przeznaczone dla: samorządów, instytucji kultury, szkół i NGO, mieszkanek i mieszkańców, biznesu, jesteśmy wsparciem dla zrównoważonych inicjatyw. Realizujemy projekty o tematyce energetycznej, społecznej i spółdzielczej. Kooperujemy zamiast konkurować.',
];

const values = [
  {
    title: 'Zrównoważony rozwój',
    description:
      'Świat to globalna wioska, w której wszyscy jesteśmy od siebie zależni. W trosce o długoterminowy dobrobyt myślimy jak tworzyć i redystrybuować wartość dla wszystkich, a przyrodę i partnerów traktować z szacunkiem.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon1.png',
  },
  {
    title: 'Cyfrowa ekologia',
    description:
      'Żyjemy na planecie o ograniczonych zasobach. Nowe technologie zużywają energię i surowce w ogromnym tempie. Aby odpowiedzialnie z nich korzystać, wybieramy rozwiązania cyfrowe które zmniejszają nasz ślad środowiskowy.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon2.png',
  },
  {
    title: 'Kultura zaufania',
    description:
      'Społeczeństwo to nie tylko suma jednostek, ale ich wspólne relacje. Stawiamy na kulturę zaufania, która wzmacnia współpracę na rzecz wspólnego dobra. Zaufanie to jeden z nielicznych zasobów, który wzrasta im częściej się go używa.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon3.png',
  },
  {
    title: 'Restart spółdzielczości',
    description:
      'Dzięki zasadom ruchu spółdzielczego stawiamy na innowacje nie tylko technologiczne, ale i społeczne. Uwzględniamy demokrację ekonomiczną już w fazie projektowania nowych rozwiązań.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon4.png',
  },
  {
    title: 'Suwerenność cyfrowa',
    description:
      'Cyfrowe dane nie są towarem ani prywatną własnością korporacji. To dobro wspólne, którego twórcami jesteśmy my sami. Wzmacniamy prawa do naszych danych i do ich wykorzystania w dobrym celu. Projektujemy technologie służące ludziom, a nie odwrotnie.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon5.png',
  },
  {
    title: 'Wspólna Wartość Społeczna (SSV)',
    description:
      'Wyzwania współczesności nie zostały rozwiązane przez CSR. Działalność charytatywna jest potrzebna, ale niewystarczająca. Dlatego kierujemy się filozofią SSV (Shared Social Value), badając nowe modele biznesowe oparte o współpracę i wspólne tworzenie wartości społecznej.',
    icon: 'https://www.hub.coop/wp-content/uploads/2021/03/icon6.png',
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

export default function AboutPage() {
  return (
    <div className="about-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="about-hero-section" id="start">
          <div className="about-hero-copy segment-reveal segment-delay-1">
            <h1>
              <span>Czym jest</span>
              <strong>CoopTech Hub</strong>
            </h1>

            <ul className="about-hero-list">
              {heroParagraphs.map((paragraph) => (
                <li key={paragraph.slice(0, 24)}>{paragraph}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-values-section">
          <h2>
            Nasze <strong>wartości</strong>
          </h2>

          <div className="about-values-grid segment-reveal segment-delay-2">
            {values.map((value) => (
              <article className="about-value-card" key={value.title}>
                <img className="about-value-icon" src={value.icon} alt="" aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
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

import './team-page.css';
import cthLogo from '../assets/brand/cth-logo.svg';
import iconFacebook from '../assets/social/facebook.svg';
import iconYoutube from '../assets/social/youtube.svg';
import iconLinkedin from '../assets/social/linkedin.svg';
import iconInstagram from '../assets/social/instagram.svg';
import SupportContactSection from './components/SupportContactSection';
import contactHomeImage from '../assets/contact/contact-home.jpg';
import MobileMenu from './components/MobileMenu';

const imgFooterFacebook = 'https://www.figma.com/api/mcp/asset/12e3edcf-2c93-49e4-bcbf-5677dfd263e2';
const imgFooterLinkedin = 'https://www.figma.com/api/mcp/asset/de705ff9-4957-43be-b521-b73d1ec65f94';

const teamMembers = [
  {
    name: 'Jan Oleszczuk-Zygmuntowski',
    photo: 'https://www.hub.coop/wp-content/uploads/2023/09/Jan-Oleszczuk-Zygmuntowski.png.webp',
    bio: 'Ekonomista, spółdzielca, doktor nauk o zarządzaniu i jakości specjalizujący się w dziedzinie gospodarki cyfrowej i zarządzania danymi. Prezes Zarządu PLZ Spółdzielni, operatora centrum technologii spółdzielczych CoopTech Hub, oraz współprzewodniczący Polskiej Sieci Ekonomii. Wykładowca Akademii Leona Koźmińskiego na kierunku Zarządzanie i AI. Założyciel i w latach 2015-2020 prezes zarządu Fundacji Instrat, progresywnego think-tanku. Doświadczenie zdobywał m.in. w Polskim Funduszu Rozwoju. Absolwent Szkoły Głównej Handlowej w Warszawie. Autor „Kapitalizmu Sieci”, książki nominowanej do nagrody Economicus 2020.',
    socials: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/jan-j-zygmuntowski/' }],
  },
  {
    name: 'Joanna Erbel',
    photo: 'https://www.hub.coop/wp-content/uploads/2023/09/Joanna-Erbel.png.webp',
    bio: 'Doktora socjologii, ekspertka do spraw mieszkaniowych i budowania miejskiej odporności. Członkini Zarządu PLZ Spółdzielni. Dyrektorka ds. protopii w CoopTech Hub, pierwszym w Polsce centrum technologii spółdzielczych. Członkini Rady Fundacji Rynku Najmu. Współautorka raportów CTH – Spółdzielnia Równokręgi, czyli ekonomia troski w działaniu (2023), Spółdzielczy Plan Odbudowy (2021) oraz Spółdzielcza transformacja oraz Pakiet miejskiej odporności (2022). Autorka książek: „Poza własnością. W stronę udanej polityki mieszkaniowej” (2020), „Wychylone w przyszłość. Jak zmienić świat na lepsze” (2022) oraz powieści foresightowej „Jak Henryk zdobył władzę” (2023). Współpracowniczka Fundacji A/typowi, działającej na rzecz neuroróżnorodności. Rolniczka.',
    socials: [{ type: 'linkedin', url: 'https://www.linkedin.com/in/joanna-erbel-74870a164/' }],
  },
  {
    name: 'Tomasz Janas',
    photo: 'https://www.hub.coop/wp-content/uploads/2023/09/Tomasz-Janas.png.webp',
    bio: 'Wizjoner i strateg, ekonomista, pasjonat problematyki social / shared value i ekonomii behawioralnej. Posiada wieloletnie doświadczenie na funkcjach kierowniczych w bankowości, samorządach i administracji centralnej. Przewodniczący Rady Nadzorczej Spółdzielni PLZ. Od 15 lat założyciel i prezes L612 SA (dawniej Leonardo SA), spółki zajmującej się venture building. Realizuje projekty technologiczne na kontynentach: europejskim, APAC oraz afrykańskim.',
    socials: [],
  },
  {
    name: 'Nadia Oleszczuk-Zygmuntowska',
    photo: 'https://www.hub.coop/wp-content/uploads/2023/09/Nadia-Oleszczuk-Zygmuntowska.png.webp',
    bio: 'Działaczka na rzecz praw kobiet i praw pracowniczych. Liderka Rady Konsultacyjnej Strajku Kobiet. Przewodnicząca Konfederacji Pracy Młodych. Najmłodsza członkini Prezydium Rady OPZZ Województwa Mazowieckiego. Bohaterka kampanii Defend the Defenders. Znalazła się na liście 25under25 McKinsey & Company oraz Forbes w 2022 roku za swoją działalność społeczną. Zaangażowana w inicjatywę Unions Help Refugees, mającą na celu pomoc uchodźczyniom w odnalezieniu się na polskim rynku pracy. W CoopTech Hubie odpowiedzialna za cyfryzację związków zawodowych.',
    socials: [
      { type: 'facebook', url: 'https://www.facebook.com/nadia.oleszczuk' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/nadia-oleszczuk-zygmuntowska-7839001b1/' },
    ],
  },
  {
    name: 'Joanna Gosiewska-Giralt',
    photo: 'https://www.hub.coop/wp-content/uploads/2023/09/Joanna-Gosiewska-Giralt.png.webp',
    bio: 'Członkini Zarządu Spółki Z GO rozwijającej aplikację PLZ oraz członkini rady nadzorczej PLZ Spółdzielnia. Inwestorka, biznesmenka oraz działaczka społeczna, która potrafi integrować różne środowiska dla wspólnego celu. Posiada ponad piętnastoletnie doświadczenie pracy na stanowiskach zarządczych zarówno dla firm polskich jak i zagranicznych. Doświadczenie i wiedzę zdobytą w pracy dla korporacji, firm rodzinnych oraz NGOs wykorzystuje obecnie do budowania strategii biznesowych dla sektora spółdzielczego w zakresie transformacji cyfrowej. Założycielka i Prezeska Fundacji Program Pomocy Pierwsza Praca oraz pomysłodawczyni ogólnopolskiego projektu „Bank Ubrań”.',
    socials: [],
  },
];

const socialIcons: Record<string, string> = {
  facebook: imgFooterFacebook,
  linkedin: imgFooterLinkedin,
};

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

export default function TeamPage() {
  return (
    <div className="team-page page-shell">
      <header className="topbar energy-topbar">
        <MobileMenu />

        <a className="brand-logo" href="/" aria-label="Centrum Technologii Spółdzielczych">
          <img src={cthLogo} alt="Centrum Technologii Spółdzielczych" />
        </a>
      </header>

      <main>
        <section className="team-hero-section" id="start">
          <div className="team-hero-copy segment-reveal segment-delay-1">
            <h1>
              <span>poznaj nasz</span>
              <strong>Zespół</strong>
            </h1>
            <p>
              Zespół CoopTech Hub tworzą członkowie i członkinie PLZ Spółdzielni oraz pracownicy i pracownice
              hubu.
            </p>
            <a className="primary-button" href="#kontakt">
              Skontaktuj się
            </a>
          </div>
        </section>

        <section className="team-members-section">
          <div className="team-grid segment-reveal segment-delay-2">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-card-photo">
                  <img src={member.photo} alt="" aria-hidden="true" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
                {member.socials.length > 0 && (
                  <div className="team-card-socials">
                    {member.socials.map((social) => (
                      <a
                        key={social.url}
                        href={social.url}
                        target="_blank"
                        rel="nofollow noopener"
                        aria-label={`${member.name} - ${social.type}`}
                      >
                        <img src={socialIcons[social.type]} alt="" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <SupportContactSection
          className="team-support-section segment-reveal segment-delay-3"
          title="Chcesz dołączyć do naszego zespołu?"
          description="Napisz do nas, jeśli chcesz porozmawiać o współpracy z CoopTech Hub albo dołączeniu do PLZ Spółdzielni."
          backgroundImageSrc={contactHomeImage}
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

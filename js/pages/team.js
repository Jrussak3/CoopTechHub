import { initShell } from '../app.js';

const imgFooterFacebook = 'https://www.figma.com/api/mcp/asset/12e3edcf-2c93-49e4-bcbf-5677dfd263e2';
const imgFooterLinkedin = 'https://www.figma.com/api/mcp/asset/de705ff9-4957-43be-b521-b73d1ec65f94';

const socialIcons = {
  facebook: imgFooterFacebook,
  linkedin: imgFooterLinkedin,
};

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

function renderTeam() {
  const grid = document.getElementById('team-grid');
  grid.innerHTML = teamMembers
    .map(
      (member) => `
        <article class="team-card">
          <div class="team-card-photo">
            <img src="${member.photo}" alt="" aria-hidden="true" />
          </div>
          <h3>${member.name}</h3>
          <p>${member.bio}</p>
          ${
            member.socials.length > 0
              ? `
            <div class="team-card-socials">
              ${member.socials
                .map(
                  (social) => `
                <a href="${social.url}" target="_blank" rel="nofollow noopener" aria-label="${member.name} - ${social.type}">
                  <img src="${socialIcons[social.type]}" alt="" aria-hidden="true" />
                </a>
              `,
                )
                .join('')}
            </div>
          `
              : ''
          }
        </article>
      `,
    )
    .join('');
}

await initShell({ topbarClass: 'energy-topbar' });
renderTeam();

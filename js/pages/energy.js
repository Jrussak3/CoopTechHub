import { initShell } from '../app.js';
import { getFirstPublicationByTag } from '../data/publications.js';

const processSteps = [
  {
    number: '01',
    title: 'Zaczynamy od koncepcji',
    description:
      'Opracowujemy Koncepcję Rozwoju Społeczności Energetycznej zgodną z wymogami Ministerstwa Klimatu oraz programów KPO. Pokazujemy różne warianty (fotowoltaika, biogaz, wiatr, źródła termalne, rozwiązania łączone) i mówimy wprost, który ma sens przy waszych warunkach.',
  },
  {
    number: '02',
    title: 'Liczymy inwestycję',
    description:
      'Analizy techniczno-ekonomiczne, programy funkcjonalno-użytkowe, Studia Wykonalności, dokumentacja do warunków zabudowy dla farm fotowoltaicznych, biogazowni i biometanowni rolniczych, źródeł geotermalnych i wodnych.',
  },
  {
    number: '03',
    title: 'Zakładamy spółdzielnię',
    description:
      'Identyfikujemy interesariuszy, docieramy do lokalnej społeczności i bierzemy na siebie stronę prawno-organizacyjną: statut, uchwały zarządu i rady gminy, rejestrację spółdzielni energetycznej.',
  },
  {
    number: '04',
    title: 'Zajmujemy się dofinansowaniem',
    description:
      'Przygotowujemy wnioski o dofinansowanie inwestycji OZE (np. Energia dla Wsi, NFOŚiGW, WFOŚiGW, KPO, a także programy europejskie LIFE, SHINE, RESCOOP).',
  },
  {
    number: '05',
    title: 'Prowadzimy projekt, jeśli tego potrzebujecie',
    description:
      'Możemy wejść w rolę menedżera lub koordynatora projektu energetyki obywatelskiej i wziąć na siebie codzienne zarządzanie - od koncepcji po uruchomienie instalacji.',
  },
  {
    number: '06',
    title: 'Uczymy Wasz zespół samodzielności',
    description:
      'Budujemy kompetencje pracowników samorządów i lokalnych liderów, żeby po naszym wyjściu spółdzielnia dalej działała bez problemu. Szkolenia i warsztaty wyceniamy osobno, w zależności od liczby uczestników i tematyki.',
  },
];

function renderProcessSteps() {
  const list = document.getElementById('energy-process-list');
  list.innerHTML = processSteps
    .map(
      (step, index) => `
        <article class="energy-step ${index === 0 ? 'is-open' : ''}" data-step="${step.number}">
          <button type="button" class="energy-step-trigger" aria-expanded="${index === 0}">
            <div class="energy-step-head">
              <p class="energy-step-number">${step.number}</p>
              <h3 class="subpage-step-title">${step.title}</h3>
            </div>
            <span class="energy-step-indicator" aria-hidden="true">${index === 0 ? '−' : '+'}</span>
          </button>

          <div class="energy-step-panel">
            <p class="energy-step-copy">${step.description}</p>
          </div>
        </article>
      `,
    )
    .join('');

  list.querySelectorAll('.energy-step').forEach((step) => {
    const trigger = step.querySelector('.energy-step-trigger');
    const indicator = step.querySelector('.energy-step-indicator');

    trigger.addEventListener('click', () => {
      const isOpen = step.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      indicator.textContent = isOpen ? '−' : '+';
    });
  });
}

function renderPublication() {
  const publication = getFirstPublicationByTag('energetyka');
  const track = document.getElementById('energy-publication-track');

  track.innerHTML = `
    <article class="publication-slide ${publication ? `is-${publication.tag}` : ''}">
      <div class="publication-visual ${publication ? `is-${publication.tag}` : ''}">
        <div class="publication-image-stack"></div>
      </div>

      <div class="publication-content">
        <div class="publication-body">
          <p class="publication-authors">${publication ? `${publication.authors.join(', ')} · ${publication.date}` : ''}</p>
          <h3>${publication?.title ?? ''}</h3>
          <p class="publication-copy">${publication?.description ?? ''}</p>
        </div>

        <div class="publication-footer">
          <a class="publication-link-row" href="${publication ? `/publikacje/${publication.id}.html` : '#'}">
            <span>czytaj więcej</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

await initShell({ topbarClass: 'energy-topbar' });
renderProcessSteps();
renderPublication();

import { initShell } from '../app.js';
import { getPublicationsByTag } from '../data/publications.js';

const localOfferItems = [
  {
    number: '01',
    title: 'Wspieramy miasta w procesach rewitalizacji i dekarbonizacji',
    description:
      'Pomagamy samorządom budować Lokalne Spółdzielnie Rozwojowe, które łączą różne środowiska i zatrzymują kapitał w lokalnym obiegu. Poprzez współpracę z samorządami i lokalną społecznością wspieramy sprawiedliwą transformację energetyczną i cyfrową.',
    icon: '/assets/icons/local/offer1.png',
  },
  {
    number: '02',
    title: 'Wspieramy powstawanie lokalnych przedsiębiorstw społecznych i spółdzielczych modeli biznesowych',
    description:
      'Inkubujemy spółdzielnie — od kooperatyw spożywczych i farm miejskich, po spółdzielnie projektantów i informatyków. Prowadzimy szkolenia w obszarze zarządzania przedsiębiorstwami ekonomii społecznej i spółdzielni.',
    icon: '/assets/icons/local/offer2.png',
  },
  {
    number: '03',
    title: 'Wdrażamy innowacyjne rozwiązania z zakresu ulepszania miejskiej infrastruktury, takiej jak targowiska',
    description:
      'Łączymy wiedzę urbanistyczną, socjologiczną i technologiczną, żeby ożywiać przestrzenie, które już istnieją. Wspieramy procesy wprowadzania innowacji społecznych w gminach poprzez między innymi warsztaty dla samorządowców, badania z zakresu odporności miejskiej i współpracy miast i wsi.',
    icon: '/assets/icons/local/offer3.png',
  },
  {
    number: '04',
    title: 'Specjalizujemy się w miejskim rolnictwie i budowaniu lokalnych systemów żywnościowych',
    description:
      'Wspieramy powstawanie spółdzielczych farm miejskich i ogrodów społecznościowych — od modelu ekonomicznego po budowanie społeczności oraz negocjacje z inwestorami, gminą i właścicielami ziemi.',
    icon: '/assets/icons/local/offer4.png',
  },
];

const imgVector1 = 'https://www.figma.com/api/mcp/asset/8780fb60-1fa5-4e31-aa21-97cdb018e594';

const featuredPublications = getPublicationsByTag('rozwoj-lokalny', 3);

let activePublication = 0;

function renderOfferList() {
  const list = document.getElementById('local-offer-list');
  list.innerHTML = localOfferItems
    .map(
      (item, index) => `
        <article class="subpage-offer-item ${index === 0 ? 'is-open' : ''}" data-offer="${item.number}">
          <button type="button" class="subpage-offer-trigger" aria-expanded="${index === 0}">
            <div class="subpage-offer-head">
              <p class="subpage-offer-number">${item.number}</p>
              <h3 class="subpage-step-title">${item.title}</h3>
            </div>
            <span class="subpage-offer-indicator" aria-hidden="true">${index === 0 ? '−' : '+'}</span>
          </button>

          <div class="subpage-offer-panel">
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join('');

  list.querySelectorAll('.subpage-offer-item').forEach((item) => {
    const trigger = item.querySelector('.subpage-offer-trigger');
    const indicator = item.querySelector('.subpage-offer-indicator');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      indicator.textContent = isOpen ? '−' : '+';
    });
  });
}

function renderPublicationsTrack() {
  const track = document.getElementById('local-publications-track');
  track.innerHTML = featuredPublications
    .map(
      (publication) => `
        <a class="publication-slide is-${publication.tag}" href="/publikacje/${publication.id}.html">
          <div class="publication-visual is-${publication.tag}">
            <div class="publication-image-stack">
              ${
                publication.thumbnailUrl
                  ? `<img src="${publication.thumbnailUrl}" alt="Miniatura publikacji: ${publication.title}" loading="lazy" />`
                  : `<img class="publication-image-fallback" src="/assets/brand/cth-logo.svg" alt="" aria-hidden="true" />`
              }
            </div>
          </div>

          <div class="publication-content">
            <div class="publication-body">
              <p class="publication-authors">${publication.authors.join(', ')} · ${publication.date}</p>
              <h3>${publication.title}</h3>
              <p class="publication-copy">${publication.description}</p>
            </div>

            <div class="publication-footer">
              <img class="publication-divider" src="${imgVector1}" alt="" aria-hidden="true" />
              <span class="publication-link-row">
                <span>czytaj więcej</span>
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </a>
      `,
    )
    .join('');
}

function updateCarousel() {
  const track = document.getElementById('local-publications-track');
  const prevButton = document.getElementById('local-carousel-prev');
  const nextButton = document.getElementById('local-carousel-next');

  track.style.transform = `translateX(-${activePublication * 100}%)`;
  prevButton.disabled = activePublication === 0;
  nextButton.disabled = activePublication === featuredPublications.length - 1;
}

function initPublicationsCarousel() {
  if (!featuredPublications.length) {
    return;
  }

  renderPublicationsTrack();
  updateCarousel();

  const prevButton = document.getElementById('local-carousel-prev');
  const nextButton = document.getElementById('local-carousel-next');

  prevButton.addEventListener('click', () => {
    activePublication = Math.max(0, activePublication - 1);
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    activePublication = Math.min(featuredPublications.length - 1, activePublication + 1);
    updateCarousel();
  });

  window.setInterval(() => {
    if (activePublication === featuredPublications.length - 1) {
      return;
    }
    activePublication += 1;
    updateCarousel();
  }, 5000);
}

await initShell({ topbarClass: 'energy-topbar' });
renderOfferList();
initPublicationsCarousel();

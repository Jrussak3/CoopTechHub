import { initShell } from '../app.js';

const digitalOfferItems = [
  {
    number: '01',
    title: 'Rozwijamy PLZ — platformę do zarządzania lokalnymi społecznościami',
    description:
      'Wdrażamy Platformę PLZ: komunikacja z członkami, głosowania, wydarzenia, zadania i płatności w jednej, uporządkowanej przestrzeni, dopasowanej do Twojej organizacji.',
    icon: '/assets/icons/digital/offer1.png',
  },
  {
    number: '02',
    title: 'Przeprowadzamy organizacje przez cyfrową transformację',
    description:
      'Diagnozujemy potrzeby, projektujemy rozwiązania wspólnie z użytkownikami i towarzyszymy przy wdrożeniu.',
    icon: '/assets/icons/digital/offer2.png',
  },
  {
    number: '03',
    title: 'Projektujemy i wdrażamy rozwiązania oparte na sztucznej inteligencji',
    description:
      'Budujemy Asystentów AI od analizy potrzeb, przez dobór modelu i bazę wiedzy, po wdrożenie gotowego rozwiązania end-to-end.',
    icon: '/assets/icons/digital/offer3.png',
  },
  {
    number: '04',
    title: 'Szkolimy liderów i działaczy w zakresie kompetencji cyfrowych',
    description: 'Prowadzimy stacjonarne szkolenia w całej Polsce oraz online.',
    icon: '/assets/icons/digital/offer4.png',
  },
];

function renderOfferItems() {
  const list = document.getElementById('digital-offer-list');
  list.innerHTML = digitalOfferItems
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

await initShell({ topbarClass: 'energy-topbar' });
renderOfferItems();

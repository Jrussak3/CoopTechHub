import { initShell } from '../app.js';
import { publications, publicationTagLabels } from '../data/publications.js';

const PAGE_SIZE = 6;

const filterItems = [
  { key: 'wszystkie', label: 'Wszystkie' },
  { key: 'cyfryzacja', label: publicationTagLabels.cyfryzacja },
  { key: 'energetyka', label: publicationTagLabels.energetyka },
  { key: 'rozwoj-lokalny', label: publicationTagLabels['rozwoj-lokalny'] },
];

let activeFilter = 'wszystkie';
let visibleCount = PAGE_SIZE;
let observer = null;

function getFilteredPublications() {
  if (activeFilter === 'wszystkie') {
    return publications;
  }

  return publications.filter((publication) => publication.tag === activeFilter);
}

function renderPublicationCard(publication) {
  return `
    <article class="publications-page-card is-${publication.tag}">
      <div class="publications-page-card__body">
        <p class="publications-page-card__title">📄 ${publication.title}</p>
        <p class="publications-page-card__meta">
          ${publication.authors.join(', ')} · ${publication.date}
        </p>
        <p class="publications-page-card__description">${publication.description}</p>
        <p class="publications-page-card__tag">${publicationTagLabels[publication.tag]}</p>
      </div>
      <a class="publications-page-card__action" href="/publikacje/${publication.id}.html" aria-label="${publication.attachment.label}">
        <span aria-hidden="true">→</span>
      </a>
    </article>
  `;
}

function renderFilters() {
  const container = document.getElementById('publications-page-filters');
  container.innerHTML = filterItems
    .map((item) => {
      const isActive = activeFilter === item.key;

      return `
        <button
          type="button"
          class="publications-page-filter is-${item.key} ${isActive ? 'is-active' : ''}"
          data-filter="${item.key}"
          role="tab"
          aria-selected="${isActive}"
        >
          ${item.label}
        </button>
      `;
    })
    .join('');

  container.querySelectorAll('.publications-page-filter').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-filter');

      if (key === activeFilter) {
        return;
      }

      activeFilter = key;
      visibleCount = PAGE_SIZE;
      renderFilters();
      renderGrid();
    });
  });
}

function renderGrid() {
  const filtered = getFilteredPublications();
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const grid = document.getElementById('publications-page-grid');
  grid.innerHTML = visible.map(renderPublicationCard).join('');

  const sentinel = document.getElementById('publications-page-load-more');

  if (observer) {
    observer.disconnect();
    observer = null;
  }

  if (!hasMore) {
    sentinel.hidden = true;
    return;
  }

  sentinel.hidden = false;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        visibleCount += PAGE_SIZE;
        renderGrid();
      }
    },
    { rootMargin: '400px' },
  );

  observer.observe(sentinel);
}

await initShell({ topbarClass: 'energy-topbar' });
renderFilters();
renderGrid();

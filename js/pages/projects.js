import { initShell } from '../app.js';
import { projectTagLabels, projects } from '../data/projects.js';
import { getArticle } from '../data/articles.js';

const filterItems = [
  { key: 'wszystkie', label: 'Wszystkie' },
  { key: 'cyfryzacja', label: projectTagLabels.cyfryzacja },
  { key: 'energetyka', label: projectTagLabels.energetyka },
  { key: 'rozwoj-lokalny', label: projectTagLabels['rozwoj-lokalny'] },
];

let activeFilter = 'wszystkie';

function renderFilters() {
  const filtersEl = document.getElementById('projects-page-filters');

  filtersEl.innerHTML = filterItems
    .map((item) => {
      const isActive = activeFilter === item.key;

      return `
        <button
          type="button"
          class="projects-page-filter is-${item.key} ${isActive ? 'is-active' : ''}"
          data-filter="${item.key}"
          role="tab"
          aria-selected="${isActive}"
        >
          ${item.label}
        </button>
      `;
    })
    .join('');

  filtersEl.querySelectorAll('.projects-page-filter').forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderGrid();
    });
  });
}

function projectCard(project) {
  const localArticle = getArticle('projekt', project.id);
  const href = localArticle ? `/nasze-projekty/${project.id}.html` : project.url;

  return `
    <a
      class="projects-page-card is-${project.tag}"
      href="${href}"
      ${localArticle ? '' : 'target="_blank" rel="noopener noreferrer"'}
    >
      <div class="projects-page-card-image">
        <img src="${project.image}" alt="" aria-hidden="true" />
      </div>

      <div class="projects-page-card-body">
        <p class="projects-page-card-tag">${projectTagLabels[project.tag]}</p>
        <h3>${project.title}</h3>
        <p class="projects-page-card-description">${project.description}</p>
        <span class="projects-page-card-link">
          więcej <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  `;
}

function renderGrid() {
  const gridEl = document.getElementById('projects-page-grid');
  const filteredProjects =
    activeFilter === 'wszystkie' ? projects : projects.filter((project) => project.tag === activeFilter);

  gridEl.innerHTML = filteredProjects.map(projectCard).join('');
}

await initShell({ topbarClass: 'energy-topbar' });
renderFilters();
renderGrid();

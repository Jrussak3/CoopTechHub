import { initShell, initPublicationsCarousel } from '../app.js';
import { blogPosts } from '../data/posts.js';
import { logoRows } from '../data/logos.js';
import { getFeaturedPublications, getHighlightedPublications, publicationTagLabels } from '../data/publications.js';

function renderNews() {
  const grid = document.getElementById('news-grid');
  grid.innerHTML = blogPosts
    .slice(0, 6)
    .map(
      (post) => `
        <a class="news-card" href="${post.url}" target="_blank" rel="noopener noreferrer">
          <h3>${post.title}</h3>
          <p class="news-description">${post.description}</p>
          <img class="news-arrow" src="/assets/arrow_right_bottom.svg" alt="" aria-hidden="true" />
        </a>
      `,
    )
    .join('');
}

function renderLogos() {
  const section = document.getElementById('logos-section');
  section.innerHTML = logoRows
    .map(
      (row, rowIndex) => `
        <div class="logos-row">
          <div class="logos-track" style="--duration: ${18 + rowIndex * 3}s">
            ${['a', 'b', 'c', 'd']
              .map(
                (copy) => `
                  <div class="logos-group">
                    ${row
                      .map(
                        (logo) => `
                          <div class="logo-pill">
                            <img src="${logo.src}" alt="${logo.alt}" />
                          </div>
                        `,
                      )
                      .join('')}
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      `,
    )
    .join('');
}

function renderPublications() {
  const featured = getFeaturedPublications();
  const highlighted = getHighlightedPublications();

  const track = document.getElementById('publications-track');
  track.innerHTML = featured
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
              <img class="publication-divider" src="https://www.figma.com/api/mcp/asset/8780fb60-1fa5-4e31-aa21-97cdb018e594" alt="" aria-hidden="true" />
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

  const highlights = document.getElementById('publications-highlights');
  highlights.innerHTML = highlighted
    .map(
      (publication) => `
        <a class="publication-highlight-card" href="/publikacje/${publication.id}.html">
          <p class="publication-highlight-category">${publicationTagLabels[publication.tag]}</p>
          <h3>${publication.title}</h3>
          <p class="publication-highlight-description">${publication.description}</p>
          <img class="publication-highlight-arrow" src="/assets/arrow_right_bottom.svg" alt="" aria-hidden="true" />
        </a>
      `,
    )
    .join('');

  initPublicationsCarousel(document.getElementById('publications-carousel'));
}

await initShell();
renderNews();
renderLogos();
renderPublications();

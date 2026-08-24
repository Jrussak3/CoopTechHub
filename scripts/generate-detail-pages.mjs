import { writeFileSync } from 'node:fs';
import { articles, articleCategoryLabels, articleCategoryListPath } from '../js/data/articles.js';
import { publications, publicationTagLabels } from '../js/data/publications.js';

const routeToFile = {
  '/': '/',
  '/nasze-projekty': '/nasze-projekty.html',
  '/blog': '/blog.html',
  '/publikacje': '/publikacje.html',
};

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderInline(text) {
  return text
    .split('\n')
    .map((line) => escapeHtml(line).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'))
    .join('<br>');
}

function renderBlock(block) {
  switch (block.kind) {
    case 'heading':
      return `<h3>${escapeHtml(block.text)}</h3>`;
    case 'paragraph':
      return `<p class="${block.lead ? 'article-lead' : ''}">${renderInline(block.text)}</p>`;
    case 'image':
      return `<div class="article-image"><img src="${block.src}" alt="${escapeHtml(block.alt)}" loading="lazy" /></div>`;
    case 'split':
      return `
        <div class="article-split">
          <div class="article-split-text">
            ${block.paragraphs.map((paragraph) => `<p>${renderInline(paragraph)}</p>`).join('\n')}
          </div>
          <div class="article-split-image">
            <img src="${block.image.src}" alt="${escapeHtml(block.image.alt)}" loading="lazy" />
          </div>
        </div>
      `;
    default:
      return '';
  }
}

function page({ title, description, backLinkHref, categoryLabel, heroKicker, heroTitle, bodyHtml }) {
  return `<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} — Centrum Technologii Spółdzielczych</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/styles.css" />
    <link rel="stylesheet" href="/css/subpage-shared.css" />
    <link rel="stylesheet" href="/css/article-detail-page.css" />
  </head>
  <body>
    <div class="article-page page-shell">
      <div data-include="/partials/header.html"></div>

      <main>
        <section class="article-hero">
          <div class="article-hero-wrapper">
            <a class="article-back-link" href="${backLinkHref}">← Wróć do listy</a>
            <p class="article-category-badge">${escapeHtml(categoryLabel)}</p>
            <h1>
              ${heroKicker ? `<span class="article-hero-kicker">${escapeHtml(heroKicker)}</span>` : ''}
              <span class="article-hero-title">${escapeHtml(heroTitle)}</span>
            </h1>
          </div>
        </section>

        <article class="article-body">
          <div class="article-body-wrapper">
            ${bodyHtml}
          </div>
        </article>
      </main>

      <div data-include="/partials/footer.html"></div>
    </div>

    <script type="module" src="/js/pages/detail.js"></script>
  </body>
</html>
`;
}

let projectCount = 0;
for (const article of articles) {
  const listPath = routeToFile[articleCategoryListPath[article.category]] ?? '/nasze-projekty.html';
  const bodyHtml = article.blocks.map(renderBlock).join('\n');

  const html = page({
    title: article.title,
    description: article.title,
    backLinkHref: listPath,
    categoryLabel: articleCategoryLabels[article.category],
    heroKicker: article.kicker,
    heroTitle: article.title,
    bodyHtml,
  });

  writeFileSync(new URL(`../nasze-projekty/${article.slug}.html`, import.meta.url), html);
  projectCount += 1;
}

let publicationCount = 0;
for (const publication of publications) {
  const bodyHtml = `
    <p class="article-lead">${escapeHtml(publication.authors.join(', '))} · ${escapeHtml(publication.date)}</p>
    ${
      publication.thumbnailUrl
        ? `<div class="article-image"><img src="${publication.thumbnailUrl}" alt="${escapeHtml(publication.title)}" loading="lazy" /></div>`
        : ''
    }
    <p>${escapeHtml(publication.description)}</p>
    <a class="primary-button" href="${publication.attachment.url}" target="_blank" rel="noopener noreferrer">
      ${escapeHtml(publication.attachment.label)}
    </a>
  `;

  const html = page({
    title: publication.title,
    description: publication.description,
    backLinkHref: '/publikacje.html',
    categoryLabel: publicationTagLabels[publication.tag],
    heroKicker: '',
    heroTitle: publication.title,
    bodyHtml,
  });

  writeFileSync(new URL(`../publikacje/${publication.id}.html`, import.meta.url), html);
  publicationCount += 1;
}

console.log(`Generated ${projectCount} project article pages and ${publicationCount} publication pages.`);

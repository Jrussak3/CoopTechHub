import { initShell } from '../app.js';
import { blogPosts, featuredPost } from '../data/posts.js';

const PAGE_SIZE = 9;

let visibleCount = PAGE_SIZE;
let observer = null;

function renderFeaturedPost() {
  const wrapper = document.getElementById('blog-featured-post');
  wrapper.innerHTML = `
    <p class="blog-page-hero-eyebrow">Wyróżniony wpis</p>
    <h1>${featuredPost.title}</h1>
    <p>${featuredPost.description}</p>
    <a class="blog-page-card-link" href="${featuredPost.url}">
      czytaj wpis <span aria-hidden="true">→</span>
    </a>
  `;
}

function renderPostCard(post) {
  return `
    <a class="blog-page-card" href="${post.url}">
      <p class="blog-page-card-date">${post.date}</p>
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <span class="blog-page-card-link">
        czytaj wpis <span aria-hidden="true">→</span>
      </span>
    </a>
  `;
}

function renderPosts() {
  const rest = blogPosts.filter((post) => post.id !== featuredPost.id);
  const visible = rest.slice(0, visibleCount);
  const hasMore = visibleCount < rest.length;

  const grid = document.getElementById('blog-page-grid');
  grid.innerHTML = visible.map(renderPostCard).join('');

  const sentinel = document.getElementById('blog-page-load-more');

  if (observer) {
    observer.disconnect();
    observer = null;
  }

  if (!sentinel) {
    return;
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
        renderPosts();
      }
    },
    { rootMargin: '400px' },
  );

  observer.observe(sentinel);
}

await initShell({ topbarClass: 'energy-topbar' });
renderFeaturedPost();
renderPosts();

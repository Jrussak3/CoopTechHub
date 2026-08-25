import { initShell } from '../app.js';
import { blogPosts, featuredPost } from '../data/posts.js';

function renderFeaturedPost() {
  const wrapper = document.getElementById('blog-featured-post');
  wrapper.innerHTML = `
    <p class="blog-page-hero-eyebrow">Wyróżniony wpis</p>
    <h1>${featuredPost.title}</h1>
    <p>${featuredPost.description}</p>
    <a
      class="blog-page-card-link"
      href="${featuredPost.url}"
      target="_blank"
      rel="noopener noreferrer"
    >
      czytaj wpis <span aria-hidden="true">→</span>
    </a>
  `;
}

function renderPosts() {
  const grid = document.getElementById('blog-page-grid');
  grid.innerHTML = blogPosts
    .map(
      (post) => `
        <a class="blog-page-card" href="${post.url}" target="_blank" rel="noopener noreferrer">
          <p class="blog-page-card-date">${post.date}</p>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <span class="blog-page-card-link">
            czytaj wpis <span aria-hidden="true">→</span>
          </span>
        </a>
      `,
    )
    .join('');
}

await initShell({ topbarClass: 'energy-topbar' });
renderFeaturedPost();
renderPosts();

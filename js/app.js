async function includePartials() {
  const targets = document.querySelectorAll('[data-include]');
  await Promise.all(
    Array.from(targets).map(async (el) => {
      const src = el.getAttribute('data-include');
      const response = await fetch(src);
      el.innerHTML = await response.text();
    }),
  );
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const overlay = document.getElementById('menu-overlay');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu || !overlay) {
    return;
  }

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    overlay.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  close?.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', () => setOpen(false));
  menu.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

function initScrollReveal() {
  const segments = Array.from(document.querySelectorAll('.segment-reveal'));

  if (!segments.length || typeof IntersectionObserver === 'undefined') {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  let initialized = false;

  const setupRevealAfterScroll = () => {
    if (initialized) {
      return;
    }

    if (window.scrollY < 8) {
      return;
    }

    initialized = true;
    window.removeEventListener('scroll', setupRevealAfterScroll);

    const revealCutoff = window.innerHeight * 0.9;

    segments.forEach((segment) => {
      const rect = segment.getBoundingClientRect();

      if (rect.top <= revealCutoff) {
        segment.classList.add('is-visible');
        return;
      }

      segment.classList.add('segment-hidden');
      observer.observe(segment);
    });
  };

  window.addEventListener('scroll', setupRevealAfterScroll, { passive: true });
}

function stripHashFromUrl() {
  if (!window.location.hash) {
    return;
  }

  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, '', cleanUrl);
  window.scrollTo(0, 0);
}

export function initPublicationsCarousel(root) {
  const track = root.querySelector('.publications-track');
  const slides = Array.from(root.querySelectorAll('.publication-slide'));
  const prevButton = root.querySelector('.carousel-arrow[data-direction="prev"]');
  const nextButton = root.querySelector('.carousel-arrow[data-direction="next"]');

  if (!track || !slides.length || !prevButton || !nextButton) {
    return;
  }

  let active = 0;

  const render = () => {
    track.style.transform = `translateX(-${active * 100}%)`;
    prevButton.disabled = active === 0;
    nextButton.disabled = active === slides.length - 1;
  };

  prevButton.addEventListener('click', () => {
    active = Math.max(0, active - 1);
    render();
  });

  nextButton.addEventListener('click', () => {
    active = Math.min(slides.length - 1, active + 1);
    render();
  });

  window.setInterval(() => {
    if (active === slides.length - 1) {
      return;
    }

    active += 1;
    render();
  }, 5000);

  render();
}

export async function initShell({ topbarClass } = {}) {
  await includePartials();

  if (topbarClass) {
    document.querySelector('.topbar')?.classList.add(topbarClass);
  }

  initMobileMenu();
  stripHashFromUrl();
  initScrollReveal();
}

// Age of Humanoids — main.js

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? '✕' : '☰';
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) {
      nav.classList.remove('open');
      toggle.textContent = '☰';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Mark current nav link active
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    const href = a.getAttribute('href') || '';
    if (
      (path.endsWith('index.html') || path === '/' || path.endsWith('/ageofhumanoids/')) && href.includes('index') ||
      path.endsWith('about.html') && href.includes('about') ||
      path.includes('/articles/') && href.includes('articles')
    ) {
      a.classList.add('active');
    }
  });
})();

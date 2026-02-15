/**
 * Health & Food — Landing page
 * Accordéons et interactions
 */

document.addEventListener('DOMContentLoaded', function () {
  // Menu hamburger (mobile)
  const header = document.querySelector('.header');
  const navToggle = document.getElementById('nav-toggle-btn');
  const nav = document.getElementById('nav-menu');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Fermer le menu au clic sur un lien (ancres) pour une meilleure UX mobile
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });
  }

  // Prévention ~ nutrition : dévoiler le détail au clic (mobile / tactile)
  const preventionItems = document.querySelectorAll('.prevention-item[data-prevention]');
  preventionItems.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('prevention-item-open');
    });
  });

  // Accordéons
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach(function (accordion) {
    const trigger = accordion.querySelector('.accordion-trigger');
    const panel = accordion.querySelector('.accordion-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', function () {
      const isOpen = accordion.hasAttribute('data-open');

      // Fermer les autres
      accordions.forEach(function (other) {
        if (other !== accordion) {
          other.removeAttribute('data-open');
          const otherTrigger = other.querySelector('.accordion-trigger');
          const otherPanel = other.querySelector('.accordion-panel');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      if (isOpen) {
        accordion.removeAttribute('data-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        accordion.setAttribute('data-open', '');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Réajuster hauteur des accordéons ouverts au redimensionnement
  window.addEventListener('resize', function () {
    accordions.forEach(function (accordion) {
      if (!accordion.hasAttribute('data-open')) return;
      const panel = accordion.querySelector('.accordion-panel');
      if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
});

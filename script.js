'use strict';

/* ═══════════════════════════════════════
   1. NAV STICKY
═══════════════════════════════════════ */
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ═══════════════════════════════════════
   2. MENU MOBILE
═══════════════════════════════════════ */
const hamburger      = document.getElementById('hamburger');
const mobileOverlay  = document.getElementById('mobile-overlay');
const mobileClose    = document.getElementById('mobile-close');

function openMenu() {
  if (!nav || !hamburger || !mobileOverlay) return;
  nav.classList.add('nav--open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  if (!nav || !hamburger || !mobileOverlay) return;
  nav.classList.remove('nav--open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', openMenu);
}

if (mobileClose) {
  mobileClose.addEventListener('click', closeMenu);
}

if (mobileOverlay) {
  // Close on link click
  mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  // Close on backdrop click
  mobileOverlay.addEventListener('click', e => {
    if (e.target === mobileOverlay) closeMenu();
  });
}

/* ═══════════════════════════════════════
   3. VALIDATION FORMULAIRE
═══════════════════════════════════════ */
const devisForm = document.getElementById('devis-form');

if (devisForm) {
  const requiredFields = [
    { id: 'field-nom',          name: 'nom' },
    { id: 'field-organisation', name: 'organisation' },
    { id: 'field-email',        name: 'email' },
    { id: 'field-technique',    name: 'technique' },
    { id: 'field-quantite',     name: 'quantite' },
    { id: 'field-description',  name: 'description' },
    { id: 'field-rgpd',         name: 'rgpd' },
  ];

  devisForm.addEventListener('submit', e => {
    let isValid = true;

    requiredFields.forEach(({ id, name }) => {
      const wrapper = document.getElementById(id);
      if (!wrapper) return;
      const input = wrapper.querySelector(`[name="${name}"]`);
      if (!input) return;

      const invalid = input.type === 'checkbox' ? !input.checked : !input.value.trim();
      if (invalid) {
        wrapper.classList.add('field--error');
        isValid = false;
      } else {
        wrapper.classList.remove('field--error');
      }
    });

    if (!isValid) {
      e.preventDefault();
      const firstError = devisForm.querySelector('.field--error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  // Clear error state on input
  devisForm.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const wrapper = input.closest('.form-field');
      if (wrapper && input.value.trim()) {
        wrapper.classList.remove('field--error');
      }
    });
    input.addEventListener('change', () => {
      const wrapper = input.closest('.form-field');
      if (wrapper && input.value.trim()) {
        wrapper.classList.remove('field--error');
      }
    });
  });
}

/* Select placeholder color via JS class */
document.querySelectorAll('.devis-form select').forEach(select => {
  const update = () => {
    select.classList.toggle('select--placeholder', select.value === '');
  };
  update();
  select.addEventListener('change', update);
});

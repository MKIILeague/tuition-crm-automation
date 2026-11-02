// The HTML navigation is usable on its own. This adds a compact mobile menu.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuToggle && navigation) {
  document.documentElement.classList.add('menu-ready');
  menuToggle.hidden = false;

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuToggle.querySelector('.menu-label').textContent = 'Menu';
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    menuToggle.querySelector('.menu-label').textContent = isOpen ? 'Menu' : 'Close';
  });

  // Close after choosing a link, so the menu does not cover the section.
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
      closeMenu();
    }
  });

  // Reset the menu if the visitor switches back to a wide layout.
  const wideScreen = window.matchMedia('(min-width: 801px)');
  wideScreen.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
}

// Keep the footer year current without editing the HTML each January.
const yearLabel = document.querySelector('#current-year');
if (yearLabel) yearLabel.textContent = new Date().getFullYear();

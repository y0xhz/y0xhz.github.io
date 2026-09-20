(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const menu = document.querySelector('.more-nav');

  function updateThemeControl() {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    document.querySelector('meta[name="theme-color"]').content = dark ? '#191919' : '#f5f2eb';
  }

  if (toggle) {
    toggle.hidden = false;
    updateThemeControl();
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (error) { /* Theme works without storage. */ }
      updateThemeControl();
    });
  }

  if (menu) {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target)) menu.open = false;
    });
    menu.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!menu.contains(document.activeElement)) menu.open = false;
      });
    });
  }
})();

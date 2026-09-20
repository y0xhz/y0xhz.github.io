(() => {
  const root = document.documentElement;
  const picker = document.querySelector('.theme-picker');
  const menu = document.querySelector('.more-nav');
  const colors = { light: '#f5f2eb', dark: '#191919', retro: '#11170f' };

  function updateThemeControl() {
    const theme = Object.hasOwn(colors, root.dataset.theme) ? root.dataset.theme : 'light';
    root.dataset.theme = theme;
    picker.querySelectorAll('[data-theme-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    });
    document.querySelector('meta[name="theme-color"]').content = colors[theme];
  }

  if (picker) {
    picker.hidden = false;
    updateThemeControl();
    picker.querySelectorAll('[data-theme-choice]').forEach(button => {
      button.addEventListener('click', () => {
        root.dataset.theme = button.dataset.themeChoice;
        try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch (error) { /* Theme works without storage. */ }
        updateThemeControl();
      });
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

import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

// Run against "bundle exec jekyll serve --port 4173".
const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const paths = ['/', '/about', '/projects', '/ctf-writeups', '/red-team-arsenal',
  '/ai-skills', '/blog', '/certifications', '/speaking', '/contact'];
const widths = [320, 375, 768, 1024, 1440];
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined
});
const errors = [];
const destinations = new Set();
await mkdir('artifacts', { recursive: true });

try {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  page.on('pageerror', error => errors.push(error.message));

  for (const theme of ['light', 'dark', 'retro']) {
    await page.goto(base);
    await page.evaluate(theme => localStorage.setItem('portfolio-theme', theme), theme);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      for (const path of paths) {
        const response = await page.goto(base + path);
        assert.equal(response.status(), 200, path);
        await page.evaluate(() => document.fonts.ready);
        if (theme === 'retro') {
          assert.ok(await page.evaluate(() => [...document.fonts].some(font => font.family === 'Silkscreen' && font.status === 'loaded')), 'Retro pixel font failed to load');
        }
        if (path === '/') {
          for (const block of await page.locator('.arcade-only').all()) {
            assert.equal(await block.isVisible(), theme === 'retro', 'Arcade content must follow the selected theme');
          }
        }
        assert.equal(await page.locator('h1').count(), 1, path + ' needs one h1');
        assert.equal(await page.locator('nav [aria-current="page"]').count(), 1, path + ' active navigation');
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
        assert.equal(overflow, false, theme + ' ' + path + ' overflows at ' + width);
        assert.equal(await page.locator('.theme-option[aria-pressed="true"]').count(), 1);
        assert.equal(await page.locator('.theme-option[aria-pressed="true"]').getAttribute('data-theme-choice'), theme);
        assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
        const links = await page.locator('a[href]').evaluateAll(nodes =>
          nodes.map(node => node.href).filter(href => href.startsWith(location.origin)));
        links.forEach(link => destinations.add(link));

        if (width === 375 || width === 1440) {
          const result = await new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
          assert.deepEqual(result.violations.map(item => ({
            id: item.id, impact: item.impact, nodes: item.nodes.map(node => node.target)
          })), [], theme + ' ' + path + ' accessibility at ' + width);
        }
        if (path === '/' && (width === 375 || width === 1440)) {
          await page.screenshot({ path: 'artifacts/home-' + theme + '-' + width + '.png', fullPage: true });
        }
        if (width === 1440 && theme === 'light' && ['/about', '/projects', '/red-team-arsenal'].includes(path)) {
          await page.screenshot({ path: 'artifacts/' + path.slice(1) + '.png', fullPage: true });
        }
      }
      console.log('PASS ' + theme + ' / ' + width + 'px / all 10 pages');
    }
  }

  // Resolve every internal link and fragment, including links inside the closed menu.
  for (const href of destinations) {
    const url = new URL(href);
    const response = await page.goto(url.origin + url.pathname);
    assert.equal(response.status(), 200, 'Broken link: ' + href);
    if (url.hash) {
      const found = await page.evaluate(id => Boolean(document.getElementById(id)), decodeURIComponent(url.hash.slice(1)));
      assert.ok(found, 'Missing anchor: ' + href);
    }
  }
  console.log('PASS ' + destinations.size + ' internal destinations and anchors');

  await page.goto(base);
  await page.setViewportSize({ width: 375, height: 812 });
  const summary = page.locator('.more-nav summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('.more-nav').getAttribute('open'), '');
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Red team arsenal');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.more-nav').getAttribute('open'), null);
  assert.ok(await summary.evaluate(node => node === document.activeElement));
  await summary.click();
  await page.mouse.click(5, 200);
  assert.equal(await page.locator('.more-nav').getAttribute('open'), null);
  await summary.click();
  await page.locator('.more-links a').last().focus();
  await page.keyboard.press('Tab');
  await page.waitForFunction(() => !document.querySelector('.more-nav').open);

  for (const theme of ['light', 'dark', 'retro']) {
    const choice = page.locator('[data-theme-choice="' + theme + '"]');
    await choice.focus();
    await page.keyboard.press('Space');
    assert.equal(await choice.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
    await page.reload();
    assert.equal(await choice.getAttribute('aria-pressed'), 'true');
    await page.goto(base + '/projects');
    assert.equal(await choice.getAttribute('aria-pressed'), 'true');
    const themeColor = await page.locator('meta[name="theme-color"]').getAttribute('content');
    assert.equal(themeColor, { light: '#f5f2eb', dark: '#191919', retro: '#171329' }[theme]);
  }
  console.log('PASS keyboard navigation, dismissal, and persistence of all three themes');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.text-link').first().evaluate(node => getComputedStyle(node).transitionDuration), '0s');
  await page.goto(base);
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').innerText(), 'Skip to content');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');
  console.log('PASS reduced motion and skip link');

  const blocked = await browser.newContext();
  await blocked.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  });
  const blockedPage = await blocked.newPage();
  blockedPage.on('pageerror', error => errors.push(error.message));
  await blockedPage.goto(base);
  for (const theme of ['retro', 'dark', 'light']) {
    await blockedPage.locator('[data-theme-choice="' + theme + '"]').click();
    assert.equal(await blockedPage.locator('html').getAttribute('data-theme'), theme);
  }
  await blocked.close();

  for (const value of ['unknown', '__proto__']) {
    await page.evaluate(value => localStorage.setItem('portfolio-theme', value), value);
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
    assert.equal(await page.locator('[data-theme-choice="light"]').getAttribute('aria-pressed'), 'true');
  }
  console.log('PASS invalid saved preferences fall back to Light');

  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const noJsPage = await noJs.newPage();
  await noJsPage.goto(base);
  assert.equal(await noJsPage.locator('.theme-picker').isVisible(), false);
  await noJsPage.locator('.more-nav summary').click();
  await noJsPage.getByRole('link', { name: 'Certifications', exact: true }).click();
  assert.equal(await noJsPage.locator('h1').innerText(), 'Study & certifications.');
  await noJs.close();
  assert.deepEqual(errors, [], 'Browser errors');
  console.log('PASS blocked storage, JavaScript-disabled navigation, and no browser errors');
} finally {
  await browser.close();
}

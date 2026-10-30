describe('Theme Switcher', () => {
  let addEventListenerSpy;
  let matchMediaMock;

  beforeEach(() => {
    // Clear DOM and LocalStorage
    document.documentElement.className = '';
    document.body.innerHTML = `
      <div class="themeswitch"></div>
    `;
    localStorage.clear();

    // Mock matchMedia
    matchMediaMock = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    });
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('sets light theme by default if no stored theme and no prefers-color-scheme', () => {
    require('./anatole-theme-switcher.js');
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('sets dark theme if stored theme is dark', () => {
    localStorage.setItem('theme', 'dark');
    require('./anatole-theme-switcher.js');
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  test('sets light theme if stored theme is light', () => {
    localStorage.setItem('theme', 'light');
    require('./anatole-theme-switcher.js');
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('sets dark theme if prefers-color-scheme is dark and no stored theme', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    require('./anatole-theme-switcher.js');
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  test('toggles theme when switcher is clicked', () => {
    require('./anatole-theme-switcher.js');

    // Initial theme should be light
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);

    // Dispatch DOMContentLoaded to attach the click listener
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const themeSwitcher = document.querySelector('.themeswitch');

    // Click -> should become dark
    themeSwitcher.dispatchEvent(new Event('click'));
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Click -> should become light
    themeSwitcher.dispatchEvent(new Event('click'));
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('updates theme when prefers-color-scheme changes', () => {
    let changeListener = null;

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn((event, callback) => {
        if (event === 'change') changeListener = callback;
      }),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    require('./anatole-theme-switcher.js');

    // Initially light
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);

    // Simulate OS changing to dark mode
    changeListener({ matches: true });
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Simulate OS changing to light mode
    changeListener({ matches: false });
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
describe('Theme Switcher - edge cases', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    document.body.innerHTML = '<div class="themeswitch"></div>';
    localStorage.clear();
  });

  afterEach(() => {
    jest.resetModules();
  });

  test('toggles to light theme when stored theme is invalid/unknown', () => {
    localStorage.setItem('theme', 'unknown-theme');
    require('./anatole-theme-switcher.js');

    document.dispatchEvent(new Event('DOMContentLoaded'));
    const themeSwitcher = document.querySelector('.themeswitch');

    // Initial load will actually just do nothing special for invalid theme (falls back to light in original setup or stays as is depending on logic),
    // but when we click, it should hit the `default` case and call `setLightTheme`.
    themeSwitcher.dispatchEvent(new Event('click'));

    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});

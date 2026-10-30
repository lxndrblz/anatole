/**
 * @jest-environment jsdom
 */

describe('theme switcher', () => {
  beforeEach(() => {
    document.documentElement.className = '';
    document.body.innerHTML = '<div class="themeswitch"></div>';

    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const localStorageMock = (function() {
      let store = {};
      return {
        getItem(key) { return store[key] || null; },
        setItem(key, value) { store[key] = value.toString(); },
        clear() { store = {}; }
      };
    })();
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true
    });
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('should toggle theme on click', () => {
    require('./anatole-theme-switcher.js');

    const event = document.createEvent('Event');
    event.initEvent('DOMContentLoaded', true, true);
    window.document.dispatchEvent(event);

    const themeSwitcher = document.querySelector('.themeswitch');

    themeSwitcher.dispatchEvent(new Event('click'));
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);

    themeSwitcher.dispatchEvent(new Event('click'));
    expect(window.localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('theme--light')).toBe(true);
  });
});

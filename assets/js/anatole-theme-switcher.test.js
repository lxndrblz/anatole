const fs = require('fs');
const path = require('path');

describe('setThemeStyle', () => {
  let setThemeStyle;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';

    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const jsCode = fs.readFileSync(path.resolve(__dirname, 'anatole-theme-switcher.js'), 'utf8');

    // Evaluate the code and capture `setThemeStyle` by returning it from a function context
    const init = new Function(
      `
      ${jsCode}
      return setThemeStyle;
      `
    );

    setThemeStyle = init();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('sets the theme in localStorage and adds the class to document.documentElement', () => {
    setThemeStyle('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
  });

  it('removes the previous theme before adding the new one', () => {
    document.documentElement.classList.add('theme--light');
    setThemeStyle('dark');
    expect(document.documentElement.classList.contains('theme--light')).toBe(false);
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
  });
});

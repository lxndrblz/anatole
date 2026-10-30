/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('anatole-theme-switcher', () => {
  beforeAll(() => {
    const scriptPath = path.resolve(__dirname, '../assets/js/anatole-theme-switcher.js');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');

    // Mock matchMedia
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

    // Evaluate the script and expose internal functions to window for testing
    eval(scriptContent + '\nwindow.setThemeStyle = setThemeStyle;');
  });

  beforeEach(() => {
    document.documentElement.className = '';
    localStorage.clear();
  });

  test('handles missing previous theme class correctly', () => {
    document.documentElement.className = 'non-theme-class';
    window.setThemeStyle('dark');

    // The new theme should be added
    expect(document.documentElement.classList.contains('theme--dark')).toBe(true);
    // Other classes should remain
    expect(document.documentElement.classList.contains('non-theme-class')).toBe(true);
  });
});

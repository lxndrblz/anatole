require('./anatole-header.js');

describe('anatole-header', () => {
  let nav;
  let burger1;
  let burger2;

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <nav class="navbar"></nav>
      <div class="navbar-burger"></div>
      <div class="navbar-burger"></div>
    `;

    nav = document.querySelector('nav');
    const burgers = document.querySelectorAll('.navbar-burger');
    burger1 = burgers[0];
    burger2 = burgers[1];

    // Dispatch DOMContentLoaded to trigger the script
    document.dispatchEvent(new Event('DOMContentLoaded'));
  });

  afterEach(() => {
    // Clean up
    document.body.innerHTML = '';
    jest.resetModules();
  });

  test('clicking a navbar burger toggles nav--active class on the nav element and the clicked burger', () => {
    // Initial state
    expect(nav.classList.contains('nav--active')).toBeFalsy();
    expect(burger1.classList.contains('nav--active')).toBeFalsy();

    // Click first burger
    burger1.click();

    // Check state after click
    expect(nav.classList.contains('nav--active')).toBeTruthy();
    expect(burger1.classList.contains('nav--active')).toBeTruthy();

    // Click first burger again
    burger1.click();

    // Check state after second click
    expect(nav.classList.contains('nav--active')).toBeFalsy();
    expect(burger1.classList.contains('nav--active')).toBeFalsy();
  });

  test('multiple burgers handled correctly', () => {
    // Initial state
    expect(nav.classList.contains('nav--active')).toBeFalsy();
    expect(burger1.classList.contains('nav--active')).toBeFalsy();
    expect(burger2.classList.contains('nav--active')).toBeFalsy();

    // Click second burger
    burger2.click();

    // Check state after click
    expect(nav.classList.contains('nav--active')).toBeTruthy();
    expect(burger2.classList.contains('nav--active')).toBeTruthy();
    expect(burger1.classList.contains('nav--active')).toBeFalsy(); // Should not affect the other burger

    // Click first burger
    burger1.click();

    // Check state after click
    // Both burgers clicked once so both should be active.
    // Nav toggled twice so it should be inactive.
    expect(nav.classList.contains('nav--active')).toBeFalsy();
    expect(burger2.classList.contains('nav--active')).toBeTruthy();
    expect(burger1.classList.contains('nav--active')).toBeTruthy();
  });
});

describe('anatole-header with no burgers', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav class="navbar"></nav>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.resetModules();
  });

  test('when no navbar burgers exist, it should not throw errors and exit gracefully', () => {
    expect(() => {
      // Re-require to ensure the file runs again in the new context.
      // Need to isolate modules for this.
      jest.isolateModules(() => {
         require('./anatole-header.js');
         document.dispatchEvent(new Event('DOMContentLoaded'));
      });
    }).not.toThrow();
  });
});

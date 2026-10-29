/**
 * @jest-environment jsdom
 */

// Load the script once
require('./anatole-header.js');

describe('anatole-header.js', () => {
  beforeEach(() => {
    // Clear DOM before each test
    document.body.innerHTML = '';
  });

  it('should handle edge case: no navbar burgers present', () => {
    // Setup empty DOM (no .navbar-burger elements)
    document.body.innerHTML = `
      <nav></nav>
    `;

    // Trigger DOMContentLoaded
    const event = new Event('DOMContentLoaded');

    // It should not throw any errors when executing the listener
    expect(() => {
      document.dispatchEvent(event);
    }).not.toThrow();
  });

  it('should toggle nav--active class when navbar burger is clicked', () => {
    // Setup DOM with navbar burger
    document.body.innerHTML = `
      <nav></nav>
      <div class="navbar-burger"></div>
    `;

    // Trigger DOMContentLoaded
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    const navbarBurger = document.querySelector('.navbar-burger');
    const nav = document.querySelector('nav');

    // Initial state
    expect(navbarBurger.classList.contains('nav--active')).toBeFalsy();
    expect(nav.classList.contains('nav--active')).toBeFalsy();

    // Click to toggle on
    navbarBurger.click();
    expect(navbarBurger.classList.contains('nav--active')).toBeTruthy();
    expect(nav.classList.contains('nav--active')).toBeTruthy();

    // Click to toggle off
    navbarBurger.click();
    expect(navbarBurger.classList.contains('nav--active')).toBeFalsy();
    expect(nav.classList.contains('nav--active')).toBeFalsy();
  });
});

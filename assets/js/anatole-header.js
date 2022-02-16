document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  const nav = document.querySelector('nav');
  if (navbarBurgers.length < 1) return;
  navbarBurgers.forEach((navbarBurger) => {
    navbarBurger.addEventListener('click', () => {
      navbarBurger.classList.toggle('nav--active');
      nav.classList.toggle('nav--active');
    });
  });
});

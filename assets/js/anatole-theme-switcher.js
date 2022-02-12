// initialize default value
function getTheme() {
  return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style) {
  document.documentElement.setAttribute('data-theme', style);
  localStorage.setItem('theme', style);
  setCssClass(style);
}

function init() {
  // initialize default value
  const theme = getTheme();

  // check if a preferred color theme is set for users that have never been to our site
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (theme === null) {
    if (userPrefersDark) {
      setTheme('dark');
    } else if (!document.documentElement.getAttribute('data-theme')) {
      setTheme('light');
    } else {
      setTheme(document.documentElement.getAttribute('data-theme'));
    }
  } else {
    // load a stored theme
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      setCssClass('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setCssClass('dark');
    }
  }
}

function setCssClass(style) {
  var body = document.body;
  if (style === 'light') {
    body.classList.remove('theme--dark');
    body.classList.add('theme--light');
  } else if (style === 'dark') {
    body.classList.remove('theme--light');
    body.classList.add('theme--dark');
  }
}

// switch themes
function switchTheme() {
  const theme = getTheme();
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Manual Switch
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const themeSwitcher = document.querySelector('.themeswitch');
    themeSwitcher.addEventListener('click', switchTheme, false);
  },
  false,
);

// Automatic Switching
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', function () {
  init();
});

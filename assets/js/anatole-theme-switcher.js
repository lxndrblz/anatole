const getStoredThemeStyle = () => localStorage.getItem('theme');

const setThemeClass = (style) => {
  const html = document.documentElement;
  const prevTheme = [...html.classList].find((c) => c.match(/theme--(light|dark)/));
  if (!prevTheme) return;
  html.classList.remove(prevTheme);
  html.classList.add(`theme--${style}`);
};

const setThemeStyle = (style) => {
  localStorage.setItem('theme', style);
  setThemeClass(style);
};

const switchTheme = () => {
  const currThemeStyle = getStoredThemeStyle();
  switch (currThemeStyle) {
    case 'light':
      setThemeStyle('dark');
      break;
    case 'dark':
      setThemeStyle('light');
      break;
    default:
      setThemeStyle('light');
      break;
  }
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const themeSwitcher = document.querySelector('.themeswitch');
    themeSwitcher.addEventListener('click', switchTheme, false);
  },
  false,
);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', switchTheme, false);

const currThemeStyle = getStoredThemeStyle();
if (currThemeStyle) {
  setThemeStyle(currThemeStyle);
} else {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (userPrefersDark) {
    setThemeStyle('dark');
  }
}

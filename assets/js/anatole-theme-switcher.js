const getStoredThemeStyle = () => localStorage.getItem('theme');

const setThemeClass = (style) => {
  const body = document.body;
  const prevTheme = [...body.classList].find((c) => c.match(/theme--(light|dark)/));
  if (!prevTheme) return;
  body.classList.remove(prevTheme);
  body.classList.add(`theme--${style}`);
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

const initTheme = () => {
  const currThemeStyle = getStoredThemeStyle();
  if (currThemeStyle) {
    setThemeStyle(currThemeStyle);
    return;
  }
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!userPrefersDark) return;
  setThemeStyle('dark');
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

document.addEventListener('DOMContentLoaded', () => initTheme());

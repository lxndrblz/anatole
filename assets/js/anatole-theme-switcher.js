// initialize default value
function getTheme() {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style) {
    document.documentElement.setAttribute('data-theme', style);
    localStorage.setItem('theme', style);
}

// Check if a theme was set manually
function getMode()  {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') : null;
}

function setMode(mode)  {
    localStorage.setItem('mode', mode);
}

function init() {
    // initialize default value
    const theme = getTheme();
    const mode = getMode();

    // check if a preferred color theme is set for users that have never been to our site
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (theme === null) {
        if (userPrefersDark) {
            setTheme('dark');
            setMode('auto');
        } else if (userPrefersLight){
            setTheme('light');
            setMode('auto');
        } else if (!document.documentElement.getAttribute('data-theme')) {
            setTheme('light');
        } else {
            setTheme(document.documentElement.getAttribute('data-theme'));
        }
    } else {

        if (mode === 'auto') {
            if (userPrefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else if (userPrefersLight){
                document.documentElement.setAttribute('data-theme', 'light');
            } 
        }
        else {
            // load a user set theme theme
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
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
    setMode('user');
}

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.querySelector('.theme-switch');
    themeSwitcher.addEventListener('click', switchTheme, false);
}, false);

init();

const themeSwitcher = document.querySelector('.theme-switch');

function getTheme(){
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

// switch themes
function switchTheme(e) {
    var theme = getTheme();
    if (theme == 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// initialize default value
var theme = getTheme();
if (theme === null) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}
else {
    // load a stored theme
    if (theme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}


themeSwitcher.addEventListener('click', switchTheme, false);
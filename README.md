# Anatole ![](https://img.shields.io/badge/license-MIT-blue.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/ee7a5df4-b944-4e03-853d-39219c96d484/deploy-status)](https://alexbilz.com/)

Anatole is a beautiful minimalist two-column [hugo](https://gohugo.io/) theme based on farbox-theme-Anatole.

![Screenshot Anatole Theme](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot.png)
![Screenshot Anatole Theme (dark)](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot_dark.png)

## Features
Anatole's aims to be minimalistic and sleek, but still brings some great functionality.

### Features include:

- Profile picture and slogan
- Dark mode
- Navigation items
- Pagination
- 100⁄100 Google Lighthouse score
- Google Analytics (optional)
- Comments powered by Disqus (optional)
- Katex support (optional)
- MIT License
- Fontawesome icons
- Custom CSS (optional)
- Medium like zoom for images
- Compliant to strict CSP
- Uses Hugo pipes to process assets

## Preview the exampleSite
```
git clone https://github.com/lxndrblz/anatole.git anatole
cd anatole/exampleSite
hugo server --themesDir ../..
```

## Quick Start
1. Add the repository into your Hugo Project repository as a submodule: `git submodule add https://github.com/lxndrblz/anatole.git themes/anatole`.
2. Configure your `config.toml`. Feel free to copy the demo `config.toml` and some content from the exampleSite. 
3. Build your site with `hugo serve` and admire the result at `http://localhost:1313/`.

## Update your installation
If you want to get the latest update of the `Anatole` theme please execute this command:
```
git submodule update --remote --merge
```

## Modifying the config.toml
Ìn this section I'll discuss the custom parameters available within the `config.toml`. The complete [sample](https://github.com/lxndrblz/anatole/blob/master/exampleSite/config.toml) can be found in the exampleSite folder. 

### Profile picture and slogan
```toml
[params]
title = "I'm Jane Doe"
author = "Jane Doe"
description = "Call me Jane"
profilePicture = "images/profile.jpg"
```
### Navigation items
Non-content entries can be added right from the `config.toml` file.
```toml
[menu]

  [[menu.main]]
  name = "Home"
  identifier = "home"
  weight = 100
  url = "/"

  [[menu.main]]
  name = "Posts"
  weight = 200
  identifier = "posts"
  url = "/post/"

  [[menu.main]]
  name = "About"
  weight = 300
  identifier = "about"
  url = "/about/"
```
### :100: Google Lighthouse score
The theme is optimized to adhere to the requirements checked for in the Lighthouse Audit. On my [personal site](https://www.alexbilz.com) I was able to reach a perfect 100⁄100 score.
![Google Lighthouse Score](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/lighthouse.png)

### Comments powered by Disqus
No comment section is shown on the `single.html`, unless a disqus code is specified in the `config.toml` file.
```toml
disqusShortname = "XXX"
```
### Google Analytics
To use Google Analytics, a valid tracking code has to be added. If you don't want to load the code, then commend out the parameter.
```toml
googleAnalytics = "UA-123-45"
```

### Beautiful math functions
```toml
## Math settings
[params.math]
enable = false  # options: true, false. Enable math support globally, default: false. You can always enable math on per page.
use = "katex"  # options: "katex", "mathjax". default is "katex".
```

### Custom CSS
You can add your custom CSS files with the `customCss` parameter of the configuration file. Put your files into the `static/css` directory.

```toml
customCss = ["css/custom1.css", "css/custom2.css"]
```

### Content Security Policy
The theme is compliant with most strict CSP policies out of the box. A sample CSP for an Anatole-based site would look something like this:

```
Content-Security-Policy "
  base-uri 'self';
  connect-src 'self';
  default-src 'self';
  frame-ancestors 'none';
  font-src 'self' stackpath.bootstrapcdn.com;
  img-src 'self';
  object-src 'none';
  script-src 'self';
  style-src 'self' stackpath.bootstrapcdn.com;
"
```
If you want to configure the security headers for a site running on Netlify, you want to make sure you create a special `_headers` file in your sites static folder. The content might look like the following:
```
/*
  X-Frame-Options: DENY
  X-Clacks-Overhead: "GNU Terry Pratchett"
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: same-origin
  Content-Security-Policy:  base-uri 'self'; connect-src 'self'; default-src 'self'; frame-ancestors 'none'; font-src 'self' stackpath.bootstrapcdn.com; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' stackpath.bootstrapcdn.com;
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```
### Configurable pagination section
You can configure the pages shown on the front page by altering the `mainSections` parameter:
```toml
[params]
  mainSections = ["post", "docs"]
```
## License

Anatole is licensed under the [MIT license](https://github.com/lxndrblz/anatole/blob/master/LICENSE).

## Maintenance

This theme is maintained by its author [Alexander Bilz](https://github.com/lxndrblz). Please open an issue/pull request if you want to contribute in making this theme better and more feature-complete.

## Special Thanks 🎁

* Go to [Cai Cai](https://github.com/hi-caicai), for the great Anatole Farbox theme that formed the foundation for this theme.
* Go to [Kareya Saleh](https://unsplash.com/photos/tLKOj6cNwe0) for providing the profile picture in the exampleSite.



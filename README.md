# Anatole ![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/ee7a5df4-b944-4e03-853d-39219c96d484/deploy-status)](https://alexbilz.com/)

Anatole is a beautiful minimalist two-column [hugo](https://gohugo.io/) theme based on farbox-theme-Anatole.

![Screenshot Anatole Theme](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot.png)
![Screenshot Anatole Theme (dark)](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot_dark.png)

## Features

Anatole's aims to be minimalistic and sleek, but still brings some great functionality.

### Features include

- Profile picture and slogan
- Dark mode
- Navigation items
- Pagination
- Multilingual
- 100⁄100 Google Lighthouse score
- Google Analytics (optional)
- Comments powered by Disqus (optional)
- Katex support (optional)
- Twitter Cards support
- MIT License
- Fontawesome 5.15.1 icons
- Custom CSS (optional)
- Custom JavaScript (optional)
- Medium like zoom for images
- Compliant to strict CSP
- Syntax highlighting
- Uses Hugo pipes to process assets

## Preview the exampleSite

```shell
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

```shell
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

### Favicon

Add you own favicon in `static/favicons/favicon.ico`.

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

### Prefer dark theme

You can easily enable the dark mode from the `config.toml` all you have to do is to set the parameter `displayMode` to `dark`. If you dont specify any displayMode, then the light version will be loaded.

Please also note that returning visitors will see the theme that was last displayed to them on your site. If your user has his system configured to dark mode, then this will also take presendence over the displayMode set in the `config.toml`.

```toml
[params]
displayMode = "dark"
```

### Disable Animations
You can easily disable the animations from the `config.toml`. All you have to do is to set the parameter `doNotLoadAnimations` to `true`.
```toml
[params]
doNotLoadAnimations = true # Animations are loaded by default
```

### Multilingual support

Anatole supports multilingual page setups. All you need to do is to add the languages to your 'config.toml'. For each Language you can set the custom options like title or description. It's important to include a `LanguageName`, as it will be displayed in the main menu.

```toml
[Languages]
  [Languages.en]
  title = "My blog"
  weight = 1
  LanguageName = "EN"

  [Languages.de]
  title = "Mein blog"
  description = "Ich bin Jane"
  weight = 2
  LanguageName = "DE"
```

There are two ways of translating your content either by adding a suffix in the filename eg. `mypost.de.md` or by setting a contentDir (a certain directory) for each language. [Link to the Hugo documentation](https://gohugo.io/content-management/multilingual/). If you want to use the option with the `contentDir`, you will have to add the `contentDir` parameter for each language:

```toml
[languages]
  [languages.en]
    contentDir = "content/english"
    languageName = "EN"
    weight = 1
```

To make sure your menu is linking to the correct localized content, make sure that you customize the menu items to inlude the language prefix. Your menu might look like the following:

```toml
[[Languages.de.menu.main]]
url    = "/de/"
identifier = "home"
name   = "Startseite"
weight = 100

[[Languages.de.menu.main]]
name = "Beiträge"
weight = 200
identifier = "posts"
url = "/de/post/"

[[Languages.de.menu.main]]
name = "Über"
weight = 300
identifier = "about"
url = "/de/about/"
```

Anatole currently ships with support for some basic languages. Contributions for other language translations are welcome.

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

### Google Site Verification

To use Google Site Verification, add the following line to the `[params]`:

```toml
googleSiteVerify = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
```

Replace the hash with the one Google provided you.

### Beautiful math functions

```toml
## Math settings
[params.math]
enable = false  # options: true, false. Enable math support globally, default: false. You can always enable math on per page.
use = "katex"  # options: "katex", "mathjax". default is "katex".
```

### Twitter Cards support

In order to use the full functionality of Twitter cards, you will have to define a couple of settings in the `config.toml` and the frontmatter of a page.

In the `config.toml` you can configure a site feature image. This image will be displayed, if no image is defined in the frontmatter of a page.

```toml
[params]
  images = ["images/site-feature-image.png"]
```

To define a custom image of a page, you might want to add the following to the frontmatter of a post.

```toml
images = ["post-cover.png"]
```

### Custom CSS

You can add your custom CSS files with the `customCss` parameter of the configuration file. Put your files into the `assets/css` directory.

```toml
customCss = ["css/custom.css", "css/styles.css"]
```

On the user-side it will look like this:

```text
.
└── assets
    └── css
        ├── custom.css
        └── styles.css
```

### Custom JavaScript

You can add your custom JS files with the `customJs` parameter of the configuration file. Put your files into the `assets/js` directory.

```toml
[params]
customJs = ["js/hello.js", "js/world.js"]
```

On the user-side it will look like this:

```text
.
└── assets
    └── js
        ├── hello.js
        └── world.js
```

`hello.js` and `world.js` will be bundled into a `custom.min.js`.

You can also include links to remote javascript files (hosted on CDNs for example). But be aware, that integrity settings and minification won't be applied. Further make sure to adjust your CSP. You can load a remote script like this:

```toml
[params]
customJs = ["http://cdn.exmple.org/fancyscript.js"]
```

Both approaches can even be mixed:

```toml
[params]
customJs = ["https://cdn.exmple.org/fancyscript.js", "js/world.js"]
```

### Content Security Policy

The theme is compliant with most strict CSP policies out of the box. A sample CSP for an Anatole-based site would look something like this:

```text
Content-Security-Policy "
  base-uri 'self';
  connect-src 'self';
  default-src 'self';
  frame-ancestors 'none';
  font-src 'self' cdnjs.cloudflare.com;
  img-src 'self';
  object-src 'none';
  script-src 'self';
  style-src 'self' cdnjs.cloudflare.com;
"
```

If you want to configure the security headers for a site running on Netlify, you want to make sure you create a special `_headers` file in your sites static folder. The content might look like the following:

```text
/*
  X-Frame-Options: DENY
  X-Clacks-Overhead: "GNU Terry Pratchett"
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: same-origin
  Content-Security-Policy:  base-uri 'self'; connect-src 'self'; default-src 'self'; frame-ancestors 'none'; font-src 'self' cdnjs.cloudflare.com; img-src 'self'; object-src 'none'; script-src 'self'; style-src 'self' cdnjs.cloudflare.com;
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Configurable pagination section

You can configure the pages shown on the front page by altering the `mainSections` parameter:

```toml
[params]
  mainSections = ["post", "docs"]
```

### Robots.txt

If you want Hugo to generate a robots.txt, you will have to set the `enableRobotsTXT` in the `config.toml` to `true`. By default a robots.txt, which allows search engine crawlers to access to any page, will be generated. It will look like this:

```text
User-agent: *
```

If certain sites shoud be excluded from being accessed, you might want to setup a custom robots.txt file within your `static` folder of your site.

### Syntax highlighting

This theme has support for either Hugo's lightning fast Chroma code highlighting. See the [Hugo docs](https://gohugo.io/content-management/syntax-highlighting/) for more information.

To enable Chroma, add the following to your site parameters:

```toml
pygmentsCodeFences = true
pygmentsUseClasses = true
```

Then, you can generate a different style by running:

```shell
hugo gen chromastyles --style=monokailight > assets/css/syntax.css
```

If you get any errors, make sure the `assets/css/` directory exists within your sites root folder.
Include the newly generated `syntax.css` like a standard custom css script:

```toml
[params]
customCss = ["css/syntax.css"]
```

## License

Anatole is licensed under the [MIT license](https://github.com/lxndrblz/anatole/blob/master/LICENSE).

## Maintenance

This theme is maintained by its author [Alexander Bilz](https://github.com/lxndrblz). Please open an issue/pull request if you want to contribute in making this theme better and more feature-complete.

## Special Thanks 🎁

- Go to [Cai Cai](https://github.com/hi-caicai), for the great Anatole Farbox theme that formed the foundation for this theme.
- Go to [Kareya Saleh](https://unsplash.com/photos/tLKOj6cNwe0) for providing the profile picture in the exampleSite.

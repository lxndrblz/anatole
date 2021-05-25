# Anatole ![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/ee7a5df4-b944-4e03-853d-39219c96d484/deploy-status)](https://alexbilz.com/)

Anatole is a beautiful minimalist two-column [hugo](https://gohugo.io/) theme based on farbox-theme-Anatole.

![Screenshot Anatole Theme](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot.png)
![Screenshot Anatole Theme (dark)](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot_dark.png)

## Features

Anatole's aims to be minimalistic and sleek but still brings some great functionality.

### Features include

- Profile picture and slogan
- Dark mode
- Navigation items
- Pagination
- Multilingual
- RTL support
- Post Thumbnails (optional)
- 100⁄100 Google Lighthouse score
- Google Analytics (optional)
- Comments powered by Disqus, Commento or Utteranc.es (optional)
- SimpleAnalytics (optional)
- Katex support (optional)
- Formspree Contact Form (optional)
- Twitter Cards support
- Open Graph support
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

Ìn this section, I'll discuss the custom parameters available within the `config.toml`. The complete [sample](https://github.com/lxndrblz/anatole/tree/master/exampleSite/config/_default) can be found in the exampleSite folder.

### Profile picture and slogan

```toml
[params]
title = "I'm Jane Doe"
author = "Jane Doe"
description = "Call me Jane"
profilePicture = "images/profile.jpg"
```

Please note that the title under the `[params]` only adjusts the page title in the sidebar. If you wish to adjust the HTML title (i.e. name of the tab), you will have to adjust the Hugo's title variable, as shown in the `config.toml`.

Please note that the slogan can be multi-lined (note the three quotes at the beginning and end):

```toml
[params]
description = """
Call me Jane
Blogging from Texas
"""
```

### Favicon

Add your favicons to `static/favicons`. Anatole currently employs following favicon files:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (resolution should be 180x180)

### Copyright

By default, the copyright will show the authors name followed by the current year, but you can change this by configuring the `copyright` parameter. If this method is used, the string `{{ YEAR }}` will be replaced with the current year during site generation.

```toml
copyright = "2020-{{ YEAR }}"
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

### Prefer dark theme

You can easily enable the dark mode from the `config.toml` all you have to do is to set the parameter `displayMode` to `dark`. If you don't specify any displayMode, then the light version will be loaded.

Please also note that returning visitors will see the theme that was last displayed to them on your site. If your user has his system configured to dark mode, then this will also take precedence over the `displayMode` set in the `config.toml`.

```toml
[params]
displayMode = "dark"
```

### Disable Theme Switcher

You can easily disable the theme switcher from the `config.toml`. All you have to do is to set the parameter `disableThemeSwitcher` to `true`.

```toml
[params]
disableThemeSwitcher = true # Theme switcher is enabled by default
```

### Disable Animations

You can easily disable the animations from the `config.toml`. All you have to do is to set the parameter `doNotLoadAnimations` to `true`.

```toml
[params]
doNotLoadAnimations = true # Animations are loaded by default
```

### Control the date Format

You can change the default date formating for the `list.html`, the `single.html` and the `index.html`. Simply configure the matching parameters.

```toml
[params]
singleDateFormat = "Mon, Jan 2, 2006"
indexDateFormat = "Mon, Jan 2, 2006"
listDateFormat = "Jan 2"
```

### Changing the sidebar/content ratio

By default, the content fills up 60% of the screen width on devices with a full HD resolution. If you want to change the ratio, adjust the `contentratio` variable. Let's, for example, set the content ratio to 70%:

```toml
[params]
contentratio = 0.7
```

### Read-more Links

You can enable read-more links for truncated posts by setting the `readMore = true`. The length of the preview is controlled by Hugo's `summarylength`. Read-more links are disabled by default.

```toml
[params]
  readMore = true
```

### Have a static page as a home page

If you prefer having a static page as your home page rather than a listing of the latest posts, then make sure you leave the `mainSections` parameter blank:

```toml
[params]
  mainSections = []
```

Put any content into the `_index.md` file located in the content directory. If you want, you can also have some static text and the posts below. In such case, simply keep the `mainSections = ["post"]` and put any static content in the `_index.md`.

### Rename post section

If you want to have a different post section identifier, such as `/blog`, you can specify the section name using `postSectionName`:

```toml
[params]
  postSectionName = "blog"
```

If the parameter is not set, it will default to `post`. Be sure to check the name of the folder containing your post files and change it accordingly in order for links to reflect the new post section name.

### Show full post content on the home page

If you prefer the full content of your posts to appear on the home page rather than a summary of each post, then set the parameter `fullPostContent` to `true`.

```toml
[params]
fullPostContent = true
```

### Multilingual support

Anatole supports multilingual page setups. All you need to do is to add the languages to your 'config.toml'. For each language, you can set the custom options like title or description. It's important to include a `LanguageName`, as it will be displayed in the main menu.

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

There are two ways of translating your content, either by adding a suffix in the filename, eg. `mypost.de.md`, or by setting a contentDir (a certain directory) for each language. [Link to the Hugo documentation](https://gohugo.io/content-management/multilingual/). If you want to use the option with the `contentDir`, you will have to add the `contentDir` parameter for each language:

```toml
[languages]
  [languages.en]
    contentDir = "content/english"
    languageName = "EN"
    weight = 1
```

To make sure your menu is linking to the correct localized content, make sure that you customize the menu items to include the language prefix. Your menu might look like the following:

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

### RTL support

Anatole supports RTL languages and flip the whole theme for that. To enable the RTL-mode for a specific language, it's enough to write the following code in the language params.

```toml
LanguageDirection = "rtl"
```

### :100: Google Lighthouse score

The theme is optimized to adhere to the requirements checked for in the Lighthouse Audit. On my [personal site](https://www.alexbilz.com) I was able to reach a perfect 100⁄100 score.
![Google Lighthouse Score](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/lighthouse.png)

### Comments powered by Disqus

No comment section is shown on the `single.html`, unless a Disqus code is specified in the `config.toml` file.

```toml
disqusShortname = "XXX"
```

### Comments powered by Utteranc.es

No comment section is shown on the `single.html` unless a `repo` is specified in the `config.toml` file. If uncertain how parameter to configure, check out the official [documentation](https://utteranc.es/).

```toml
[params.utterances]
repo = "githubuser/reponame"
issueTerm = "pathname"
theme= "preferred-color-scheme"
# label =
```

Two notes on the security of Utteranc.es

- If you are using a strict CSP, you'll have to add the domain to it.
- The script currently has no built-in integrity check due to limitations of [Utterances](https://github.com/utterance/utterances/issues/40).

### Comments powered by Commento

You can use [Commento](https://commento.io/) as an alternative to Disqus. All you need to do is to configure a `CommentoURL`:

```toml
[params]
CommentoURL = "https://commento.example.com/js/commento.js"
```

### Disabling Comments Per Page

Comments can be disabled per page by setting `disableComments: true` on the pages [Front Matter](https://gohugo.io/content-management/front-matter/)

### Google Analytics

To use Google Analytics, a valid tracking code has to be added. If you don't want to load the code, then commend out the parameter.

```toml
googleAnalytics = "UA-123-45"
```

To use the modern Google Analytics 4, include the following under `[params]`, replacing the id with your own.

```toml
[params]
gtagId = "G-XXXXXXXXXX"
```

### Simple Analytics

To use Simple Analytics, it has to be enabled by setting the parameter to true. If you are using a custom subdomain to evade Adblockers, then specify the URL without a trailing slash.

```toml
[params.simpleAnalytics]
enable = true
# customurl = "https://analytics.example.com"
```

### Google Site Verification

To use Google Site Verification, add the following line to the `[params]`:

```toml
[params]
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

### Formspree Contact Form on the Contact page

Step 1: Configure the `contactFormAction` in the `config.toml`

```toml
[params]
#contactFormAction = "https://formspree.io/f/your-form-hash-here"
```

Step 2: Activate the `contact: true` or `contact=true` in the frontmatter of a page. See `exampleSite/content/contact.html` as an example.

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

### Open Graph Support

The [internal template for Open Graph protocol](https://gohugo.io/templates/internal/#open-graph) uses a mix of configuration variables; settings in `config.toml` and frontmatter of the page. In a nutshell, you will have to configure a taxonomies series.

### Post Thumbnails

Thumbnails can be enabled easily by setting the `thumbnail` parameter in the frontmatter of a post to an image such as `"images/landscape.jpg"`.

```md
+++
...
tags = [
"thumbnail",
]
thumbnail= "images/landscape.jpg"
+++
```

Make sure to put the image in the `static/images/` directory.

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

On the user-side, it will look like this:

```text
.
└── assets
    └── js
        ├── hello.js
        └── world.js
```

`hello.js` and `world.js` will be bundled into a `custom.min.js`.

You can also include links to remote javascript files (hosted on CDNs for example). But be aware that integrity settings and minification won't be applied. Further, make sure to adjust your CSP. You can load a remote script like this:

```toml
[params]
customJs = ["http://cdn.exmple.org/fancyscript.js"]
```

Both approaches can even be mixed:

```toml
[params]
customJs = ["https://cdn.exmple.org/fancyscript.js", "js/world.js"]
```

### Medium Like Zoom

Enabled by default, the medium like zoom for images can be disabled by adding the following config under `[params]`.

```toml
[params]
enableMediumZoom = false
```

### Content Security Policy

The theme is compliant with the most strict CSP policies out of the box. A sample CSP for an Anatole-based site would look something like this:

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

If you want Hugo to generate a robots.txt, you will have to set the `enableRobotsTXT` in the `config.toml` to `true`. By default, a robots.txt, which allows search engine crawlers to access to any page, will be generated. It will look like this:

```text
User-agent: *
```

If certain sites should be excluded from being accessed, you might want to setup a custom robots.txt file within your `static` folder of your site.

### Syntax highlighting

This theme has support for Hugo's lightning-fast Chroma code highlighting. See the [Hugo docs](https://gohugo.io/content-management/syntax-highlighting/) for more information.

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
Include the newly generated `syntax.css` like a standard custom CSS script:

```toml
[params]
customCss = ["css/syntax.css"]
```

### Socials

You can add social media based icon links under your profile picture by using the `socialIcons` parameter.

[Font Awesome](https://fontawesome.com/) is used for the icons.

If you are using brand icons, prefix the icon value with `fab` if you are using a standard icon use `fas` instead.

Ordering in the `config.toml` will determine the display order on the webpage.

#### Sample branded social entry

```toml
[[params.socialIcons]]
icon = "fab fa-linkedin"
title = "Linkedin"
url = "https://de.linkedin.com/"
```

#### Sample standard social entry

```toml
[[params.socialIcons]]
icon = "fas fa-envelope"
title = "e-mail"
url = "mailto:mail@example.com"
```

### RSS

Hugo natively supports RSS. To generate a feed for a given page, append `index.xml` to the page URL.

Note that the RSS feed at the base of your website will include all of the pages on your website. To only include posts in your RSS feed, generate the feed within the `posts/` subdirectory with the URL `posts/index.xml`.

To only generate an RSS feed for your posts, disable the RSS output for the other page types:

```toml
[outputs]
  home = ["HTML"]
  section = ["HTML", "RSS"]
  taxonomy = ["HTML"]
  term = ["HTML"]
```

By default, the RSS feed contains a brief summary of each page. If you prefer to show the entire contents for each page, then use the `rssFullContent` parameter:

```toml
[params]
rssFullContent = true
```

## License

Anatole is licensed under the [MIT license](https://github.com/lxndrblz/anatole/blob/master/LICENSE).

## Maintenance

This theme is maintained by its author [Alexander Bilz](https://github.com/lxndrblz) and with the help from these awesome [contributors](https://github.com/lxndrblz/anatole/graphs/contributors). Please open an issue/pull request if you want to contribute to making this theme better and more feature-complete. For PRs, please make sure that they align with the theme's goals: minimalism, speed and elegance.

## Sponsoring

If you like this theme, give it a star on GitHub, and consider supporting its development:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lxndrblz/)

## Special Thanks 🎁

- Go to [Cai Cai](https://github.com/hi-caicai), for the great Anatole Farbox theme that formed the foundation for this theme.
- Go to [Kareya Saleh](https://unsplash.com/photos/tLKOj6cNwe0) for providing the profile picture in the exampleSite.
- Go to [Ales Krivec](https://unsplash.com/photos/4miBe6zg5r0) for providing the thumbnail picture in the exampleSite post.

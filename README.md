# Anatole Hugo Theme ![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg) [![https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/) [![Netlify Status](https://api.netlify.com/api/v1/badges/1f4f2327-2b3f-428a-8f31-c4f921ebcc44/deploy-status)](https://app.netlify.com/sites/anatole-demo/deploys)

Anatole is a beautiful minimalist two-column [hugo](https://gohugo.io/) theme based on farbox-theme-Anatole.

![Screenshot Anatole Theme](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot.png)
![Screenshot Anatole Theme (dark)](https://raw.githubusercontent.com/lxndrblz/anatole/master/images/screenshot_dark.png)

## Demo

A live demo of the theme can be found under the following domain:
[https://anatole-demo.netlify.app/](https://anatole-demo.netlify.app/)

## Features

Anatole's aims to be minimalistic and sleek but still brings some great functionality, including:

- Dark mode
- Multilingual
- RTL support
- Portfolio (optional)
- Post Thumbnails (optional)
- 100⁄100 Google Lighthouse score
- Analytics powered by Google Analytics, Simple Analytics and Umami (optional)
- Comments powered by Disqus, Commento, Gitalk or Utteranc.es (optional)
- KaTex support (optional)
- Formspree Contact Form (optional)
- Twitter Cards support
- Open Graph support
- Google Fonts support
- Custom JavaScript and CSS (optional)
- Compliant to strict CSP
- Post Series

## Preview the Example Site

```shell
git clone https://github.com/lxndrblz/anatole.git anatole
cd anatole/exampleSite
hugo server --themesDir ../..
```

## Documentation

🚧 The documentation has moved!

The latest documentation for the theme can be found within the [Wiki Tab on GitHub](https://github.com/lxndrblz/anatole/wiki).

### Enable list of Related Posts

`Related posts` are pages (identified by Hugo) with similar content by the Front Matter parameters.

To enable a list of related pages added after the page content, add this to your `[params]` section:

```toml
[params]
relatedposts = true
nrofrelatedposts = 3
````

Where `nrofrelatedposts` is the number of related pages to link to.

To configure the related posts more granularly [this page](https://gohugo.io/content-management/related/#configure-related-content) explains it in better detail.
But a starting point would be to add this to your `config`-file:

```toml
[related]
  includeNewer = true
  threshold = 80
  toLower = true
[[related.indices]]
  name = 'keywords'
  weight = 100
[[related.indices]]
  name = 'tags'
  weight = 80
  ````
Where `ìncludeNewer = true` includes pages newer than the current page in the related content listing.

## License

Anatole is licensed under the [MIT license](https://github.com/lxndrblz/anatole/blob/master/LICENSE).

## Contributions

This theme is maintained by its author [Alexander Bilz](https://github.com/lxndrblz) and with the help from these awesome [contributors](https://github.com/lxndrblz/anatole/graphs/contributors). All contributions (including features, translations, code cleanups, improved documentation & bugs reporting) are welcome.

Read the [guidelines](https://github.com/lxndrblz/anatole/blob/master/.github/CONTRIBUTING.md) for more information about contributing to this project.

## Sponsoring

If you like this theme, give it a star on GitHub, and consider supporting its development:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lxndrblz/)

## Special Thanks 🎁

- Go to [Cai Cai](https://github.com/hi-caicai), for the great Anatole [Farbox theme](https://github.com/hi-caicai/farbox-theme-Anatole) that formed the foundation for this theme.
- Go to [Kareya Saleh](https://unsplash.com/photos/tLKOj6cNwe0) for providing the [profile picture](https://github.com/lxndrblz/anatole/blob/master/exampleSite/static/images/profile.jpg) used in the exampleSite.
- Go to [Petri R](https://unsplash.com/photos/jLn20MzqfdE) for providing the [portfolio picture](https://github.com/lxndrblz/anatole/blob/master/exampleSite/static/images/portfolio/code.jpg) used in the exampleSite.
- Go to [Ales Krivec](https://unsplash.com/photos/4miBe6zg5r0) for providing the thumbnail picture used in the exampleSite [image-test post](https://github.com/lxndrblz/anatole/blob/master/exampleSite/content/english/post/image-test.md).
- Go to [Tobias Ahlin](https://github.com/tobiasahlin) for his [SpinKit](https://github.com/tobiasahlin/SpinKit) that is used in the exampleSite [redirect post](https://github.com/lxndrblz/anatole/blob/master/exampleSite/content/english/post/redirect.md).
- Go to [FontAwseome](https://fontawesome.com/) for providing the icons used in this project.

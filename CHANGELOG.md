# Changelog

## [1.10.0](https://github.com/lxndrblz/anatole/compare/v1.9.0...v1.10.0) (2022-04-16)

### Features

- use front matter description as rss item description ([89c8c65](https://github.com/lxndrblz/anatole/commit/89c8c6558702bf29fc1b07137d29ce80ab06ed5f))

### Bug Fixes

- loading the correct internal Google Analytics template for v4 token ([ec0175a](https://github.com/lxndrblz/anatole/commit/ec0175a4ed4131f4cf26d723c243d388b421d7eb)), closes [#339](https://github.com/lxndrblz/anatole/issues/339)
- remove double h1 tags ([#347](https://github.com/lxndrblz/anatole/issues/347)) ([849a2f2](https://github.com/lxndrblz/anatole/commit/849a2f2d9bca2928df6e86e98576e4ec2988d65f))

## [1.9.0](https://github.com/lxndrblz/anatole/compare/v1.8.0...v1.9.0) (2022-03-27)

### Features

- add a notice shortcode ([212d6cc](https://github.com/lxndrblz/anatole/commit/212d6ccae4ac6a029352fba397219eaf1d30e623))
- Add option to display related posts ([#300](https://github.com/lxndrblz/anatole/issues/300)) ([6ad4d7a](https://github.com/lxndrblz/anatole/commit/6ad4d7aea163240dbb76ed405125c7e3eeda2605))
- add the option to hide the sidebar on post pages ([a9d3b1d](https://github.com/lxndrblz/anatole/commit/a9d3b1dd926dfc3ba5aacb0928b811fc318309e8))
- added meta author HTML tag ([1a063c8](https://github.com/lxndrblz/anatole/commit/1a063c8d5dcf3f6960f9df1de465c832f51b6d53))
- avoid wrapping text of navigation items ([4ba5593](https://github.com/lxndrblz/anatole/commit/4ba5593c7282720fed7fc0eada17c025cba4089f))
- layout improvements for portfolio ([3685a7d](https://github.com/lxndrblz/anatole/commit/3685a7dfa6d3f62670f0d2cd57cc80dbfcca00fe))
- set open graph meta tags without requiring series taxonomy ([579d768](https://github.com/lxndrblz/anatole/commit/579d7682f2c91dc7d36e5f028ee999e91c3e8265))

### Bug Fixes

- enable sidebar by default ([36ea4a8](https://github.com/lxndrblz/anatole/commit/36ea4a8ca1e5d0abe795419dd0555ee0b1b583b5))
- increase padding on the x-axis ([fbecf7f](https://github.com/lxndrblz/anatole/commit/fbecf7ff34a8435eb72479cdba59468c5863270e))
- minify fontawesome files format to resolve integrity check errors ([#335](https://github.com/lxndrblz/anatole/issues/335)) ([0e03d3f](https://github.com/lxndrblz/anatole/commit/0e03d3fc86c1bcb7fa99c9a87a041643d71cb1e6))
- mobile and ultrawide views ([799d134](https://github.com/lxndrblz/anatole/commit/799d134e57a67c477bcb455d5e4dbe97e3a65b90))
- non styled summary ([f345853](https://github.com/lxndrblz/anatole/commit/f345853fe8d314f612e218e6c035d75271846eae))
- refactor SCSS according to BEM standards ([342ffd3](https://github.com/lxndrblz/anatole/commit/342ffd371483bdba81ca130a18ec162378e53cae))
- refactor sidebar SCSS ([14af37f](https://github.com/lxndrblz/anatole/commit/14af37f0df41a0abcd691bc3d2c759f74e5db42e))
- removed obsolete css properties ([e985a59](https://github.com/lxndrblz/anatole/commit/e985a599598c12b344848850c6897bace6060e99))
- show sidebar only on homepage ([3db4bb0](https://github.com/lxndrblz/anatole/commit/3db4bb0f8eb2f47076ec1858cb19cdf7148f07db))

### Reverts

- Revert "ci: temporarily invoke workflow for testing purposes" ([a6aa3e4](https://github.com/lxndrblz/anatole/commit/a6aa3e487419fab865c3ab3286eeefc49dc9e9f4))
- Revert "ci: temporarily invoke workflow for testing purposes" ([b3011c1](https://github.com/lxndrblz/anatole/commit/b3011c10efc2344873bb85696854fbe6bcfc91e9))
- Revert "ci: temporarily invoke workflow for testing purposes" ([1ff8217](https://github.com/lxndrblz/anatole/commit/1ff82174fb1bb6003725fe52f4c650eb807006e7))

## [1.8.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2022-03-10)

### Features

- add bottom spacing in case of row wraps ([a22f17c](https://github.com/lxndrblz/anatole/commit/a22f17ca78345ba84e45c9428ecb5ab1737172b1))
- add padding to navbar burger ([d277672](https://github.com/lxndrblz/anatole/commit/d277672c66a58cdecc9aed61f77f28959ecaab7b)), closes [#308](https://github.com/lxndrblz/anatole/issues/308)
- add size options to figure shortcode ([a8c3d31](https://github.com/lxndrblz/anatole/commit/a8c3d31a715db10885ffa84f79810899f2264856))
- include credits to FontAwesome ([12ff26f](https://github.com/lxndrblz/anatole/commit/12ff26f433d1bcd2e5b1b130a44b087b298cc79f))
- load fontawesome from local server ([2d0d448](https://github.com/lxndrblz/anatole/commit/2d0d448284c65746361730ca2c10185a616ca542)), closes [#299](https://github.com/lxndrblz/anatole/issues/299)
- reduce size of big figure ([a7d4d91](https://github.com/lxndrblz/anatole/commit/a7d4d91b7a1d665832cecf2073354ca15fc8af2f))
- style portfolio metadata as list with icon start adornments ([2b05b86](https://github.com/lxndrblz/anatole/commit/2b05b8608380133f5fc65e0aba2dba274eefc1a3))
- title case headings on content pages respectively keep user formatting ([8dc415c](https://github.com/lxndrblz/anatole/commit/8dc415c97890e8264a17c35906f763447c571b6b))
- title case portfolio headings ([278c146](https://github.com/lxndrblz/anatole/commit/278c1461e333cc7c0d63d7abaf4a35a6ba64fc69))
- uppercase headings on overview pages ([c14fb1e](https://github.com/lxndrblz/anatole/commit/c14fb1e46cd2d37a0fa0256d27cf7dfb997bd6f7))

### Bug Fixes

- [display] dark mode preference was not taken into account. ([57011f1](https://github.com/lxndrblz/anatole/commit/57011f1d2b04cc9032cedcd6af00301461725fa8))
- chroma styling in post content ([923c738](https://github.com/lxndrblz/anatole/commit/923c738f9642fd3ff21c0463d70345ee62f52f3c))
- increase padding slightly ([28a68e9](https://github.com/lxndrblz/anatole/commit/28a68e9cf80960ca1c54bef079bc004141beda7b))
- w3c validator errors ([021c1e0](https://github.com/lxndrblz/anatole/commit/021c1e0e9bcb81ecb02182c587ad4d17b98f26f7)), closes [#309](https://github.com/lxndrblz/anatole/issues/309)

## [1.7.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2022-02-21)

### Features

- add makefile to generate resource folder ([0e610e4](https://github.com/lxndrblz/anatole/commit/0e610e4ba806b19a7aae01d5810691c0c6803b17))
- added umami analytics ([#298](https://github.com/lxndrblz/anatole/issues/298)) ([a9cb563](https://github.com/lxndrblz/anatole/commit/a9cb5630a21a320d3d3c1afe3781fd289129273e))
- added windows release target ([c4ac344](https://github.com/lxndrblz/anatole/commit/c4ac344e662445ea9f9752f7822b3d8bcb9f3cf0))
- allow setting displayMode dark from params ([3be3958](https://github.com/lxndrblz/anatole/commit/3be3958812aff76710e17f58a370dd4601f061f8))
- decrease border radius of thumbnail ([80598b5](https://github.com/lxndrblz/anatole/commit/80598b58c8330ef5b0013878355d374bc7098dca))
- decrease font size h1; set font sizes if headings have nested a tags ([d2b4566](https://github.com/lxndrblz/anatole/commit/d2b4566616a5af9cad2e73676a622c6cf7c6812b))
- decrease nav spacing ([0145c16](https://github.com/lxndrblz/anatole/commit/0145c1661d65ccd1a542092f75c2d84f544ea8cb))
- increase font size of post title ([82b2cee](https://github.com/lxndrblz/anatole/commit/82b2cee0b41b72c73b853531c807df2115998879))
- increase font size of sidebar title ([17b1b74](https://github.com/lxndrblz/anatole/commit/17b1b747a18d100267a0d9d04fcdb0881d25c1a2))
- increase hero spacing on mobile ([94d6dac](https://github.com/lxndrblz/anatole/commit/94d6dacd133375300c44f50f99fa531686698983))
- move info to post-meta and improve styles ([e17be94](https://github.com/lxndrblz/anatole/commit/e17be94391c5a232ac543f371b35ca6585786f36))
- ported makefile to package.json script ([5bc180c](https://github.com/lxndrblz/anatole/commit/5bc180ccafbeb3d44d1f67e4e1fcc0b9b71ba3e3))
- reduce border-radius ([08bc7f2](https://github.com/lxndrblz/anatole/commit/08bc7f227a82327ff15e5cac51c8bcf0b4778729))
- reduce font size ([e92403b](https://github.com/lxndrblz/anatole/commit/e92403bff7ee9b0260e49ba915ebadf07c7978f0))
- update screenshots ([b3c18d6](https://github.com/lxndrblz/anatole/commit/b3c18d68adccdd2728f040e4ddf0a3ffda2f0127))
- url as link ([f6c8150](https://github.com/lxndrblz/anatole/commit/f6c81503e9f3e7f8f1b734295cbd9b51148d0153))
- use standard font size for paragraphs ([951c109](https://github.com/lxndrblz/anatole/commit/951c109365d202d036fd58dc888f189fae660861))

### Bug Fixes

- add back gen folder ([cc80d58](https://github.com/lxndrblz/anatole/commit/cc80d588e9b725a2d972d90cd2f9819a85d1b531))
- add generated resources to example site to ensure compatibility ([6dd1953](https://github.com/lxndrblz/anatole/commit/6dd19537bea5b3e89ef6579cbecdf174dd52f2e4))
- add optional shx for echo statement ([c62550d](https://github.com/lxndrblz/anatole/commit/c62550ddfb0c93fed5e9e6ebcfef0abe2b7a4607))
- alert colours ([4a788a6](https://github.com/lxndrblz/anatole/commit/4a788a66ea204bd68a1c7ac389047cd8dee95079))
- align nav border highlight ([74fb537](https://github.com/lxndrblz/anatole/commit/74fb537c21fb75e779baf338b78d75f094da394e))
- color portfolio mobile ([9affb74](https://github.com/lxndrblz/anatole/commit/9affb74a24c5ab7bde6f99e4fc7eab5071ae3c19))
- define img max width ([75e1630](https://github.com/lxndrblz/anatole/commit/75e1630bbd235082d5a1c20fc6c12ec5fef61730))
- deprecation warning global assignments won't be able to declare new variables in future versions ([9e5d138](https://github.com/lxndrblz/anatole/commit/9e5d138e97cd119226049c02cc31d4ea903eb711))
- duplicate footers ([fe660be](https://github.com/lxndrblz/anatole/commit/fe660be1ebd4b448375ba3b0695f44b62b92b217))
- languageswitcher triangle alignment and mobile spacing ([0a690aa](https://github.com/lxndrblz/anatole/commit/0a690aa0dceed6a372443dd8398ffd08e2702932))
- make sure tag text is also in lighter color ([6678874](https://github.com/lxndrblz/anatole/commit/66788744649fdf5313b2514f75644b2f12d07ba1))
- make themeswitch functionable again ([72f09ca](https://github.com/lxndrblz/anatole/commit/72f09ca2a9dd93c6d94b32eb5e5a3ecb2dbcc733))
- medium zoom ([94973bf](https://github.com/lxndrblz/anatole/commit/94973bf4d053ed0940b54f2c4d69cb404b48b4fd))
- nonmatching div footer ([5c84ace](https://github.com/lxndrblz/anatole/commit/5c84ace36c5273bcd70094b7fcce5dc8b10b3a2a))
- portfolio stacking ([1d65174](https://github.com/lxndrblz/anatole/commit/1d65174b2471915180e6416a13c48c974caa0a76))
- redundant main.scss ([4c85c2a](https://github.com/lxndrblz/anatole/commit/4c85c2a733f5ec12bbeea084f5bc8e550ff2ffe7))
- remove fixed width to enable class big ([6f74c37](https://github.com/lxndrblz/anatole/commit/6f74c378ec215e412e3a5499cc4362b130ebc10b))
- remove obsolete file ([9d78804](https://github.com/lxndrblz/anatole/commit/9d7880414f15049d0457db96ef9d75cc034cf4b4))
- remove obsolete post class ([4c14755](https://github.com/lxndrblz/anatole/commit/4c147555e11ef0544d1da27d84f3187471829f87))
- remove unnecessary padding on mobile ([a5e341b](https://github.com/lxndrblz/anatole/commit/a5e341bfded6289c5c940fc0014e27cdb502df1d))
- removed unused SCSS classes ([698f821](https://github.com/lxndrblz/anatole/commit/698f821f77f25d84ed2f97924a4180633711ee8c))
- rtl and ltr mode ([76e9a77](https://github.com/lxndrblz/anatole/commit/76e9a7708e7e71ff50ec7cb26f83e48430cbc045))
- sonarcloud bug border ([57fb870](https://github.com/lxndrblz/anatole/commit/57fb870be4acd12156fd2439c816c904b2ff676f))
- sonarcloud bugs ([96a38bd](https://github.com/lxndrblz/anatole/commit/96a38bd67868305489659903568df29d159c872a))
- sonarcloud bugs ([2be0e35](https://github.com/lxndrblz/anatole/commit/2be0e353567140abe9b566f6be8e286ade036e0f))
- spacing of alert box ([161496d](https://github.com/lxndrblz/anatole/commit/161496d0608336e4d6a99938a02a5d749d4e0a42))
- styling contact form ([00e408a](https://github.com/lxndrblz/anatole/commit/00e408a786552c0b252081626c162cd5a94622da))
- typo pull request template ([6583837](https://github.com/lxndrblz/anatole/commit/658383730e7d6c4aa63b6fd679d2dc14e1d6d9e6))
- use scss variable ([372e0ed](https://github.com/lxndrblz/anatole/commit/372e0ed628a741be0fae47dda6b7ed25e23f50a8))
- various colors ([8249f80](https://github.com/lxndrblz/anatole/commit/8249f80b595f6d90b3b2239ed8eceb4ac0ac03c9))
- width smaller than screen on archive page ([ddeacdd](https://github.com/lxndrblz/anatole/commit/ddeacdd16288dab570a165b942c8983cef919393))

### Reverts

- Revert "refactor: do not change link color on hover" ([6594cab](https://github.com/lxndrblz/anatole/commit/6594cabbb4be999a82c769b8ce7633267d26d3b0))

## [1.6.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2022-01-30)

### Features

- added a netlify.toml for demo site ([13bc907](https://github.com/lxndrblz/anatole/commit/13bc90740288e5bc7473f4f1642db4a9bac8bfd3))
- added links to config and example site in readme ([#293](https://github.com/lxndrblz/anatole/issues/293)) ([9cf84d3](https://github.com/lxndrblz/anatole/commit/9cf84d343061064c203fdecb77558fe54e5b4ea4))
- added links to demo site ([5294a0d](https://github.com/lxndrblz/anatole/commit/5294a0dfe44d15f0be60385c3db6cd0dded58cf5))
- Added page title switcher ([#286](https://github.com/lxndrblz/anatole/issues/286)) ([789876a](https://github.com/lxndrblz/anatole/commit/789876a144c58cd4876913ac75c2024c643576a6))
- Added Plausible Analytics ([#296](https://github.com/lxndrblz/anatole/issues/296)) ([b84efff](https://github.com/lxndrblz/anatole/commit/b84efff11943dc926d5e04892c215d5533dc4bc0))
- added portfolio and projects page ([#272](https://github.com/lxndrblz/anatole/issues/272)) ([0d412d3](https://github.com/lxndrblz/anatole/commit/0d412d3a37f6317dd1a8b231444077fecbbf522c)), closes [#221](https://github.com/lxndrblz/anatole/issues/221)
- include testing checklist ([2344d65](https://github.com/lxndrblz/anatole/commit/2344d6572d808468a63642355c072ea95cdd36c6))
- old content warning ([#266](https://github.com/lxndrblz/anatole/issues/266)) ([33fe67a](https://github.com/lxndrblz/anatole/commit/33fe67a975fce9de03f9666bdbebe647721eb57d))
- turn anatole theme into a hugo module ([#291](https://github.com/lxndrblz/anatole/issues/291)) ([fcbc65c](https://github.com/lxndrblz/anatole/commit/fcbc65c81ceb7ff31879e997026d79e5215f7b90))

### Bug Fixes

- added English aria labels for prev/next pagination buttons ([#289](https://github.com/lxndrblz/anatole/issues/289)) ([c610dad](https://github.com/lxndrblz/anatole/commit/c610dadb1769c5ac8d6ec3e760b51931da52a0d7))
- fixing typos ([99baec2](https://github.com/lxndrblz/anatole/commit/99baec23d388f6693495c90e864629bada902258))
- image width portfolio ([af75745](https://github.com/lxndrblz/anatole/commit/af75745ecc1e54c93ffa9ebd6dd562f8c621f49c))
- language dropdown styling ([#264](https://github.com/lxndrblz/anatole/issues/264)) ([e1817fe](https://github.com/lxndrblz/anatole/commit/e1817feceb8f1213f26c8018365e6ba14bb2fd64))
- make canonical link absolute ([#273](https://github.com/lxndrblz/anatole/issues/273)) ([ef17749](https://github.com/lxndrblz/anatole/commit/ef17749c72806dd54b8d2a660ab8fe41c0aa83bb))
- order of expiration note ([9dd94c2](https://github.com/lxndrblz/anatole/commit/9dd94c27bfe0239dae54b6ed32289c78ccc4b1a6)), closes [#285](https://github.com/lxndrblz/anatole/issues/285)
- overlap on ultra wide screens ([#287](https://github.com/lxndrblz/anatole/issues/287)) ([69e2f1f](https://github.com/lxndrblz/anatole/commit/69e2f1f3bba2995bafb311ef439083873fdba92e))
- redirect users to home page of current language ([#263](https://github.com/lxndrblz/anatole/issues/263)) ([fe9efda](https://github.com/lxndrblz/anatole/commit/fe9efda7969239dfd0f17ef00c0124ea8f68bf99))
- remove padding in mobile view ([4558d20](https://github.com/lxndrblz/anatole/commit/4558d20053ac0c86ea4402c921a4f7f39a3b89de))
- revert twitter example for backwards compatibility ([7d2af9a](https://github.com/lxndrblz/anatole/commit/7d2af9ad0b33b840e08d3d6cd430b193508fc6e1)), closes [#271](https://github.com/lxndrblz/anatole/issues/271)
- show mouseover text for social links ([#265](https://github.com/lxndrblz/anatole/issues/265)) ([d8bfafc](https://github.com/lxndrblz/anatole/commit/d8bfafc28e1741169bc5189553afb6df3deabcfa))
- twitter shortcode warning ([488c3e9](https://github.com/lxndrblz/anatole/commit/488c3e97ec95c7fdc00102290c8f30f8108d6c8c))

## [1.4.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-11-03)

### Features

- Added Formspree spam filtering ([#259](https://github.com/lxndrblz/anatole/issues/259)) ([0c9c5bc](https://github.com/lxndrblz/anatole/commit/0c9c5bc15caa6ebd9d5fa3227aaa62c761956109))
- Added support for Google Fonts ([#255](https://github.com/lxndrblz/anatole/issues/255)) ([8d51b8b](https://github.com/lxndrblz/anatole/commit/8d51b8ba619af4504ad40386f6b452e50ec8a39b))
- Improved Arabic support ([#249](https://github.com/lxndrblz/anatole/issues/249)) ([8ad28e8](https://github.com/lxndrblz/anatole/commit/8ad28e87167be8369f7b6ce2737a3cc6f5b9f9e3))
- improved language dropdown menu ([#261](https://github.com/lxndrblz/anatole/issues/261)) ([045dabb](https://github.com/lxndrblz/anatole/commit/045dabb11992a0d77f404dd931cbb093f4e11b44)), closes [#169](https://github.com/lxndrblz/anatole/issues/169)
- prettier pagination ([8a40abc](https://github.com/lxndrblz/anatole/commit/8a40abcc71a995b0de12d110428a46ed74a22d3f))

### Bug Fixes

- adjusted stale bot to close only issues that are awaiting a reply ([2847365](https://github.com/lxndrblz/anatole/commit/284736548ad97e5d84026ff982bca3aa92f5df0d))
- remove white color in syntax highlighting (dark mode) ([49de81b](https://github.com/lxndrblz/anatole/commit/49de81b2e2c921f752d8b1d261fe4c148a00c51e))

## [1.3.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-08-15)

### Features

- added schema.org structured data ([3ce92e4](https://github.com/lxndrblz/anatole/commit/3ce92e4534975918a3559ec4f77caf15c797d663))
- Adding series to the theme ([d530d03](https://github.com/lxndrblz/anatole/commit/d530d03761514d90de059ca005063d447f50460c)), closes [#234](https://github.com/lxndrblz/anatole/issues/234)

### Bug Fixes

- if condition with gtagId ([#230](https://github.com/lxndrblz/anatole/issues/230)) ([9c59364](https://github.com/lxndrblz/anatole/commit/9c59364e45baa0a744e411139d008998da95225e)), closes [#228](https://github.com/lxndrblz/anatole/issues/228)
- organization name ([96483e4](https://github.com/lxndrblz/anatole/commit/96483e4b5a4f945d7e992c416761496b4ef15e8c))

## [1.2.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-07-04)

### Features

- added basic CSS for TOC ([4b11819](https://github.com/lxndrblz/anatole/commit/4b11819a89b7f43f66b13930c7555086459725a4))
- gitalk comment ([92c37f1](https://github.com/lxndrblz/anatole/commit/92c37f1abcec54941ece965cb047cedda1b2e6a3))

### Bug Fixes

- Adjusted title of single.html to be a H1 header ([0ec60e9](https://github.com/lxndrblz/anatole/commit/0ec60e9678d5f049b687d1b753dd73c1a5107daa))
- description in README file ([5303fca](https://github.com/lxndrblz/anatole/commit/5303fca371473037c783c6c45d778e5fd8be6bf4))
- distorted print view ([8c36e9a](https://github.com/lxndrblz/anatole/commit/8c36e9a4a4f411758877742fc59c26fc15880295))
- missed absolute fontsize ([3184d8f](https://github.com/lxndrblz/anatole/commit/3184d8f808db0a9e912507d537e61aa62ddb2b35))
- Navigation Item Centering ([#219](https://github.com/lxndrblz/anatole/issues/219)) ([b4260d7](https://github.com/lxndrblz/anatole/commit/b4260d7c7f77d382fe2b98db411fa5f45870ff0b))
- relative font sizes instead of px defined ([faf23c5](https://github.com/lxndrblz/anatole/commit/faf23c5219a152f99f2854a65348dcc8bc109877))
- sidebar url ([9b1d6f8](https://github.com/lxndrblz/anatole/commit/9b1d6f8385faabb2e5d3a9c2d70a2b984ad0bf20))
- updated gitalk tag to include integrity check ([548686a](https://github.com/lxndrblz/anatole/commit/548686af08f78aeda3b237ebe864ee809dda54b3))

## [1.1.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-06-20)

### Bug Fixes

- correct typo ([3c730ae](https://github.com/lxndrblz/anatole/commit/3c730aeda3f67200fce5fcdaac666192f8cf8323))

## [1.0.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-05-08)

## [0.9.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-04-18)

### Reverts

- Revert "Fixes an issue where long links overflow page width" ([cbc272f](https://github.com/lxndrblz/anatole/commit/cbc272f46fe78b13e751030a2458f31afbfca213))

## [0.8.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-03-13)

## [0.7.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-03-03)

### Reverts

- Revert "Added reCAPTCHA to Formspree and support for Netlify forms" (#123) ([e325c1b](https://github.com/lxndrblz/anatole/commit/e325c1b2adbddb81c82d167e280ff3f673cf92d6)), closes [#123](https://github.com/lxndrblz/anatole/issues/123)
- Revert "Added reCAPTCHA to Formspree and support for Netlify forms" ([efabd21](https://github.com/lxndrblz/anatole/commit/efabd21d92afd4d265adf2a490625cc994493656))
- Revert "Revert "Merge branch 'post-thumbnail' of https://github.com/LucasVadilho/anatole into pr/72"" ([6752fb1](https://github.com/lxndrblz/anatole/commit/6752fb185e4ae9b87d90adaa70c8f81af43cdbdf))
- Revert "Alternative suggestion" ([1306bb7](https://github.com/lxndrblz/anatole/commit/1306bb71e6e0333c1fd1995c65bb715367694004))

## [0.5.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2021-01-05)

## [0.3.0](https://github.com/lxndrblz/anatole/compare/v1.7.0...v1.8.0) (2020-10-25)

### Bug Fixes

- fix white space in partials template ([a6a072f](https://github.com/lxndrblz/anatole/commit/a6a072f5165ae0aeaff3e381353fcc8d39d78835))

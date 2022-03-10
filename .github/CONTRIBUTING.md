# Contributing to Anatole

All contributions (including features, translations, code cleanups, improved documentation & bugs reporting) are welcome.

## Issues

Issues are very valuable to this project.

When you create an issue to report a bug or ask a question, please fill out the necessary template. There is one template for filing a [bug](https://github.com/lxndrblz/anatole/blob/master/.github/ISSUE_TEMPLATE/bug_report.md) and one for requesting a new [feature](https://github.com/lxndrblz/anatole/blob/master/.github/ISSUE_TEMPLATE/feature_request.md). Time has shown that precise descriptions of your matter help speed up the problem resolution and avoid unnecessary confusion.

## Pull Requests

Pull requests are a great way to get your ideas into this repository.

In order to ensure the maintainability and quality of the project, a set of common guidelines has been defined. Please make sure you follow these practices when creating a pull request:

1. When you create a pull request, please fill out the [pull request template](https://github.com/lxndrblz/anatole/blob/master/.github/PULL_REQUEST_TEMPLATE.md) and ensure your PR is well-tested and documented.

2. Please commit any pull requests against the `master` branch.

3. Use conventional commit messages whenever you commit changes, as these help me understand your contribution better and track your changes. If you are not familiar with conventional commit messages, you can find a good introduction under [this](https://www.conventionalcommits.org/en/v1.0.0/) link. Please refrain from using non-descriptive commit messages or filing large changes as a single commit. All commits will be checked for conformity using Git Hooks and [Husky](https://github.com/typicode/husky). For setting up Husky in your Anatole project, you will have to run `npm run setup` once. This step will set up all the necessary dependencies and configuration files.

4. When deciding if I merge a pull request, I look at the following things:

   - Does it provide a clear benefit to other users (i. e. does it solve a clearly defined and common problem)
   - Does it follow Anatole's paramount goal of being a minimalistic and visually pleasant Hugo theme? In other words, make sure it does not bloat the theme.
   - Is it of good quality?

5. The Anatole repository ships with a configuration for [prettier](https://prettier.io/) (`.prettierrc`) which also makes use of [prettier-plugin-go-template](https://github.com/NiklasPor/prettier-plugin-go-template) to ensure common code formatting criteria. Please make sure your PR is formatted using the prettier configuration as this helps reviewing and keeping code formatting consistent. For this prettier configuration, it is required to have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and the Anatole's project dependencies (`npm install`) ready. After, you can enable automatic code formatting with the [Prettier extension for Visual Studio Code
   ](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) or use the one-off prettier script provided with `package.json` (`npm run prettier`). Be aware that the one-off script has to be executed every time before pushing code to the upstream repository.

## Thank You

Lastly, it is worth mentioning that this project would not be possible without contributors and supports like you. Even if you are not a programmer but still want to support the development, consider [sponsoring](https://ko-fi.com/lxndrblz) this project.

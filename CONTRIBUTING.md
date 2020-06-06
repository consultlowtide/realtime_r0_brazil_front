# How to contribute

If we are missing anything from this project or can make the development process easier in any way, [please let me know on Twitter](https://twitter.com/martinblaws), or [email](mailto:martin@consultlowtide.ca).

## Code of conduct

We expect all participants to read Shopify's [code of conduct](https://github.com/Shopify/polaris-react/blob/master/.github/CODE_OF_CONDUCT.md). We feel that it is comprehensive and helpful in understanding which actions are and aren’t tolerated in Open Source Software development.

## Open development

All work on `rt-canada` happens on GitHub. Our team members and external contributors all open and review Pull Requests in the same place - here.

## Branch organization

`master` is automatically deployed to [rt-canada.ca](https://rt-canada.ca) on every commit. Broken code on `master` will take down the site in real time. Nothing should ever be committed directly to `master`, all changes must go through a Pull Request and review process.

## Bugs

### Where to find known issues

We track all of our issues in GitHub. If you are planning to work on an issue, avoid ones which already have an assignee, where someone has commented within the last two weeks they are working on it, or the issue is labeled `in progress`. We will do our best to communicate when an issue is being worked on internally.

### Reporting new issues

To reduce duplicates, look through open issues before filing one. When [opening an issue](https://github.com/consultlowtide/rt-canada/issues/new), please describe the issue in as much detail as possible, screen captures are welcome!

## Your first pull request

Working on your first pull request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please check the comment thread in case somebody is already working on a fix. If nobody is working on it, leave a comment stating that you intend to work on it.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take it over but still leave a comment stating that you intend to work on it.

### Sending a pull request

We’ll review your pull request and either merge it, request changes to it, or close it with an explanation. We’ll do our best to provide updates and feedback throughout the process.

**Before submitting a pull request**, please:

1. Fork the repository and create your branch from `master`
1. Run `yarn` in the repository root
1. `Tophat 🎩` your changes locally by running `yarn start`, then commenting `🎩` on your PR, ideally with a screenshot of the local change 🙏 

### Contribution prerequisites

- You have Node installed at v12.16.1+ and Yarn at v1.10.1+

### Code style

We use an automatic code formatter called [Prettier](https://prettier.io/). Please run Prettier after making any changes to the code.

Our code editor of choice is [VS Code](https://code.visualstudio.com/) which has [integrations with Prettier](https://github.com/prettier/prettier-vscode) and our linting tools which make this automatic. If you choose to use VS Code, these integrations will be listed as recommended extensions (or search for `@recommended`) in the extensions panel.

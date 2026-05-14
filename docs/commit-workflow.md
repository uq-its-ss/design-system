#Commit workflow

DRAFT

# Conditional commits

Our commit naming follows the [Conventional Commits](https://www.conventionalcommits.org) specification and the Angular [Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit)

## Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

## Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

## Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

- **packaging**: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
- **changelog**: used for updating the release notes in CHANGELOG.md

## Examples:

**New Feature**

```
feat(accordion) succinct description of the change

Added new accordion types:
- New .accordon--small reduces overall size and padding
- Added leading icon option
- Added heading title options

```

**New Feature - Breaking**

```
feat(accordion) succinct description of the new feature

The body should include the motivation for the change and contrast this with previous behavior

BREAKING CHANGE: a space or two newlines. The rest of the commit message is then the description of the change, justification and migration notes.
```

## To submit changes:

1. Give the ADS-UI team a heads up in case your planned change intersects with another planned change.
1. Create a new branch named with the JIRA/GitHub issue reference and brief summary of the work.
1. Create a pull request and assign 2 reviewers from ADS-UI

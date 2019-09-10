# Les Capsules

<p align="center">
  <a href="https://lgtm.com/projects/g/browniebroke/lescapsules-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/g/browniebroke/lescapsules-web.svg?logo=lgtm&logoWidth=18"/ alt="Total alerts">
  </a>
  <a href="https://david-dm.org/browniebroke/lescapsules-web">
    <img src="https://david-dm.org/browniebroke/lescapsules-web/status.svg" alt="dependencies Status"/>
  </a>
  <a href="https://travis-ci.com/browniebroke/lescapsules-web">
    <img src="https://travis-ci.com/browniebroke/lescapsules-web.svg?branch=master"/>
  </a>
  <a href="https://lescapsules.netlify.com">
    <img src="https://img.shields.io/badge/deployed-netlify-00c7b7.svg" alt="Deployed on Netlify"/>
  </a>
  <a href="https://github.com/browniebroke/lescapsules-web">
    <img src="https://tokei.rs/b1/github/browniebroke/lescapsules-web" alt="Lines of Codes"/>
  </a>
</p>

This site is built using [GatsbyJS](https://www.gatsbyjs.org/), a static code generator using [React](https://reactjs.org/) & [GraphQL](https://graphql.org/). It is deployed on [Netlify](https://www.netlify.com/) and the domain is coming from [OVH](https://www.ovh.co.uk/). Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development 

It uses yarn to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ yarn
# Start the development server
$ yarn run develop
# Build production
$ yarn run build
```

## Git flow

1. Create a branch from `master` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which will trigger tests, static code analysis and a prod-like deploy preview on Netlify. Do this early as some React things might work locally but will break in the Gatsby production build.

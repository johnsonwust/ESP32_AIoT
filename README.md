# ESP32 AIoT Documentation

This repository contains the Docusaurus source for the ESP32 AIoT documentation site.

Production site:

- https://esp32.innoelement.org/

## Branches

- `main`: documentation source, Docusaurus configuration, and deployment workflow.
- `gh-pages`: generated static site served by GitHub Pages.

## Local Development

Install dependencies:

```bash
npm install
```

Start a local development server:

```bash
npm run start
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run serve
```

## Deployment

GitHub Pages should publish from the `gh-pages` branch at `/`.

The custom domain is stored in `static/CNAME` so Docusaurus copies it into the generated site:

```text
esp32.innoelement.org
```

Use the `Deploy GitHub Pages` workflow to publish the generated site to `gh-pages` after verifying the build output.

# Liist Webcomponents
[![Netlify Status](https://api.netlify.com/api/v1/badges/bb6211a2-5bde-4b24-b205-2432d7f12177/deploy-status)](https://app.netlify.com/sites/liist-webcomponents/deploys)

![LADS](https://user-images.githubusercontent.com/44790691/87578370-9c8bde80-c6d4-11ea-988d-161c25072eba.png)

This webcomponent library follows the [open-wc](https://github.com/open-wc/open-wc) recommendation. Open [liist-webcomponents storyook](https://liist-webcomponents.netlify.app/?path=/docs/) for documentation.

## Installation
```bash
npm i liist-webcomponents
```

## Usage
```html
<script type="module">
  import { LiistBttn } from 'liist-webcomponents';
</script>
<liist-bttn>Hello World</liist-bttn>
```

## Demoing with Storybook
To run a local instance of Storybook for your components, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```

## Development Server
To run a local development server that serves the basic demo located in `demo/index.html`
```bash
npm run dev
```

## Deployment and auto build with Netlify

The storybook is automatically build and deployed with Netlify, whenever there is a new commit to master. It is hosted here: https://liist-webcomponents.netlify.app/?path=/docs/

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.


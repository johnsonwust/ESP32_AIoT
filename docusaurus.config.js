// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-ignore

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ESP32 AIoT 文档',
  tagline: 'ESP32 S3 AIoT all-in-one development board documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://esp32.innoelement.org',
  baseUrl: '/',
  organizationName: 'johnsonwust',
  projectName: 'ESP32_AIoT',


  onBrokenLinks:  'warn', //'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/johnsonwust/ESP32_AIoT/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/johnsonwust/ESP32_AIoT/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ESP32 AIoT 文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo4.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'startSidebar',
            position: 'left',
            label: '上手教程',
          },
          {
            type: 'docSidebar',
            sidebarId: 'exampleSidebar',
            label: '模块范例',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            label: '示例项目',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hardwareSidebar',
            label: '硬件规格',
            position: 'left',
          },
          {
            href: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/get-started/index.html',
            label: '更多文档',
            position: 'right',
          },
          {
            href: 'https://github.com/johnsonwust/ESP32_AIoT',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '官网',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} innoelement. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nodi',
  tagline: '',
  url: 'https://__userName__.github.io',
  baseUrl: '/nodi-docs/',
  projectName: 'nodi-docs',
  organizationName: 'Nodi3d',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Nodi',
      logo: {
        alt: 'Nodi logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/user/guide',
          label: 'User',
          position: 'left',
          activeBaseRegex: `/user/`,
        },
        {
          to: '/developer/guide',
          label: 'Developer',
          position: 'left',
          activeBaseRegex: `/developer/`,
        },
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nodi. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'user',
          routeBasePath: 'user',
          path: 'user',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Nodi3d/nodi-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'developer',
        routeBasePath: 'developer',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
          'https://github.com/Nodi3d/nodi-docs/edit/main/',
      },
    ],
  ],
};

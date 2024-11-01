import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Bartender.js',
  description: 'Library for creating accessible off-canvas bars.',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://bartender.fokke.fi',
    lastmodDateOnly: false,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/bartender-logo.webp',
      'aria-label': 'Back to the home page',
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: [2, 3],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/overview' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Playground', link: '/playground' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Main instance', link: '/main-instance' },
          { text: 'Adding a new bar', link: '/adding-a-new-bar' },
          {
            text: 'Opening, closing and toggling the bar',
            link: '/opening-closing-and-toggling-the-bar',
          },
          {
            text: 'Removing the bar',
            link: '/removing-the-bar',
          },
          {
            text: 'Getting an existing bar instance',
            link: '/getting-an-existing-bar-instance',
          },
          {
            text: 'Events',
            link: '/events',
          },
        ],
      },
      {
        text: 'Styling',
        items: [{ text: 'Styling guide', link: '/styling-guide' }],
      },
      {
        text: 'Integrations',
        items: [{ text: 'Vue plugin', link: '/vue-plugin' }],
      },
    ],
    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@fokke-/bartender.js',
      },
      { icon: 'github', link: 'https://github.com/Fokke-/bartender.js' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Ville Fokke Saarivaara',
    },
  },
})

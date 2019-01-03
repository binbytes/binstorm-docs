module.exports = {
  title: 'BinStorm',
  description: 'Supercharge your style with BinStorm',
  ga: 'UA-131681474-1',
  serviceWorker: true,

  markdown: {
    lineNumbers: false,
  },

  head: [
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css?family=Nunito:100,300,400,500,600,700',
        rel: 'stylesheet',
        type: 'text/css',
      }
    ],
    [
      'link',
      {
        rel: 'icon', 
        href: '/assets/images/logo.png'
      }
    ],
    [
      'script',
      {
        src: 'https://snack.expo.io/embed.js'
      }
    ],
  ],

  themeConfig: {
    logo: '/assets/images/logo.svg',
    repo: 'binbytes/binstorm',
    docsRepo: 'binbytes/binstorm-docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    displayAllHeaders: false,
    sidebarDepth: 0,

    serviceWorker: {
      updatePopup: true
    },

    nav: [
      {
        text: 'Version',
        link: '/',
        items: [
          {text: '0.1', link: '/0.1/'}
        ]
      },
      {
        text: 'BinBytes',
        link: 'https://binbytes.com',
      }
    ],
    sidebar: {
        '/0.1/': require('./0.1')
    },
  },
};
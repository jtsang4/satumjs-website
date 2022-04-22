module.exports = {
  title: 'Satumjs',
  description: 'A core of micro-frontends framework',
  base: '/website/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: 'https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ', type: 'image/x-icon', rel: 'shortcut icon' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Satumjs',
      description: '面向未来更多场景的下一代微前端框架',
      selectText: '选择语言',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Satumjs',
      description: 'Next-generation microf2e framework for more scenarios in the future',
      selectText: 'Languages',
    },
  },
  themeConfig: {
    repo: 'satumjs/website',
    editLinks: true,
    docsDir: 'vuepress-docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '更新时间',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '配置', link: '/config/' },
      { text: '中间件', link: '/midware/' },
      { text: '插件', link: '/plugin/' },
    ],
    sidebar: {
      '/guide': [{
        title: '指南',
        collapsable: false,
        children: [
          { title: '介绍', path: '/guide/' },
          { title: '快速开始', path: '/guide/getting-started' },
        ],
      }],
      '/midware': [{
        title: '中间件',
        collapsable: false,
        children: [
          { title: '介绍', path: '/midware/' },
          { title: '流程节点', path: '/midware/flow-nodes' },
          { title: '官方中间件', path: '/midware/offical-midwares' },
        ],
      }],
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
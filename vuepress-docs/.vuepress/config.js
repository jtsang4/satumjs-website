module.exports = {
  title: 'Satumjs',
  description: 'A core of micro-frontends framework',
  base: '/website/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { href: 'https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ', type: 'image/x-icon', rel: 'shortcut icon' }],
    // 插入百度统计代码
    ['script', {}, `
      var ignoreDomains = ['localhost', '127.0.0.1', '0.0.0.0'];
      var _hmt = _hmt || [];
      (function() {
        if (ignoreDomains.some(function(domain) { return location.hostname.includes(domain) })) return;
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ff1ee4d80feed24efd13ed94ef4722fe";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `], 
  ],
  /* locales: {
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
  }, */
  themeConfig: {
    repo: 'satumjs',
    docsRepo: 'satumjs/website',
    editLinks: true,
    docsDir: 'vuepress-docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '更新时间',
    nav: [
      { text: '文档', link: '/guide/' },
      { text: '更多示例', link: '/more-examples' },
    ],
    sidebar: {
      '/guide': [{
        title: '指南',
        collapsable: false,
        children: [
          { title: '简单介绍', path: '/guide/' },
          { title: '快速上手', path: '/guide/getting-started' },
          { title: '架构体系', path: '/guide/architecture-map' },
        ],
      }, {
        title: 'API',
        collapsable: false,
        children: [
          { title: 'API 说明', path: '/guide/api/' },
          { title: '注意事项', path: '/guide/api/attention' },
        ],
      }, {
        title: '中间件',
        collapsable: false,
        children: [
          { title: '快速了解', path: '/guide/midware/' },
          { title: '流程节点', path: '/guide/midware/flow-nodes' },
          { title: '官方中间件', path: '/guide/midware/offical-midwares' },
        ],
      }, {
        title: '插件',
        collapsable: false,
        children: [
          { title: '文档说明', path: '/guide/plugin/' },
        ],
      }],
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
}
export default ({ router }) => {
  // 路由切换
  router.beforeEach((to, _, next) => {
    const ignoreDomains = typeof window !== 'undefined' ? (window.ignoreDomains || []) : []
    const ignoreDomain = ignoreDomains.some(domain => location.hostname.includes(domain));
    if (typeof _hmt !== 'undefined' && to.path) {
      if (ignoreDomain) {
        console.log('[百度统计]', to.fullPath);
      } else {
        const realPath = to.fullPath/* .split('#')[0] */;
        _hmt.push(['_trackPageView', realPath]);
        console.log('上报百度统计', realPath);
      }
    }
    next();
  });
};
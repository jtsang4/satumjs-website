export default ({ router }) => {
  // 路由切换
  router.beforeEach((to, _, next) => {
    const ignoreDomain = typeof window !== 'undefined' ? window.currentDomainIsIgnored : false;
    if (typeof _hmt !== 'undefined' && to.path) {
      const fullPath = to.fullPath;
      const realPath = fullPath.split('#').shift();
      if (ignoreDomain) {
        console.log('[本地统计]', { fullPath, realPath });
      } else {
        _hmt.push(['_setAutoPageview', false]);
        _hmt.push(['_trackPageView', realPath]);
        console.log('上报百度统计', realPath);
      }
    }
    next();
  });
};
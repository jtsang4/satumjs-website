export default ({ router }) => {
  // 路由切换
  router.beforeEach((to, _, next) => {
    if (typeof _hmt !== 'undefined' && !(window.ignoreDomains || []).some(domain => location.hostname.includes(domain))) {
      if (to.path) {
        const realPath = to.fullPath/* .split('#')[0] */;
        _hmt.push(['_trackPageView', realPath]);
        console.log('上报百度统计', realPath);
      }
    }
    next();
  });
};
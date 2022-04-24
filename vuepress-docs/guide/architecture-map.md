---
sidebarDepth: 2
---

# 架构体系说明

## 内核架构视角

![](https://gw.alipayobjects.com/mdn/rms_d65887/afts/img/A*iU1MSJQlEo0AAAAAAAAAAAAAARQnAQ =450x495)

几点说明：

> 因为激活规则中有路径规则和 `container` 属性，微应用可以是普通的，也可以是布局、区块。

- `布局微应用`：如果微应用的激活规则中包含 `layout`，则以路径获得的其他微应用；
- `区块微应用`：如果微应用的激活规则中包含 `blocks`，则以路径获得的其他微应用；
- `数据共享`：目前数据共享由 `shareProps` 配置，且需要通过 window 对象。其他共享方式规划中；
- `路由协调`：依赖中间件 `@satumjs/simple-midwares > interceptorMidware` 或者 `@satumjs/midware-interceptor`；

## 工程生态视角

![](https://gw.alipayobjects.com/mdn/rms_d65887/afts/img/A*4bwJRKgq7IMAAAAAAAAAAAAAARQnAQ =560x399)

几点说明：

- `微应用配置平台`，可基于 `MidwareName.microApp` 实现个性化的获取与配置处理，也可以基于 `StartOptions.remoteUrl` 指定获取配置的远程 URL；
- `代理/调试平台`，可基于 `MidwareName.proxyEntry` 实现。既可以用本地缓存实现，也可以使用远程的代理配置服务。从而做到微应用开发时，及时看到集成后的效果；
- `跨域服务`，自行搭建服务，然后基于 `MidwareName.urlOption` 中的 `crossRule` 接入；
- `可视化搭建平台`，目前流行的可拖拽创建页面，也可以轻松集成到微前端体系中；

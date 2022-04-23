---
sidebarDepth: 2
---

# 官方中间件

## @satumjs/simple-midwares

[https://www.npmjs.com/package/@satumjs/simple-midwares](https://www.npmjs.com/package/@satumjs/simple-midwares)

一些简单中间件的实现集合。包含了对**缓存、沙箱、css 隔离、获取挂载 dom、路由协调**的实现。

- `simpleCacheMidware` 简单的文件内容缓存，会缓存获取过的 js/css 文件内容
- `simpleSandboxMidware` 简单的沙箱，会执行微应用的脚本
- `simpleCssScopeMidware` 简单的 css scope 实现，会处理 css 规则增加 scope
- `mountNodeMidware` 获取挂载 dom 节点，会响应 dom 变化，直到成功获取
- `interceptorMidware` vue/react 路由协调，会为不同的微应用分发不同的路径

## @satumjs/midware-single-spa

[https://www.npmjs.com/package/@satumjs/midware-single-spa](https://www.npmjs.com/package/@satumjs/midware-single-spa)

对 `single-spa` 做了一层封装，可以利用其 url 变化，协调微应用加/卸载的能力。

## @satumjs/midware-thead-occ

[https://www.npmjs.com/package/@satumjs/midware-thead-occ](https://www.npmjs.com/package/@satumjs/midware-thead-occ)

针对 occ 网站业务，封装了一个中间件。除了借用 `@satumjs/simple-midwares` 的一些能力外，重点实现了**浏览器 nosql 缓存机制、代码处理**。

## @satumjs/midware-qiankun-sandbox

基于 `qiankun` 包实现，完全借用了 `qiankun` 的沙箱能力。

## @satumjs/midware-sandbox

基于 iframe 实现的沙箱，支持**严格的脚本运行环境**，会把挂载节点视作虚拟 BODY，脚本里**对 dom 元素的操作会严格限制在虚拟 BODY 范围内**。并且多实例场景下，**不阉割沙箱能力无缝支持 Vite**。

## @satumjs/midware-microcode

更强大的运行时源码改写能力。

## @satumjs/midware-cachecode

更强大的源码缓存能力。

## @satumjs/midware-interceptor

更强大的路由协调能力。

## @satumjs/midware-wc-sandbox

基于 webComponents 实现的沙箱。规划中...

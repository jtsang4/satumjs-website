---
sidebarDepth: 2
---

## 什么是中间件？

> 维基百科

中间件（英语：Middleware），是提供系统软件和应用软件之间连接的软件，以便于软件各部件之间的沟通，特别是应用软件对于系统软件的集中的逻辑，在现代信息技术应用框架如 Web 服务、面向服务的体系结构等中应用比较广泛。如数据库、Apache 的 Tomcat，IBM 公司的 WebSphere，BEA 公司的 WebLogic 应用服务器，东方通公司的 Tong 系列中间件，以及 Kingdee 公司的等都属于中间件。

### 中间件的作用

- 将具体业务和底层逻辑解耦的装置。
- 数据从底层到应用端的中转站。

## SatumJS 中间件

利用微内核暴露的流程某处节点，处理微应用从激活到渲染整个流程中某处的数据/逻辑，或配置某个设置/类，这种**函数、配置或类**即为 `SatumJS` 的中间件。

流程节点详解见[下篇](/midware/flow-nodes)

### 实现一个中间件

```ts
import { MidwareSystem, IMicroApp, NextFn } from "@satumjs/types";

export function simpleMidware(system: MidwareSystem, microApps: IMicroApp[], next: NextFn) {
  system.set(MidwareName.code, (source: string, fileUrl: string) => {
    // 改写获取到的 css 文件内容，统一输出成 body 规则
    if (fileUrl.includes(".css")) {
      return "body { font-size: 12px; color: red; }";
    }
    return source;
  });
  next();
}
```

### 中间件聚合

支持在中间件中调用其他中间件，可以聚合成一个更完善的中间件。

```ts {12}
import { MidwareSystem, IMicroApp, NextFn } from "@satumjs/types";
import { simpleCssScopeMidware } from "@satumjs/simple-midwares";

export function simpleMidware(system: MidwareSystem, microApps: IMicroApp[], next: NextFn) {
  // 当前中间件的逻辑
  system.set(MidwareName.code, (source: string, fileUrl: string) => {});
  // 调用其他中间件
  system.use(simpleCssScopeMidware, system.options);
  next();
}
```

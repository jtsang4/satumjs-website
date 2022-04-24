---
home: true
heroImage: https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ
tagLine: satumjs
tagline: 💫 面向多实例集成、功能可插拔的微前端框架
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 微内核
    details: 支持中间件、插件机制，可以集成其他微前端框架，和做有意义的扩展。
  - title: 开箱即用
    details: 只需要引入 @satumjs/core，配置微应用的激活规则后即可看到效果。
  - title: 集成能力强
    details: 支持所有的外部应用无需任何适配代码，就能无缝地集成。

footer: Satumjs ❤️ you
---

# 📦 安装

```bash
$ yarn add @satumjs/core  # or npm i @satumjs/core -S
```

# 🔨 使用

```js
import { register, start } from '@satumjs/core';

// 注册微应用
register([
  {
    name: 'reactApp',
    entry: 'http://localhost:8000',
    rules: {
      rule: '/',
      container: '#mountNode',
    },
  },
]);

// 启动
start();
```

或者使用**远程的微应用配置**，可以直接启动：

```js {3}
import { start } from '@satumjs/core';
start({
  remoteUrl: 'https://remote.test/micro-app-configs.json',
});
```

更多示例请参考：[https://github.com/satumjs/examples](https://github.com/satumjs/examples)

# 社区

github：[https://github.com/satumjs](https://github.com/satumjs)

| 微信群                                  | 钉群                                     |
| --------------------------------------- | ---------------------------------------- |
| ![](./public/webchat0424.jpeg =200x229) | ![](./public/dingtalk0424.jpeg =200x202) |

其他渠道建设中，欢迎关注或参与~

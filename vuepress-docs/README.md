---
home: true
heroImage: https://gw.alipayobjects.com/mdn/rms_edced6/afts/img/A*KfcRTYnC4eoAAAAAAAAAAAAAARQnAQ
tagLine: satumjs
tagline: 💫 面向未来更多场景的下一代微前端框架
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

更多示例请参考：[https://github.com/satumjs/examples](https://github.com/satumjs/examples)

# 社区

github：[https://github.com/satumjs](https://github.com/satumjs)

其他渠道建设中，欢迎参与或关注~

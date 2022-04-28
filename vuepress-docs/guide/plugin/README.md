---
sidebarDepth: 2
---

## 内置的钩子

- `fileLoadStart`：文件开始请求获取时触发
- `fileOriginSource`：文件内容获取后触发
- `fileMicroSource`：文件内容改写后触发
- `fileCacheInfo`：文件被缓存后触发
- `currentAppChains`：url 变化时，重新计算**微应用依赖链**后触发
- `currentAppRequests`：微应用执行加载时触发，所有请求都会在 `requests` 里罗列

可用于调试**相关数据，记录日志**等。

## 插件小示例

```ts
import { PluginSystem, PluginEvent } from '@satumjs/core';

export function testPlugin(sys: PluginSystem) {
  sys.event(PluginEvent.fileOriginSource, (detail) => {
    console.log('--------', detail.file);
  });
}
```

## 更多使用场景

期待你的参与和探索...

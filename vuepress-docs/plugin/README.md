---
sidebarDepth: 2
---

# 插件

## 微内核中提供的钩子

- `fileOriginSource`： 文件内容获取后触发
- `fileMicroSource`： 文件内容改写后触发
- `fileCacheDB`： 文件缓存后触发
- `currentAppChains`： url 变化时，微应用依赖链重新计算后触发

可用于调试相关数据，记录日志等。

## 插件示例

```ts
import { PluginSystem, PluginEvent } from '@satumjs/core';

export function testPlugin(sys: PluginSystem) {
  sys.event(PluginEvent.fileOriginSource, (detail) => {
    console.log('--------', detail.appName, detail.data);
  });
}
```

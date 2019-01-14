# MaculaUI 使用说明

## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i -S macula-ui
```

## 使用

### 引入 MaculaUI

你可以引入整个 MaculaUI，或是根据需要仅引入部分组件。

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import MaculaUI from 'macula-ui';
import App from './App.vue';

import 'macula-ui/dist/macula-cloud-ui.css';

Vue.use(MaculaUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 MaculaUI 的引入。需要注意的是，样式文件需要单独引入。

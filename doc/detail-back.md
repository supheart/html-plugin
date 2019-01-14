## DetailBack 返回

用于详情页返回上一页，主要放在 header 上

### 基础用法

返回按钮的基础用法

:::demo

```html
<template>
  <mc-detail-back></mc-detail-back>
</template>
```

:::

### 设置特定返回提示

返回按钮默认显示`返回`

:::demo 你可以使用`text`属性来修改文字提示

```html
<template>
  <mc-detail-back text="上一页"></mc-detail-back>
  <mc-detail-back text=""></mc-detail-back>
</template>
```

:::

### 返回按钮的全局使用

可以添加到全局 Layout 下，根据当前路由判断是否需要返回按钮

:::demo

```html
<template>
  <div id="app">
    <div class="header"><mc-detail-back v-show="showBack"></mc-detail-back></div>
    <router-view></router-view>
  </div>
</template>
<script>
  const noBackPaths = ['/', 'some', 'path'];
  export default {
    name: 'app',
    computed: {
      showBack() {
        return noBackPaths.indexOf(this.$route.path) === -1;
      }
    }
  };
</script>
```

:::

### 注意事项

- DetailBack 组件的返回是基于`vue-router`的`back()`，在使用的时候需要注意 Router 的引入

### Attributes

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 返回提示 | string | —      | 返回   |

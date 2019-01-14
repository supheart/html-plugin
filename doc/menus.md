## Menus 左侧菜单栏

左侧菜单栏

### 基础用法

返回按钮的基础用法

:::demo

```html
<template>
  <mc-menu :menus="menus" :is-collapse="!sidebarOpened"></mc-menu>
</template>
<script>
  export default {
    data() {
      return {
        sidebarOpened: getItem('openSidebar')
      };
    },
    computed: {
      menus() {
        return this.$router.options.routes;
      }
    }
  };
</script>
```

:::

### 注意事项

- `Menus` 组件的跳转功能依赖于`vue-router`的`<route-link>`，在使用的时候需要注意 Router 的引入

### Attributes

| 参数       | 说明     | 类型    | 可选值 | 默认值 |
| ---------- | -------- | ------- | ------ | ------ |
| menus      | 菜单     | array   | —      | []     |
| nextTitle  | 副标题   | string  | —      | —      |
| isCollapse | 是否折叠 | boolean | —      | false  |

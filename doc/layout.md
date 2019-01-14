## Layout 布局

组件描述

### 基础用法

平台的基本布局

:::demo

```html
<template>
  <mc-layout :sidebar-open="openSidebar" :loading="loading">
    <mc-sidebar></mc-sidebar>
    <mc-content>
      <mc-header></mc-header>
      <mc-content></mc-content>
    </mc-content>
  </mc-layout>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        loading: false
      };
    },
    computed: {
      openSidebar() {
        return getItem('openSidebar') || true;
      }
    },
    async created() {
      this.lodaing = true;
      await this.initData();
      this.loading = false;
    }
  };
</script>
```

:::

### Attributes

| 参数             | 说明                                       | 类型    | 可选值    | 默认值 |
| ---------------- | ------------------------------------------ | ------- | --------- | ------ |
| sidebarOpen      | 侧边菜单是否展开                           | boolean | —         | false  |
| withoutAnimation | 去除动画                                   | boolean | —         | false  |
| device           | 当前设备类型（根据宽度判断）               | string  | pc/mobile | pc     |
| loading          | 全局 loading，展示的数据是否已全部加载完成 | boolean | —         | false  |

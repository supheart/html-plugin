## HeaderContent 顶部内容栏

HeaderContent 组件包含了 左侧的 侧边栏收缩按钮， 右侧有用户名称及退出登录功能，也为拓展功能预留了位置

### 基础用法

HeaderContent 一般配合 Header 一起使用，亦可单独使用

:::demo

```html
<template>
  <mc-header>
    <mc-header-content
      :username="user.name"
      :sidebar-open="sidebarOpen"
      @logout="handleLogout"
      @toggle-side-bar="toggleSideBar"
    ></mc-header-content>
  </mc-header>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          name: 'admin',
          mail: 'admin@mail.com'
        },
        sidebarOpen: getItem('openSidebar') || true
      };
    },
    methods: {
      handleLogout() {
        console.log('on logout click');
      },
      toggleSideBar(isOpen) {
        setItem('openSidebar', isOpen);
      }
    }
  };
</script>
```

:::

### Attributes

| 参数               | 说明                                 | 类型    | 可选值 | 默认值  |
| ------------------ | ------------------------------------ | ------- | ------ | ------- |
| username           | 当前登录的用户名称                   | string  | —      | —       |
| isShowHamburger    | 是否展示 sidebar 触发器（Hamburger） | boolean | —      | `false` |
| isShowSetting      | 当前登录的用户名称                   | boolean | —      | `false` |
| isShowNotification | 当前登录的用户名称                   | boolean | —      | `false` |
| sidebarOpen        | 用于 Hamburger 判断是否展开 sidebar  | boolean | —      | `false` |

### Events

| 事件名称      | 说明                            | 回调参数         |
| ------------- | ------------------------------- | ---------------- |
| logout        | 响应用户点击`退出登录`事件      | —                |
| toggleSideBar | 响应用户 触发 sidebar 伸缩 事件 | (isOpen:boolean) |

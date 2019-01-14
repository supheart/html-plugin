## Breadcrumb 面包屑

根据路由显示当前页面的路径，快速返回之前的任意页面。

### 基础用法

:::demo

```html
<mc-breadcrumb></mc-breadcrumb>
```

:::

### 使用 > 作为 下级分隔符

`Breadcrumb`组件 提供了一个`separator`属性，在`mc-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<mc-breadcrumb separator=">"></mc-breadcrumb>
```

### 路由的写法

```javascript
//routes.js
export const routes = [
  {
    path: '/page-a',
    name: 'PageA', // 必要字段 相对于 ID
    meta: { title: 'Page A' }, // title 就是 该节点的标题
    component: () => import('@/views/pageA'),
    // redirect: 'noredirect'  如果设置了 noredirect, 点击该节点的面包屑 就不会redirect
    hidden: false // 设置为 true, 则会隐藏该节点的面包屑
  },
  {
    path: '/page-b',
    name: 'PageB',
    meta: { title: 'Page B' },
    component: () => import('@/views/pageB'),
    children: [
      {
        path: 'page-b-1',
        name: 'PageB1',
        meta: { title: 'Page B-1', icon: '' },
        component: () => import('@/views/pageB1')
      }
    ]
  }
];
```

### 注意事项

- `Breadcrumb` 组件的强依赖于`vue-router`，在使用的时候需要注意 Router 的注入

### Attributes

| 参数            | 说明             | 类型   | 可选值 | 默认值                                                |
| --------------- | ---------------- | ------ | ------ | ----------------------------------------------------- |
| indexRoute      | 顶级路由         | object | —      | { path: "/", meta: { title: "首页" }, name: "index" } |
| separator       | 分隔符           | string | —      | 斜杠'/'                                               |
| separator-class | 图标分隔符 class | string | —      | —                                                     |

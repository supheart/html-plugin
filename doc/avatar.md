## Avatar 头像

用于用户头像信息展示。

### 基础用法

基础的头像用法。

:::demo 直接设置`src`，指定头像地址

```html
<template>
  <mc-avatar src="assets/images/avatar.png"></mc-avatar>
</template>
```

:::

### 文字头像

头像可以不设置图像，直接使用文字。

:::demo 你可以使用`color`属性来定义头像的背景颜色。

```html
<template>
  <mc-avatar>admin</mc-avatar>
  <mc-avatar color="#ccc">admin</mc-avatar>
</template>
```

:::

### 圆形头像

Avatar 组件可以设置`radius`属性改变圆角大小

:::demo 当设置为**50%**的时候，就会变成圆，为**0**是就是方形

```html
<template>
  <mc-avatar radius="50%" src="assets/images/avatar.png"></mc-avatar>
</template>
```

:::

### 不同尺寸

Avatar 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<template>
  <mc-avatar>admin</mc-avatar>
  <mc-avatar size="medium">admin</mc-avatar>
  <mc-avatar size="small">admin</mc-avatar>
  <mc-avatar size="mini">admin</mc-avatar>
</template>
```

:::

### Attributes

| 参数   | 说明                       | 类型   | 可选值                        | 默认值  |
| ------ | -------------------------- | ------ | ----------------------------- | ------- |
| src    | 图片链接                   | string | —                             | —       |
| size   | 尺寸                       | string | medium /normal / small / mini | normal  |
| radius | 按钮的方圆角样式 0,50%     | string | —                             | 5px     |
| color  | 文字头像背景颜色, HEX 格式 | string | —                             | #09b1e5 |

#### 待优化

- 两个并起来 有对不齐
- 应该差了个 text-color
- 用图片时，没有底色
- 设置文字时，文字超了

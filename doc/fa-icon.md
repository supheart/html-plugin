## FaIcon fontawesome 图标

fontawesome 图标的 Vue 组件

### 基础用法

通过 `icon` 属性指定对应的图标,

:::demo

```html
<template>
  <mc-fa-icon icon="user" />
</template>
```

:::

### 设置图标大小

组件可以设置 `size` 不同的值，达到改变图标大小的效果

:::demo

```html
<template>
  <mc-fa-icon icon="spinner" size="xs" />
  <mc-fa-icon icon="spinner" size="lg" />
  <mc-fa-icon icon="spinner" size="6x" />
</template>
```

:::

### 使用其他类型图标

由于组件默认只添加了 `solid` 类型的图标，若需使用其他类型图标（如：`brands`,`regular`,`light`）,则要自行添加

```html
<template>
  <mc-fa-icon :icon="['fab','docker']" />
</template>
<script>
  import { FaIcon } from 'macula-cloud-ui';
  import { faDocker } from '@fortawesome/free-brands-svg-icons';
  FaIcon.addOne(faDocker);

  export default {
    name: 'FaIconDemo'
  };
</script>
```

### Attributes

| 参数       | 说明                                                                          | 类型         | 可选值                                | 默认值 |
| ---------- | ----------------------------------------------------------------------------- | ------------ | ------------------------------------- | ------ |
| icon       | 图标名称，具体取值范围请参考[这里](//fontawesome.com/icons?d=gallery&s=solid) | string/array | —                                     | —      |
| size       | 图标大小                                                                      | string       | 大小`lg`,`xs`,`sm` 或者倍数`1x`~`10x` | —      |
| pull       | 浮动                                                                          | string       | `left`, `right`                       | —      |
| fixedWidth | 宽度匹配，匹配容器宽度                                                        | boolean      | —                                     | false  |
| border     | 是否有边框                                                                    | boolean      | —                                     | false  |
| rotation   | 旋转                                                                          | number       | 90/180/270                            | null   |
| spin       | 是否启用旋转动画                                                              | boolean      |                                       | false  |
| pulse      |                                                                               | boolean      |                                       | false  |
| flip       |                                                                               | string       | `horizontal`, `vertical`, `both`      | —      |

具体使用 请查看[FontAwesome 官方使用说明](//fontawesome.com/how-to-use/on-the-web/using-with/vuejs)及其[GitHub 仓库](//github.com/FortAwesome/vue-fontawesome)

### Methods

| 方法名 | 说明          | 参数                  |
| ------ | ------------- | --------------------- |
| addOne | 添加单个 Icon | Function(icon:object) |
| addAll | 添加一组 Icon | Function(icons:array) |

## Example 模板

组件描述

### 基础用法

返回按钮的基础用法

:::demo

```html
<template>
  <mc-example></mc-example>
</template>
```

:::

### 注意事项

- 注意事项 1

### Attributes

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 返回提示 | string | —      | 返回   |

### Prop

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| text | 返回提示 | string | —      | 返回   |

### Events

| 事件名称 | 说明                   | 回调参数                                                   |
| -------- | ---------------------- | ---------------------------------------------------------- |
| event    | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Methods

| 方法名 | 说明 | 参数                    |
| ------ | ---- | ----------------------- |
| func1  |      | Function(parmas:object) |
|        |      |                         |
## Navber 顶部导航栏

顶部导航栏，不同于左侧菜单栏，顶部导航栏超过一定宽度就会自动折叠起来

### 基础用法

:::demo

```html
<template>
  <mc-navbar :list="navs" @select="handleSelect"></mc-navbar>
</template>
<script>
  export default {
    data() {
      return {
        navs: [
          { id: 1001, name: '绩效管理系统', shortName: 'PMS' },
          { id: 1002, name: '', shortName: '' },
          { id: 1003, name: '', shortName: '' },
          { id: 1004, name: '', shortName: '' },
          { id: 1005, name: '', shortName: '' },
          { id: 1006, name: '', shortName: '' },
          { id: 1007, name: '', shortName: '' }
        ]
      };
    },
    methods: {
      handleSelect(key) {
        console.log('selected: %s', key);
      }
    }
  };
</script>
```

:::

### 更换导航菜单名称

:::demo

```html
<template>
  <mc-navbar :list="navs" @select="handleSelect" :prop="navProps"></mc-navbar>
</template>
<script>
  export default {
    data() {
      return {
        navProps:{
          key: 'id',
          name: 'shortName'
        }
        navs: [
          { id: 1001, name: '绩效管理系统', shortName: 'PMS' },
          { id: 1002, name: '人力资源管理中心', shortName: 'HR' },
          { id: 1003, name: '人才测评鉴定系统', shortName: '' },
          { id: 1004, name: '销售云数据分析系统', shortName: '' },
          { id: 1005, name: '用户管理平台', shortName: '' },
          { id: 1006, name: '', shortName: '' },
          { id: 1007, name: '', shortName: '' }
        ]
      };
    },
    methods: {
      handleSelect(key) {
        console.log('selected: %s', key);
      }
    }
  };
</script>
```

:::

### Attributes

| 参数      | 说明                                 | 类型   | 可选值 | 默认值  |
| --------- | ------------------------------------ | ------ | ------ | ------- |
| itemWidth | 菜单宽度，用于决定顶部导航折叠的阈值 | number | —      | 120(px) |
| prop      | 配置选项，具体看下表                 | object | —      | —       |
| list      | 导航菜单                             | array  | —      | —       |

### Prop

| 参数 | 说明         | 类型   | 可选值 | 默认值 |
| ---- | ------------ | ------ | ------ | ------ |
| key  | 唯一的字段名 | string | —      | id     |
| name | 显示的字段名 | string | —      | name   |

### Events

| 事件名称 | 说明                     | 回调参数 |
| -------- | ------------------------ | -------- |
| select   | 任一导航菜单被点击后触发 | key      |

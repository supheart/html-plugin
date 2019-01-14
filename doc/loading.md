## Loading 加载

加载数据时显示动效。

### 区域加载

在表格等容器中加载数据时显示。

:::demo Loading 有两种调用方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 DOM 中的 body 上。

```html
<template>
  <mc-table v-loading="loading" :data="tableData" style="width: 100%">
    <mc-table-column prop="date" label="日期" width="180"></mc-table-column>
    <mc-table-column prop="name" label="姓名" width="180"></mc-table-column>
    <mc-table-column prop="address" label="地址"></mc-table-column>
  </mc-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
        ],
        loading: true
      };
    }
  };
</script>
```

:::

### 整页加载

页面数据加载时显示。

:::demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。

```html
<template>
  <mc-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">指令方式 </mc-button>
  <mc-button type="primary" @click="openFullScreen2">服务方式 </mc-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      };
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  };
</script>
```

:::

### Options

| 参数        | 说明                                                                                                                                       | 类型          | 可选值 | 默认值        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------ | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string | —      | document.body |
| body        | 同 `v-loading` 指令中的 `body` 修饰符                                                                                                      | boolean       | —      | false         |
| fullscreen  | 同 `v-loading` 指令中的 `fullscreen` 修饰符                                                                                                | boolean       | —      | true          |
| lock        | 同 `v-loading` 指令中的 `lock` 修饰符                                                                                                      | boolean       | —      | false         |
| text        | 显示在加载图标下方的加载文案                                                                                                               | string        | —      | —             |
| spinner     | 自定义加载图标类名                                                                                                                         | string        | —      | —             |
| background  | 遮罩背景色                                                                                                                                 | string        | —      | —             |
| customClass | Loading 的自定义类名                                                                                                                       | string        | —      | —             |

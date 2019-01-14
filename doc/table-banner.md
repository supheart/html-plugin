## TableBanner 表格拓展栏

TableBanner 组件，为 Table 组件提供了统一的日常操作的按钮样式及其位置，

### 基础用法

TableBanner 提供了日常增删改操作的功能按键位置

:::demo

```html
<template>
  <mc-content>
    <mc-table-banner ref="tableBanner" :add="add" :del="del"></mc-table-banner>
    <mc-table :data="tableData">
      <mc-table-column v-for="item in colData" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
        ],
        colData: [
          { key: 'date', text: '日期', show: true },
          { key: 'name', text: '名字', show: true },
          { key: 'address', text: '地址', show: true }
        ]
      };
    }
  };
</script>
```

:::

### 带有搜索框

将`showSearch`设置为**true**,或者直接传入`search`方法，就会在右侧显示出搜索框

:::demo

```html
<template>
  <mc-content>
    <mc-table-banner ref="tableBanner" :add="add" :del="del" :search="search"></mc-table-banner>
    <mc-table :data="tableData">
      <mc-table-column v-for="item in colData" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
        ],
        colData: [
          { key: 'date', text: '日期', show: true },
          { key: 'name', text: '名字', show: true },
          { key: 'address', text: '地址', show: true }
        ]
      };
    },
    methods: {
      async search(keyword) {
        const result = await this.getList({ keyword });
        this.tableData = result.list;
      }
    }
  };
</script>
```

:::

### 配置可展示字段

将`showSetting`设置为**true**,或者直接将字段数据传入`colData`，就会在右侧显示出设置按钮

:::demo

```html
<template>
  <mc-content>
    <mc-table-banner ref="tableBanner" :add="add" :del="del" :col-data="colData"></mc-table-banner>
    <mc-table :data="tableData">
      <mc-table-column v-for="item in visibleCol" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          { id: 1, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
          { id: 2, date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
          { id: 3, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
          { id: 4, date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
        ],
        colData: [
          { key: 'id', text: 'ID', show: false },
          { key: 'date', text: '日期', show: true },
          { key: 'name', text: '名字', show: true },
          { key: 'address', text: '地址', show: true }
        ]
      };
    },
    computed:{
      visibleCol(){
        return this.colData.filter(col => col.show)
      }
    }
    methods: {
      async search(keyword) {
        const result = await this.getList({ keyword });
        this.tableData = result.list;
      }
    }
  };
</script>
```

:::

### 高级搜索

将`showHigherSearch`设置为**true**,就会在右侧显示出高级搜索按钮

:::demo

```html
<template>
  <mc-content>
    <mc-table-banner ref="tableBanner" :col-data="colData">
      <div slot="search-wrap">
        <mc-form :inline="true" :model="searchForm" size="mini">
          <mc-form-item label="名称">
            <mc-input
              v-model="searchForm.name"
              placeholder="名称"
              @keyup.enter.native="onSearchSubmit"
            />
          </mc-form-item>
          <mc-form-item label="地址">
            <mc-input
              v-model="searchForm.address"
              placeholder="地址"
              @keyup.enter.native="onSearchSubmit"
            />
          </mc-form-item>
          <mc-form-item>
            <mc-button type="primary" @click="onSearchSubmit">查询</mc-button>
          </mc-form-item>
        </mc-form>
      </div>
    </mc-table-banner>
    <mc-table :data="tableData">
      <mc-table-column v-for="item in visibleCol" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  const tableData = [
    { id: 1, date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
    { id: 2, date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' },
    { id: 3, date: '2016-05-01', name: '王小虎', address: '上海市普陀区金沙江路 1519 弄' },
    { id: 4, date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1516 弄' }
  ];
  export default {
    data() {
      return {
        tableData,
        colData: [
          { key: 'id', text: 'ID', show: false },
          { key: 'date', text: '日期', show: true },
          { key: 'name', text: '名字', show: true },
          { key: 'address', text: '地址', show: true }
        ],
        searchForm: {
          name: '',
          address: ''
        }
      };
    },
    methods: {
      const { name, address } = this.searchForm;
      let result = [...tableData];
      for(let i in this.searchForm) {
        result = result.filter(item => item[i].indexOf(this.searchForm[i]) > -1);
      }
      this.tableData = result;
    }
  };
</script>
```

:::

### Attributes

| 参数             | 说明                                                                      | 类型                     | 可选值 | 默认值 |
| ---------------- | ------------------------------------------------------------------------- | ------------------------ | ------ | ------ |
| showHigherSearch | 是否展示高级搜索 ，若有传入`edit` 则直接为`true`                          | boolean                  | —      | false  |
| showSetting      | 是否展示设置按钮，用于表格展示字段筛选 ，若有传入`colData` 则直接为`true` | boolean                  | —      | false  |
| colData          | 表格字段数据                                                              | array                    | —      | []     |
| add              | 添加数据方法, 有该方法会显示按钮，没有就不会  | Function()               | —      | —      |
| edit             | 修改方法, 有该方法会显示按钮，没有就不会  | Function(rowData:any)    | —      | —      |
| del              | 删除方法, 有该方法会显示按钮，没有就不会  | Function()               | —      | —      |
| search           | 搜索方法, 有该方法会显示搜索框，没有就不会  | Function(keyword:string) | —      | —      |
| refresh          | 刷新表格, 有该方法会显示刷新按钮，没有就不会  | Function()               | —      | —      |

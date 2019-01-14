## TreeTable 树状表格

树状表格用于展示具有名称层级关系的数据结构

### 基础用法

:::demo

```html
<template>
  <mc-content>
    <mc-tree-table tree-column-label="名称" tree-column="name" :data="tableData">
      <mc-table-column prop="menuUrl" label="链接"></mc-table-column>
    </mc-tree-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            id: 45,
            name: '物料管理',
            menuUrl: null,
            parentId: 0,
            depth: 0,
            parentList: [],
            children: [
              {
                id: 46,
                name: '物料列表',
                menuUrl: '/goods',
                parentId: 45,
                parentList: [45],
                depth: 1
              }
            ]
          }
        ];


      };
    }
  };
</script>
```

:::

基础属性,方法及事件 跟 `Tabel` 一致，以下是额外的属性

### Attributes

| 参数            | 说明           | 类型    | 可选值 | 默认值 |
| --------------- | -------------- | ------- | ------ | ------ |
| hasCheck        | 是否可勾选     | boolean | —      | false  |
| treeColumn      | 可折叠的字段名 | string  | —      | —      |
| treeColumnLabel | 字段名显示     | string  | —      | —      |
| expandAll       | 是否全部展开   | boolean | —      | false  |

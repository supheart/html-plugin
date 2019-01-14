## TableNavbar 表格导航栏

用于分流表格数据。当右侧表格数据过多，而且能按一定规律分类时可用，导航分两种：`list`,`tree`，一般使用`list`类型即可，有明显层级结构的可以使用`tree`类型

### 分类列表

:::demo

```html
<template>
  <mc-content>
    <mc-table-navbar
      :list="deptList"
      :firstKey="firstKey"
      :total="deptTotal"
      :has-search="true"
      title="部门列表"
      @select-item="handleNodeChange"
      @get-page="getDeptPage"
    />
    <mc-table :data="tableData">
      <mc-table-column v-for="item in colData" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        deptList: [],
        deptTotal: 0,
        firstKey: 0,
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
    methods{
      async handleNodeChange(dept){
        const result = await this.getUsers({deptId:dept.id});
        this.tableData = result.list
      },
      async getDeptPage({ page, limit, keyword }){
        const { list, total } = await this.getDeptList({ page, keyword, pageSize:limit })
        this.deptTotal = total;
        this.deptList = list;
        const [firstDept] = list
        if(firstDept){
          this.firstKey = firstDept.id
        }
      }
    }
  };
</script>
```

:::

### 分类树

返回按钮的基础用法

:::demo

```html
<template>
  <mc-content>
    <mc-table-navbar
      type="tree"
      :load="loadDepartment"
      :list="depts"
      :firstKey="firstKey"
      :total="deptTotal"
      title="部门列表"
      @select-item="handleNodeChange"
      @get-page="getDeptPage"
    />
    <mc-table :data="tableData">
      <mc-table-column v-for="item in colData" :key="item.key" :prop="item.key" :label="item.text"></mc-table-column>
    </mc-table>
  </mc-content>
</template>
<script>
  export default {
    data() {
      return {
        deptList: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [{ label: '三级 1-1-1' }]
              }
            ]
          },
          {
            label: '一级 2',
            children: [
              { label: '二级 2-1', children: [{ label: '三级 2-1-1' }] },
              { label: '二级 2-2', children: [{ label: '三级 2-2-1' }] }
            ]
          },
          {
            label: '一级 3',
            children: [
              { label: '二级 3-1', children: [{ label: '三级 3-1-1' }] },
              { label: '二级 3-2', children: [{ label: '三级 3-2-1' }] }
            ]
          }
        ],
        deptTotal: 0,
        firstKey: 0,
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
    methods{
       async loadDepartment(node, resolve){
         ...构建树结构...
      },
      async handleNodeChange(dept){
        const result = await this.getUsers({deptId:dept.id});
        this.tableData = result.list
      },
      async getDeptPage({ page, limit, keyword }){
        const { list, total } = await this.getDeptList({ page, keyword, pageSize:limit })
        this.deptTotal = total;
        this.deptList = list;
        const [firstDept] = list
        if(firstDept){
          this.firstKey = firstDept.id
        }
      }
    }
  };
</script>
```

:::

### Attributes

| 参数      | 说明                                             | 类型                    | 可选值        | 默认值                        |
| --------- | ------------------------------------------------ | ----------------------- | ------------- | ----------------------------- |
| type      | 导航类型                                         | string                  | `list`/`tree` | `list`                        |
| prop      | 返回提示                                         | object                  | —             | { children, label, id, name } |
| title     | 导航栏标题                                       | string                  | —             | —                             |
| list      | 分类数据                                         | array                   | —             | []                            |
| firstKey  | 首选项                                           | number                  | —             | 0                             |
| total     | 数据总条数                                       | number                  | —             | 0                             |
| hasSearch | 是否可搜索                                       | boolean                 | —             | false                         |
| hasPage   | 是否可分页                                       | boolean                 | —             | true                          |
| load      | 分类数据异步加载方法（只有当类型为`tree`时有效） | Function(node, resolve) | —             | —                             |

### Events

| 事件名称   | 说明                   | 回调参数                         |
| ---------- | ---------------------- | -------------------------------- |
| getPage    | 任一表单项被校验后触发 | {page, limit, keyword}, Callback |
| selectItem | 当点击某项时触发事件   | item, Callback                   |

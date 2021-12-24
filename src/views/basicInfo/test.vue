<!-- 组件使用测试页 -->
<template>
  <div class="container">
    <a-combo-grid
      v-model="value"
      labelField="name"
      :columns="columns"
      :tableData="tableData"
      style="width: 300px"
      tableWidth="600px"
    ></a-combo-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      columns: [
        { title: '证件号', dataIndex: 'id' },
        { title: '姓名', dataIndex: 'name' },
        { title: '年龄', dataIndex: 'age' },
        { title: '地址', dataIndex: 'address' }
      ],
      tableData: [
        { id: 1, name: '路飞', age: '16' },
        { id: 2, name: '索隆', age: '16' },
        { id: 3, name: '娜美', age: '14' },
        { id: 4, name: '乌索普', age: '14' },
        { id: 5, name: '山治', age: '14' },
        { id: 6, name: '乔巴', age: '14' },
        { id: 7, name: '罗宾', age: '14' },
        { id: 8, name: '弗兰奇', age: '14' },
        { id: 9, name: '布鲁克', age: '14' },
        { id: 10, name: '甚平', age: '14' }
      ]
    }
  },
  components: {}
}
</script>

<style></style>

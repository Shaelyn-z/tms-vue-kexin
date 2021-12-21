<!-- 车辆轮胎管理 -->
<template>
  <div class="container">
    <draggable-table
      :columns="columns"
      :tableData="tableData"
    ></draggable-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          field: 'name',
          title: 'Name',
          fixed: 'left',
          minWidth: 200,
          sortable: true,
          cellRender: { name: 'DictCell', dictCode: 'purchaseTargetState' }
        },
        { field: 'role', title: 'Role', minWidth: 220 },
        { field: 'sex', title: 'Sex', minWidth: 100 },
        { field: 'age', title: 'Age', minWidth: 150, sortable: true },
        { field: 'date3', title: 'Date', minWidth: 200 },
        {
          field: 'address',
          title: 'Address',
          minWidth: 200,
          showOverflow: true
        }
      ],
      tableData: [
        {
          id: 10001,
          name: 1,
          nickname: 'T1',
          role: 'Develop',
          sex: 'Man',
          age: 28,
          address: 'Shenzhen'
        },
        {
          id: 10002,
          name: 0,
          nickname: 'T2',
          role: 'Test',
          sex: 'Women',
          age: 22,
          address: 'Guangzhou'
        },
        {
          id: 10003,
          name: 3,
          nickname: 'T3',
          role: 'PM',
          sex: 'Man',
          age: 32,
          address: 'Shanghai'
        },
        {
          id: 10004,
          name: 1,
          nickname: 'T4',
          role: 'Designer',
          sex: 'Women',
          age: 23,
          address: 'Shenzhen'
        },
        {
          id: 10005,
          name: 0,
          nickname: 'T5',
          role: 'Develop',
          sex: 'Women',
          age: 30,
          address: 'Shanghai'
        }
      ]
    }
  }
}
</script>

<style></style>

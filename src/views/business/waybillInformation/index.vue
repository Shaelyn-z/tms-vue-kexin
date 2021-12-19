<!--运单信息-->
<template>
  <div class="container">
    <common-search-collapse ref="searchForm" ></common-search-collapse>
    <div ref="tableOperator"
         class="table-operator">
      <a-button icon="plus"
                type="primary"
                @click="openFormModal()">
        新增
      </a-button>
      <a-button icon="cloud-upload"
                type="primary"
                @click="openFormModal()">
        导入
      </a-button>
      <a-button icon="check"
                type="primary"
                @click="openFormModal()">
        审核
      </a-button>
      <a-button icon="left"
                type="primary"
                @click="openFormModal()">
        弃审
      </a-button>
    </div>
    <a-table :columns="columns"
             row-key="numbers"
             :data-source="data"
             :pagination="pagination"
             :loading="loading"
             @change="handlePaginationChange"
             size="middle"
             :scroll="tableScroll"
             :customRow="customRow"
             bordered>
    </a-table>

  </div>
</template>

<script>
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import CommonSearchCollapse from '@/components/common/CommonSearchCollapse.vue'
export default {
  data () {
    return {
      data: [{
        numbers: 1
      },{
        numbers: 2
      },{
        numbers: 3
      },{
        numbers: 4
      },{
        numbers: 5
      },{
        numbers: 6
      },{
        numbers: 7
      },{
        numbers: 8
      },{
        numbers: 9
      },{
        numbers: 10
      },{
        numbers: 11
      },{
        numbers: 12
      },{
        numbers: 13
      },{
        numbers: 14
      },],
      loading: false,
      columns: tableColumn
    }
  },
  created () {
    console.log(666,this.tableScroll);
    this.$api('viewPlanWaybill', { name: 666 })
  },
  components: { CommonSearchCollapse },
  mixins: [tableMixin],
}
</script>

<style>
</style>
<!--运单信息-->
<template>
  <div class="container">
    <common-search-collapse ref="searchForm"></common-search-collapse>
    <div ref="tableOperator"
         class="table-operator">
      <div>
        <a-button type="primary">
          新增
        </a-button>
        <a-button>装卸货审核</a-button>
        <a-dropdown>
          <a-menu slot="overlay"
                  @click="handleMenuClick">
            <a-menu-item key="1">
              弃审 
              </a-menu-item>
            <a-menu-item key="2">
              生成运费
            </a-menu-item>
            <a-menu-item key="3">
              取消
            </a-menu-item>
            <a-menu-item key="4">
              下载回传连接
            </a-menu-item>
            <a-menu-item key="5">
              提醒司机回传
            </a-menu-item>
            <a-menu-item key="6">
              生成回传信息卡片
            </a-menu-item>
          </a-menu>
          <a-button> 更多操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
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
               <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
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
      }, {
        numbers: 2
      }, {
        numbers: 3
      }, {
        numbers: 4
      }, {
        numbers: 5
      }, {
        numbers: 6
      }, {
        numbers: 7
      }, {
        numbers: 8
      }, {
        numbers: 9
      }, {
        numbers: 10
      }, {
        numbers: 11
      }, {
        numbers: 12
      }, {
        numbers: 13
      }, {
        numbers: 14
      },],
      loading: false,
      columns: tableColumn
    }
  },
  created () {
    console.log(666, this.tableScroll);
    this.$api('viewPlanWaybill', { name: 666 })
  },
  components: { CommonSearchCollapse },
  mixins: [tableMixin],
  methods:{
      handleMenuClick(e) {
      console.log('click', e);
    },
  }
}
</script>

<style>
</style>
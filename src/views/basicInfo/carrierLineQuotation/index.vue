<!-- 承运商线路报价 -->
<template>
  <div class="container">
    <div class="left-list">
      <div class="sub-title">线路列表</div>
      <a-input placeholder="输入关键字搜索..." v-model="searchStr">
        <a-icon slot="prefix" type="search" />
      </a-input>
      <div class="left-list-group">
        <a-radio-group v-model="lineValue" @change="onChange">
          <a-radio
            :style="radioStyle"
            :key="line.key"
            :value="line.key"
            v-for="line in filterLineList"
          >
            {{ line.name }}
          </a-radio>
        </a-radio-group>
      </div>
    </div>
    <div class="right-table">
      <div class="sub-title">客商列表</div>
      <vxe-table
        border
        resizable
        show-overflow
        :data="tableData"
        :edit-config="{ trigger: 'click', mode: 'row' }"
      >
        <vxe-column type="seq" title="序号" width="60"></vxe-column>
        <vxe-column field="name" title="客户名称" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.name" type="text"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="cost" title="运费" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.cost" type="text"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="unit" title="运费单位" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.unit" type="text"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="remark" title="备注" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.remark" type="text"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="operate" title="操作">
          <template #default="{ row }">
            <a-popconfirm title="是否要删除此行？" @confirm="handleDelete(row)">
              <a-link type="danger">删除</a-link>
            </a-popconfirm>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
  </div>
</template>

<script>
import dataSource from './carrierLineMock'
export default {
  name: 'CarrierLineQuotation',
  data() {
    return {
      lineValue: '',
      radioStyle: {
        display: 'block',
        height: '40px',
        lineHeight: '40px'
      },
      searchStr: '',
      lineList: dataSource.list,
      tableData: dataSource.tableData
    }
  },
  computed: {
    // 根据搜索栏输入框值进行过滤
    filterLineList() {
      if (this.searchStr) {
        return this.lineList.filter((item) =>
          item.name.includes(this.searchStr)
        )
      } else {
        return JSON.parse(JSON.stringify(this.lineList))
      }
    }
  },
  methods: {
    onChange() {},
    handleDelete(row) {
      console.log('删除', row)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  .sub-title {
    height: 30px;
    font-size: 14px;
  }
  .left-list {
    width: 400px;
    height: 100%;
    margin-right: 20px;
    .left-list-group {
      margin-top: 10px;
      padding-left: 10px;
      height: calc(100% - 70px);
      border: 1px solid @border-color-base;
      overflow-y: auto;
    }
  }
  .right-table {
    flex: 1;
  }
}
</style>

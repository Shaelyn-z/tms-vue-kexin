<!-- 驾押人员管理 -->
<template>
  <div class="container">
    <div ref="searchForm" id="searchForm">
      <a-form-model
        ref="searchFormModel"
        layout="inline"
        :model="searchFormData"
      >
        <a-form-model-item label="人员类别" prop="custType">
          <common-dict-select
            v-model="searchFormData.custType"
            dictCode="personnelType"
          ></common-dict-select>
        </a-form-model-item>
        <a-form-model-item prop="keywords">
          <template slot="label">
            <a-tooltip placement="right">
              <template slot="title">
                可输入姓名 隶属运营商 手机号 身份证号 发证机关查询
              </template>
              关键字&nbsp;<a-icon type="question-circle" />
            </a-tooltip>
          </template>
          <a-input v-model="searchFormData.keywords"></a-input>
        </a-form-model-item>
        <a-form-model-item label="状态" prop="state">
          <common-dict-select
            v-model="searchFormData.state"
            dictCode="basicDriverState"
          ></common-dict-select>
        </a-form-model-item>
        <a-form-model-item label="录入时间" prop="date">
          <a-range-picker v-model="searchFormData.date"> </a-range-picker>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="queryByForm"> 查询 </a-button>
          <a-button type="primary" @click="resetForm"> 重置 </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div ref="tableOperator" class="table-operator">
      <a-button icon="plus" type="primary" @click="openFormModal()">
        新增
      </a-button>
      <a-button icon="cloud-upload" type="primary" @click="openFormModal()">
        导入
      </a-button>
      <a-button icon="check" type="primary" @click="openFormModal()">
        审核
      </a-button>
      <a-button icon="user" type="primary" @click="openFormModal()">
        生成用户账号
      </a-button>
      <a-button icon="left" type="primary" @click="openFormModal()">
        弃审
      </a-button>
    </div>
    <draggable-table :columns="columns" :tableData="data" class="main-table">
      <template slot="isUse" slot-scope="{ row }">
        <a-switch
          checked-children="启用"
          un-checked-children="禁用"
          :checked="row.isUse === 1"
        />
      </template>
      <template slot="operation" slot-scope="{ row }">
        <a-button @click="openFormModal(row)" size="small">编辑</a-button>
        <a-popconfirm title="确定删除吗？" @confirm="onDelete(row)" disabled>
          <a-button type="danger" size="small"> 删除 </a-button>
        </a-popconfirm>
      </template>
    </draggable-table>
    <driver-modal
      :title="modalTitle"
      :visible.sync="visible"
      :formData="editFormData"
    ></driver-modal>
  </div>
</template>
<script>
import dataSource from './driverMock'
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import DriverModal from './driverModal.vue'
import CommonTable from '@/components/common/CommonTable.vue'
export default {
  name: 'DriverManage',
  data() {
    return {
      searchFormData: {
        custType: '',
        state: '',
        keywords: '',
        date: []
      },
      data: dataSource.list,
      loading: false,
      columns: tableColumn
    }
  },
  components: { DriverModal, CommonTable },
  mixins: [tableMixin],
  computed: {},
  methods: {
    /**
     * @description 根据查询表单过滤菜单数据
     */
    queryByForm() {
      console.log('查询接口')
    },
    /**
     * @description 删除某一行菜单数据
     * @param {*} record 菜单数据行
     */
    onDelete(record) {
      console.log('删除菜单', record.id)
    }
  }
}
</script>
<style lang="less" scoped>
.main-table {
  height: calc(100% - 100px);
}
</style>

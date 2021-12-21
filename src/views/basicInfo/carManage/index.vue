<!-- 车辆管理 -->
<template>
  <div class="container">
    <div ref="searchForm" id="searchForm">
      <a-form-model layout="inline" :model="searchFormData">
        <a-form-model-item label="客商类型">
          <common-dict-select
            v-model="searchFormData.custType"
            dictCode="custType"
          ></common-dict-select>
        </a-form-model-item>
        <a-form-model-item>
          <template slot="label">
            <a-tooltip placement="right">
              <template slot="title">
                可输入姓名 隶属运营商 手机号 身份证号 发证机关查询
              </template>
              关键字&nbsp;<a-icon type="question-circle" />
            </a-tooltip>
          </template>
          <a-input v-model="searchFormData.name"></a-input>
        </a-form-model-item>
        <a-form-model-item label="录入时间">
          <a-range-picker v-model="searchFormData.date"> </a-range-picker>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="queryByForm"> 查询 </a-button>
          <a-button type="primary" @click="queryByForm"> 重置 </a-button>
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
      <a-button icon="left" type="primary" @click="openFormModal()">
        弃审
      </a-button>
      <a-button icon="reload" type="primary" @click="openFormModal()">
        更新终端
      </a-button>
      <a-button icon="delete" type="primary" @click="openFormModal()">
        删除终端
      </a-button>
      <a-button icon="setting" type="primary" @click="openFormModal()">
        批量设置跟踪定位
      </a-button>
    </div>
    <draggable-table :columns="columns" :tableData="data" class="main-table">
      <template slot="isGps" slot-scope="{ row }">
        <a-switch
          checked-children="启用"
          un-checked-children="禁用"
          :checked="row.isGps === 1"
        />
      </template>
      <template slot="operation" slot-scope="{ row }">
        <a-button @click="openFormModal(row)" size="small">编辑</a-button>
        <a-popconfirm title="确定删除吗？" @confirm="onDelete(row)">
          <a-button type="danger" size="small">删除</a-button>
        </a-popconfirm>
      </template>
    </draggable-table>
    <car-modal
      :title="modalTitle"
      :visible.sync="visible"
      :formData="editFormData"
    ></car-modal>
  </div>
</template>
<script>
import dataSource from './carMock'
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import carModal from './carModal.vue'
import CommonTable from '@/components/common/CommonTable.vue'
export default {
  data() {
    return {
      editFormData: null,
      searchFormData: {
        custType: '',
        name: '',
        date: []
      },
      data: dataSource.list,
      loading: false,
      columns: tableColumn
    }
  },
  components: { carModal, CommonTable },
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

<!-- 证书管理 -->
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
        </a-form-model-item>
      </a-form-model>
    </div>
    <div ref="tableOperator" class="table-operator">
      <a-button icon="plus" type="primary" @click="openFormModal()">
        新增
      </a-button>
    </div>
    <common-table
      row-key="code"
      :columns="columns"
      :loading="loading"
      :data-source="data"
      :scroll="tableScroll"
      @handlerEdit="openFormModal"
      @handlerDelete="onDelete"
    >
      <template slot="isUse" slot-scope="isUse">
        <a-switch
          checked-children="是"
          un-checked-children="否"
          :checked="isUse === 1"
        />
      </template>
      <template slot="operation" slot-scope="record">
        <a-button @click="openFormModal(record)" size="small">编辑</a-button>
        <a-popconfirm title="确定删除吗？" @confirm="onDelete(record)">
          <a-button type="danger" size="small">删除</a-button>
        </a-popconfirm>
      </template>
    </common-table>
    <certificate-modal
      :title="modalTitle"
      :visible.sync="visible"
      :formData="editFormData"
    ></certificate-modal>
  </div>
</template>
<script>
import dataSource from './certificateMock'
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import CertificateModal from './certificateModal.vue'
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
      modalTitle: '',
      data: dataSource.list,
      loading: false,
      visible: false,
      columns: tableColumn
    }
  },
  components: { CertificateModal, CommonTable },
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
    },
    openFormModal(record) {
      this.modalTitle = record ? '编辑' : '新增'
      this.editFormData = record
        ? Object.assign({ time: +new Date() }, record)
        : null
      this.visible = true
    }
  }
}
</script>

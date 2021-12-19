<!-- 线路管理 -->
<template>
  <div class="container">
    <div ref="searchForm" id="searchForm">
      <a-form-model
        ref="searchFormModel"
        layout="inline"
        :model="searchFormData"
      >
        <a-form-model-item prop="keyWords">
          <template slot="label">
            <a-tooltip placement="right">
              <template slot="title">
                可输入姓名 隶属运营商 手机号 身份证号 发证机关查询
              </template>
              关键字&nbsp;<a-icon type="question-circle" />
            </a-tooltip>
          </template>
          <a-input v-model="searchFormData.keyWords"></a-input>
        </a-form-model-item>
        <a-form-model-item label="录入时间" prop="date">
          <a-range-picker v-model="searchFormData.date"> </a-range-picker>
        </a-form-model-item>
        <a-form-model-item label="运费单位" prop="freightUnit">
          <common-dict-select
            v-model="searchFormData.freightUnit"
            dictCode="freightUnit"
          ></common-dict-select>
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
    </div>
    <a-table
      bordered
      size="middle"
      row-key="code"
      :columns="columns"
      :loading="loading"
      :data-source="data"
      :scroll="tableScroll"
      :customRow="customRow"
      :pagination="pagination"
      :rowSelection="rowSelection"
      @change="handlePaginationChange"
    >
      <template slot="isUse" slot-scope="isUse">
        <a-switch
          checked-children="是"
          un-checked-children="否"
          :checked="isUse === 1"
        />
      </template>
      <template slot="operation" slot-scope="record">
        <a-link @click="openFormModal(record)">编辑</a-link>
        &nbsp;&nbsp;
        <a-popconfirm title="确定删除吗？" @confirm="onDelete(record)">
          <a-link type="danger">删除</a-link>
        </a-popconfirm>
      </template>
    </a-table>
    <line-modal
      :title="modalTitle"
      :visible.sync="visible"
      :formData="editFormData"
    ></line-modal>
  </div>
</template>
<script>
import dataSource from './lineManageMock'
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import LineModal from './lineModal.vue'
export default {
  data() {
    return {
      searchFormData: {
        freightUnit: '',
        keyWords: '',
        date: []
      },
      data: dataSource.list,
      loading: false,
      columns: tableColumn
    }
  },
  components: { LineModal },
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

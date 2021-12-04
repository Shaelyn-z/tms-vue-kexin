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
            <a-popover>
              <template slot="content"> 输入关键字进行搜索 </template>
              关键字&nbsp;<a-icon type="question-circle" />
            </a-popover>
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
      <a-button icon="plus" type="primary" @click="openFormModal()"
        >新增</a-button
      >
      <a-button icon="cloud-upload" type="primary" @click="openFormModal()">
        导入
      </a-button>
      <a-button icon="check" type="primary" @click="openFormModal()">
        审核
      </a-button>
      <a-button icon="left" type="primary" @click="openFormModal()"
        >弃审</a-button
      >
    </div>
    <a-table
      :columns="columns"
      row-key="code"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      @change="handlePaginationChange"
      size="middle"
      :scroll="tableScroll"
      bordered
    >
      <template slot="isUse" slot-scope="isUse">
        <a-switch
          checked-children="是"
          un-checked-children="否"
          :checked="isUse === 1"
        />
      </template>
      <template slot="operation" slot-scope="record">
        <a-popconfirm title="确定删除吗？" @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a href="javascript:;" @click="openFormModal(record)">&nbsp;编辑</a>
      </template>
    </a-table>
    <merchant-modal
      :title="modalTitle"
      :visible.sync="visible"
      :formColumns="columns.filter((item) => item.editOption)"
      :formData="editFormData"
      label-width="120px"
    ></merchant-modal>
  </div>
</template>
<script>
import dataSource from './merchantMock'
import tableMixin from '@/mixins/tableMixin'
import tableColumn from './tableColumn'
import merchantModal from './merchantModal.vue'
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
  components: { merchantModal },
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

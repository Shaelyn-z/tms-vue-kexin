<template>
  <div class="container">
    <div ref="searchForm" id="searchForm">
      <a-form-model layout="inline" :model="formInline">
        <a-form-model-item label="菜单名称">
          <a-input v-model="formInline.menuName"></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="queryByForm"> 查询 </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div ref="tableOperator" class="table-operator">
      <a-button icon="plus" type="primary" @click="openDrawer()">新增</a-button>
    </div>
    <a-table
      :columns="columns"
      row-key="path"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      @change="handlePaginationChange"
      size="middle"
      :scroll="tableScroll"
      bordered
    >
      <template slot="type" slot-scope="record">
        {{ record | formatterType }}
      </template>
      <template slot="icon" slot-scope="record">
        <a-icon :type="record" />
      </template>
      <template slot="operation" slot-scope="record">
        <a-popconfirm title="确定删除吗？" @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a href="javascript:;" @click="openDrawer(record)">&nbsp;编辑</a>
      </template>
    </a-table>

    <common-drawer
      :title="drawerTitle"
      :visible.sync="visible"
      @handlerCancel="handlerCancel"
      @handlerOk="handlerOk"
    >
      <a-form-model
        ref="menuForm"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :model="formInline"
        :rules="rules"
      >
        <a-form-model-item label="菜单类型">
          <a-radio-group v-model="formInline.type" :options="menuOptions" />
        </a-form-model-item>
        <a-form-model-item label="菜单名称" prop="name">
          <a-input v-model="formInline.name"></a-input>
        </a-form-model-item>
        <a-form-model-item
          label="父级菜单"
          prop="parent"
          v-if="formInline.menuOption === 'subMenu'"
        >
          <a-select showSearch v-model="formInline.parent">
            <a-select-option
              v-for="item in parentMenuList"
              :key="item.path"
              :value="item.path"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="菜单路由" prop="path">
          <a-input v-model="formInline.path"></a-input>
        </a-form-model-item>
        <a-form-model-item label="图标">
          <a-input v-model="formInline.icon"> </a-input>
        </a-form-model-item>
        <a-form-model-item label="排序">
          <a-input v-model="formInline.sort"></a-input>
        </a-form-model-item>
        <a-form-model-item label="备注">
          <a-input v-model="formInline.remark"></a-input>
        </a-form-model-item>
      </a-form-model>
    </common-drawer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import menuDataSource from './menuMock'
import tableMixin from '@/mixins/tableMixin'
export default {
  data() {
    const columns = [
      {
        title: '菜单名称',
        dataIndex: 'name',
        width: 180
      },
      {
        title: '菜单路由',
        dataIndex: 'path',
        width: 150
      },
      {
        title: '菜单类型',
        dataIndex: 'type',
        scopedSlots: { customRender: 'type' },
        width: 150
      },
      {
        title: '菜单图标',
        dataIndex: 'icon',
        scopedSlots: { customRender: 'icon' },
        width: 150
      },
      {
        title: '排序',
        dataIndex: 'sort',
        width: 150
      },
      {
        title: '备注',
        dataIndex: 'remark',
        width: 150
      },
      {
        title: '操作',
        scopedSlots: { customRender: 'operation' },
        width: 150
      }
    ]
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 },
      iconChooseVisible: false,
      formInline: {
        type: 'menu',
        name: '',
        parent: '',
        path: '',
        icon: '',
        sort: '',
        remark: ''
      },
      data: menuDataSource.list,
      menuOptions: [
        { label: '一级菜单', value: 'menu' },
        { label: '子菜单', value: 'subMenu' }
      ],
      rules: {
        name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
        parent: [
          { required: true, message: '请选择父级菜单', trigger: 'blur' }
        ],
        path: [{ required: true, message: '请输入菜单路由', trigger: 'blur' }]
      },
      pagination: {},
      loading: false,
      visible: false,
      drawerTitle: '新增',
      columns
    }
  },
  computed: {
    ...mapState('menu', ['allMenuList']),
    parentMenuList() {
      return this.allMenuList
        .filter((item) => item.children && item.children.length)
        .map((item) => ({ name: item.name, path: item.path }))
    }
  },
  mixins: [tableMixin],
  methods: {
    /**
     * @description 根据查询表单过滤菜单数据
     */
    queryByForm() {
      console.log('查询接口')
    },
    /**
     * @description 根据查询表单过滤菜单数据
     */
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
    },
    /**
     * @description 删除某一行菜单数据
     * @param {*} record 菜单数据行
     */
    onDelete(record) {
      console.log('删除菜单', record.id)
    },
    openDrawer(record) {
      this.drawerTitle = record ? '编辑' : '新增'
      this.formInline = record ? record : this.$options.data().formInline
      this.visible = true
    },
    /**
     * @description drawer确定按钮点击事件，处理菜单表单提交
     */
    handlerOk() {
      console.log('提交菜单')
    },
    /**
     * @description drawer取消按钮点击事件，清空表单
     */
    handlerCancel() {
      this.$refs.menuForm.resetFields()
    }
  },
  filters: {
    formatterType(val) {
      switch (val) {
        case 'menu':
          return '菜单'
        case 'subMenu':
          return '子菜单'
      }
    }
  }
}
</script>

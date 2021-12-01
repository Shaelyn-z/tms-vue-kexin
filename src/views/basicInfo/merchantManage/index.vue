<template>
  <div class="container">
    <a-form-model ref="searchForm" layout="inline" :model="formInline">
      <a-form-model-item label="客商类型">
        <a-select v-model="formInline.custType">
          <a-select-option
            :key="item.value"
            :value="item.value"
            v-for="item in custTypeList"
          >
            {{ item.text }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="关键字">
        <a-input v-model="formInline.menuName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="录入时间">
        <a-range-picker>
          <template slot="dateRender" slot-scope="current">
            <div class="ant-calendar-date">
              {{ current.date() }}
            </div>
          </template>
        </a-range-picker>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="queryByForm"> 查询 </a-button>
      </a-form-model-item>
    </a-form-model>
    <div ref="tableOperator" class="table-operator">
      <a-button icon="plus" type="primary" @click="openDrawer()">新增</a-button>
      <a-button icon="cloud-upload" type="primary" @click="openDrawer()">
        导入
      </a-button>
      <a-button icon="check" type="primary" @click="openDrawer()">
        审核
      </a-button>
      <a-button icon="left" type="primary" @click="openDrawer()">弃审</a-button>
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
      <template slot="operation" slot-scope="record">
        <a-popconfirm title="确定删除吗？" @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a href="javascript:;" @click="openDrawer(record)">&nbsp;编辑</a>
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import dataSource from './merchant-mock'
import constantsExt from '@/static/constantsExt'
import tableMixin from '@/mixins/tableMixin'
export default {
  data() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'index',
        width: 50,
        fixed: 'left',
        customRender: (text, record, index) => index + 1
      },
      {
        title: '客商类型',
        dataIndex: 'custType',
        width: 100,
        fixed: 'left'
      },
      {
        title: '客商编码',
        dataIndex: 'code',
        width: 100,
        fixed: 'left'
      },
      {
        title: '客商名称',
        dataIndex: 'cname',
        width: 200
      },
      {
        title: '客商简称',
        dataIndex: 'shortname',
        width: 100
      },
      {
        title: '外文名称',
        dataIndex: 'custName',
        width: 100
      },
      {
        title: '审核状态',
        dataIndex: 'status',
        width: 100
      },
      {
        dataIndex: 'isUse',
        title: '是否冻结',
        width: 100
      },
      {
        dataIndex: 'industryName',
        title: '所属行业',
        sorter: (a, b) => a.industryName.length - b.industryName.length,
        width: 120
      },
      {
        dataIndex: 'areaName',
        title: '所属地区',
        width: 120,
        sorter: (a, b) => a.areaName.length - b.areaName.length
      },
      {
        dataIndex: 'registFund',
        title: '注册资金(万元)',
        sorter: (a, b) => a.registFund - b.registFund,
        width: 140
      },
      {
        dataIndex: 'salemanName',
        title: '专管业务员',
        width: 100
      },
      {
        dataIndex: 'creditLine',
        title: '信用额度',
        width: 100
      },
      {
        dataIndex: 'freezingDate',
        title: '冻结日期',
        width: 200
      },
      {
        dataIndex: 'contactman',
        title: '联系人1',
        width: 100
      },
      {
        dataIndex: 'contactman2',
        title: '联系人2',
        width: 100
      },
      {
        dataIndex: 'contactPhone',
        title: '联系电话1',
        width: 100
      },
      {
        dataIndex: 'contactPhone2',
        title: '联系电话2',
        width: 100
      },
      {
        dataIndex: 'contactAddr',
        title: '地址1',
        width: 100
      },
      {
        dataIndex: 'contactAddr2',
        title: '地址1',
        width: 100
      },
      {
        title: '操作',
        scopedSlots: { customRender: 'operation' },
        width: 140,
        fixed: 'right'
      }
    ]
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 },
      custTypeList: constantsExt.custType,
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
      data: dataSource.list,
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
      loading: false,
      columns
    }
  },
  mixins: [tableMixin],
  computed: {
    ...mapState('menu', ['allMenuList']),
    parentMenuList() {
      return this.allMenuList
        .filter((item) => item.children && item.children.length)
        .map((item) => ({ name: item.name, path: item.path }))
    }
  },
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
      this.$refs.menuForm.resetdataIndexs()
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

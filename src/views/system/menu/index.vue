<template>
  <div class="container">
    <a-form-model layout="inline" :model="formInline">
      <a-form-model-item label="菜单名称">
        <a-input v-model="formInline.menuName"></a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="queryByForm"> 查询 </a-button>
      </a-form-model-item>
    </a-form-model>
    <div class="table-operator">
      <a-button icon="plus" type="primary" @click="openModal()">新增</a-button>
    </div>
    <a-table
      :columns="columns"
      row-key="id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      size="middle"
      bordered
    >
      <template slot="icon" slot-scope="record">
        <a-icon :type="record" />
      </template>
      <template slot="operation" slot-scope="record">
        <a-popconfirm title="确定删除吗？" @confirm="() => onDelete(record)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a href="javascript:;" @click="openModal(record)">&nbsp;编辑</a>
      </template>
    </a-table>

    <a-modal
      :title="modalTitle"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form-model layout="inline" :model="formInline">
        <a-form-model-item label="菜单名称">
          <a-input v-model="formInline.menuName"></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="queryByForm"> 查询 </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    const columns = [
      {
        title: '序号',
        width: 80,
        customRender: (t, r, index) => parseInt(index) + 1
      },
      {
        title: '菜单名称',
        dataIndex: 'name'
      },
      {
        title: '菜单类型',
        dataIndex: 'type'
      },
      {
        title: '菜单图标',
        dataIndex: 'icon',
        scopedSlots: { customRender: 'icon' }
      },
      {
        title: '排序',
        dataIndex: 'sort'
      },
      {
        title: '备注',
        dataIndex: 'remark'
      },
      {
        title: '操作',
        scopedSlots: { customRender: 'operation' }
      }
    ]
    return {
      formInline: {
        menuName: ''
      },
      data: [
        {
          id: 1,
          name: '用户管理',
          type: '1',
          icon: 'user',
          sort: 100,
          remark: 'transfer'
        },
        {
          id: 2,
          name: '菜单管理',
          type: '1',
          icon: 'menu',
          sort: 105,
          remark: 'transfer'
        },
        {
          id: 3,
          name: '角色管理',
          type: '1',
          icon: 'user',
          sort: 110,
          remark: 'transfer'
        }
      ],
      pagination: {},
      loading: false,
      visible: false,
      modalTitle: '新增',
      columns
    }
  },
  methods: {
    queryByForm() {
      console.log('查询接口')
    },
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
    },
    onDelete(record) {
      console.log(record)
    },
    openModal(record) {
      this.modalTitle = record ? '新增' : '编辑'
      this.visible = true
    },
    handleOk() {
      this.visible = false
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

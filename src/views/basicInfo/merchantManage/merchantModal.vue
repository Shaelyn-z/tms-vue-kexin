<template>
  <a-modal v-model="modalVisible" :title="title" @ok="handleOk" width="70vw">
    <a-form-model
      id="modalForm"
      ref="menuForm"
      :model="formInline"
      :rules="rules"
      layout="inline"
    >
      <a-form-model-item label="客商类型" prop="custType">
        <common-dict-select
          v-model="formInline.custType"
          dictCode="custType"
        ></common-dict-select>
      </a-form-model-item>
      <a-form-model-item label="客商编码" prop="code">
        <a-input v-model="formInline.code"></a-input>
      </a-form-model-item>
      <a-form-model-item label="客商名称" prop="cname">
        <a-input v-model="formInline.cname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="客商简称" prop="shortname">
        <a-input v-model="formInline.shortname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="外文名称">
        <a-input v-model="formInline.custName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="所属行业" prop="industryName">
        <a-input v-model="formInline.industryName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="所属地区" prop="areaName">
        <a-input v-model="formInline.areaName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="注册资金(万元)">
        <a-input v-model="formInline.registFund"></a-input>
      </a-form-model-item>
      <a-form-model-item label="专管业务员">
        <a-input v-model="formInline.salemanName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="信用额度">
        <a-input v-model="formInline.creditLine"></a-input>
      </a-form-model-item>
      <a-form-model-item label="是否冻结">
        <a-input v-model="formInline.isUse" />
      </a-form-model-item>
      <a-form-model-item label="冻结日期">
        <a-date-picker v-model="formInline.freezingDate" />
      </a-form-model-item>
      <a-form-model-item label="审核状态">
        <a-input v-model="formInline.status"></a-input>
      </a-form-model-item>
      <a-form-model-item label="运费系数">
        <a-input v-model="formInline.xishu"></a-input>
      </a-form-model-item>
      <a-form-model-item label="联系人1">
        <a-input v-model="formInline.contactman" />
      </a-form-model-item>
      <a-form-model-item label="联系人2">
        <a-input v-model="formInline.contactman2" />
      </a-form-model-item>
      <a-form-model-item label="联系电话1">
        <a-input v-model="formInline.contactPhone" />
      </a-form-model-item>
      <a-form-model-item label="联系电话2">
        <a-input v-model="formInline.contactPhone2" />
      </a-form-model-item>
      <a-form-model-item label="地址1">
        <a-input v-model="formInline.contactAddr" />
      </a-form-model-item>
      <a-form-model-item label="地址2">
        <a-input v-model="formInline.contactAddr2" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: 'merchantModal',
  data() {
    return {
      formInline: {},
      rules: {
        custType: [
          { required: true, message: '请选择客商类型', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请选择客商类型', trigger: 'change' }
        ],
        cname: [
          { required: true, message: '请输入客商名称', trigger: 'change' }
        ],
        shortname: [
          { required: true, message: '请输入客商简称', trigger: 'change' }
        ],
        industryName: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        areaName: [
          { required: true, message: '请选择所属地区', trigger: 'change' }
        ]
      }
    }
  },
  props: {
    title: {
      type: String,
      default: '新增'
    },
    visible: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object
    }
  },
  computed: {
    modalVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        if (val) {
          Object.assign(this.formInline, val)
        }
      },
      deep: true
    }
  },
  methods: {
    handleOk() {
      this.modalVisible = false
    }
  }
}
</script>

<template>
  <a-modal
    v-model="modalVisible"
    :title="title"
    @ok="handleOk"
    @cancel="handleCancel"
    width="70vw"
    centered
  >
    <a-form-model
      id="modalForm"
      ref="modalForm"
      :model="formInline"
      :rules="rules"
      layout="inline"
    >
      <a-form-model-item label="对象类型" prop="custType">
        <common-dict-select
          v-model="formInline.custType"
          dictCode="custType"
        ></common-dict-select>
      </a-form-model-item>
      <a-form-model-item label="证件对象" prop="code">
        <a-input v-model="formInline.code"></a-input>
      </a-form-model-item>
      <a-form-model-item label="证件类型" prop="cname">
        <a-input v-model="formInline.cname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="是否生效" prop="shortname">
        <a-input v-model="formInline.shortname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="办证日期">
        <a-input v-model="formInline.custName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="证件生效日期" prop="industryName">
        <a-input v-model="formInline.industryName"></a-input>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: 'CertificateModal',
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
    },
    handleCancel() {
      this.$refs.modalForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
#modalForm {
  .ant-form-item-label {
    width: 140px;
  }
}
</style>

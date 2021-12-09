<template>
  <a-modal
    v-model="modalVisible"
    :title="title"
    @ok="handleOk"
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
      <a-form-model-item label="线路名称" prop="custType">
        <common-dict-select
          v-model="formInline.custType"
          dictCode="custType"
        ></common-dict-select>
      </a-form-model-item>
      <a-form-model-item label="出发地" prop="code">
        <a-input v-model="formInline.code"></a-input>
      </a-form-model-item>
      <a-form-model-item label="目的地" prop="cname">
        <a-input v-model="formInline.cname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="线路里程" prop="shortname">
        <a-input v-model="formInline.shortname"></a-input>
      </a-form-model-item>
      <a-form-model-item label="运费" prop="yunfei">
        <a-input v-model="formInline.custName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="运费单位" prop="freightUnit">
        <common-dict-select
          v-model="formInline.freightUnit"
          dictCode="freightUnit"
        ></common-dict-select>
      </a-form-model-item>
      <a-form-model-item label="通行路桥费" prop="areaName">
        <a-input v-model="formInline.areaName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="油耗费用">
        <a-input v-model="formInline.registFund"></a-input>
      </a-form-model-item>
      <a-form-model-item label="其他费用">
        <a-input v-model="formInline.salemanName"></a-input>
      </a-form-model-item>
      <a-form-model-item label="预计耗时">
        <a-input v-model="formInline.creditLine"></a-input>
      </a-form-model-item>
      <a-form-model-item label="司机提成">
        <a-input v-model="formInline.isUse" />
      </a-form-model-item>
      <a-form-model-item label="备注">
        <a-input v-model="formInline.freezingDate" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: 'MerchantModal',
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
        yunfei: [
          { required: true, message: '请选择所属地区', trigger: 'change' }
        ],
        freightUnit: [
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

<style lang="less" scoped>
#modalForm {
  /deep/ .ant-form-item-label {
    width: 140px;
  }
}
</style>

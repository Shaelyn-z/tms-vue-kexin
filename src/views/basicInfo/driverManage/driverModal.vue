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
      <div class="sub-form-card">
        <div class="sub-form-title">保险信息</div>
        <a-form-model-item label="人员类别" prop="custType">
          <common-dict-select
            v-model="formInline.custType"
            dictCode="custType"
          ></common-dict-select>
        </a-form-model-item>
        <a-form-model-item label="姓名" prop="code">
          <a-input v-model="formInline.code"></a-input>
        </a-form-model-item>
        <a-form-model-item label="性别" prop="cname">
          <a-input v-model="formInline.cname"></a-input>
        </a-form-model-item>
        <a-form-model-item label="隶属运营商" prop="shortname">
          <a-input v-model="formInline.shortname"></a-input>
        </a-form-model-item>
        <a-form-model-item label="发证机关">
          <a-input v-model="formInline.custName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="身份证住址" prop="industryName">
          <a-input v-model="formInline.industryName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="身份证有效期截止日期" prop="areaName">
          <a-input v-model="formInline.areaName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="状态">
          <a-input v-model="formInline.registFund"></a-input>
        </a-form-model-item>
        <a-form-model-item label="身份证正面图片">
          <a-input v-model="formInline.salemanName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="身份证反面图片">
          <a-input v-model="formInline.creditLine"></a-input>
        </a-form-model-item>
        <br />
      </div>
      <div class="sub-form-card">
        <div class="sub-form-title">从业资格证信息</div>
        <a-form-model-item label="从业资格证件号">
          <a-input v-model="formInline.isUse" />
        </a-form-model-item>
        <a-form-model-item label="从业资格类别">
          <a-date-picker v-model="formInline.freezingDate" />
        </a-form-model-item>
        <a-form-model-item label="从业资格发证机关">
          <a-input v-model="formInline.status"></a-input>
        </a-form-model-item>
        <a-form-model-item label="初次发证日期">
          <a-input v-model="formInline.xishu"></a-input>
        </a-form-model-item>
        <a-form-model-item label="初次有效截止日期">
          <a-input v-model="formInline.contactman" />
        </a-form-model-item>
        <a-form-model-item label="从业资格证证书">
          <a-input v-model="formInline.contactman2" />
        </a-form-model-item>
        <br />
      </div>
      <div class="sub-form-card">
        <div class="sub-form-title">驾驶证信息</div>
        <a-form-model-item label="驾驶证档案编号">
          <a-input v-model="formInline.contactPhone" />
        </a-form-model-item>
        <a-form-model-item label="驾驶证准驾车型">
          <a-input v-model="formInline.contactPhone2" />
        </a-form-model-item>
        <a-form-model-item label="驾驶证发证机关">
          <a-input v-model="formInline.contactAddr" />
        </a-form-model-item>
        <a-form-model-item label="驾驶证有效期">
          <a-input v-model="formInline.contactAddr2" />
        </a-form-model-item>
      </div>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  name: 'DriverModal',
  data() {
    return {
      formInline: {
        custType: ''
      },
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
  /deep/ .ant-form-item-label {
    width: 160px;
  }
}
</style>

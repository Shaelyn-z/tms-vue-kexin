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
      ref="menuForm"
      :model="formInline"
      :rules="rules"
      layout="inline"
    >
      <div class="sub-form-card">
        <div class="sub-form-title">基本信息</div>
        <a-form-model-item label="车辆类型" prop="custType">
          <common-dict-select
            v-model="formInline.custType"
            dictCode="vehicleType"
          ></common-dict-select>
        </a-form-model-item>
        <a-form-model-item label="车牌号" prop="code">
          <a-input v-model="formInline.code" allowClear></a-input>
        </a-form-model-item>
        <a-form-model-item label="隶属运营商">
          <a-input v-model="formInline.cname" allowClear></a-input>
        </a-form-model-item>
        <a-form-model-item label="使用性质">
          <a-input v-model="formInline.shortname" allowClear></a-input>
        </a-form-model-item>
        <a-form-model-item label="车架号">
          <a-input v-model="formInline.custName" allowClear></a-input>
        </a-form-model-item>
        <a-form-model-item label="发动机号">
          <a-input v-model="formInline.industryName" allowClear></a-input>
        </a-form-model-item>
        <a-form-model-item label="注册日期">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>
        <a-form-model-item label="发证日期">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>
        <a-form-model-item label="档案编号">
          <a-input v-model="formInline.salemanName" allowClear />
        </a-form-model-item>
        <a-form-model-item label="核定载人数">
          <a-input v-model="formInline.creditLine" type="number" allowClear />
        </a-form-model-item>
        <a-form-model-item label="外形尺寸">
          <a-input v-model="formInline.isUse" allowClear />
        </a-form-model-item>
        <a-form-model-item label="所有人">
          <a-input v-model="formInline.creditLine" allowClear />
        </a-form-model-item>
        <a-form-model-item label="住址">
          <a-input v-model="formInline.status" allowClear />
        </a-form-model-item>
        <a-form-model-item label="总质量(KG)" prop="">
          <a-input v-model="formInline.xishu" type="number" allowClear />
        </a-form-model-item>
        <a-form-model-item label="整备质量(KG)" prop="">
          <a-input v-model="formInline.contactman" type="number" allowClear />
        </a-form-model-item>
        <a-form-model-item label="核定载质量(KG)">
          <a-input v-model="formInline.contactman2" type="number" allowClear />
        </a-form-model-item>
        <a-form-model-item label="准牵引质量(KG)">
          <a-input v-model="formInline.contactPhone" type="number" allowClear />
        </a-form-model-item>
        <a-form-model-item label="总里程(KM)">
          <a-input v-model="formInline.contactPhone2" allowClear />
        </a-form-model-item>
        <a-form-model-item label="检验有效期截止日期" prop="">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>
        <a-form-model-item label="强制报废截止日期" prop="">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>

        <br />
        <a-form-model-item label="行驶证主页正面图片">
          <common-pict-upload></common-pict-upload>
        </a-form-model-item>
        <a-form-model-item label="行驶证主页反面图片">
          <common-pict-upload></common-pict-upload>
        </a-form-model-item>
        <a-form-model-item label="行驶证副页正面图片">
          <common-pict-upload></common-pict-upload>
        </a-form-model-item>
        <a-form-model-item label="行驶证副页反面图片">
          <common-pict-upload></common-pict-upload>
        </a-form-model-item>
      </div>
      <div class="sub-form-card">
        <div class="sub-form-title">运输信息</div>
        <a-form-model-item label="运输证证号">
          <a-input v-model="formInline.contactAddr2" allowClear />
        </a-form-model-item>
        <a-form-model-item label="业户名称">
          <a-input v-model="formInline.contactAddr2" allowClear />
        </a-form-model-item>
        <a-form-model-item label="发证日期">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>
        <a-form-model-item label="审验有效期截止日期">
          <a-date-picker v-model="formInline.freezingDate" allowClear />
        </a-form-model-item>
        <a-form-model-item label="经营范围">
          <a-input v-model="formInline.contactAddr2" allowClear />
        </a-form-model-item>
      </div>
      <div class="sub-form-card">
        <div class="sub-form-title">保险信息</div>
        <a-form-model-item label="保险有效时间段">
          <a-range-picker v-model="formInline.shijianduan" allowClear />
        </a-form-model-item>
        <a-form-model-item label="保险信息图片">
          <common-pict-upload></common-pict-upload>
        </a-form-model-item>
      </div>
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

<style lang="less" scoped>
#modalForm {
  /deep/ .ant-form-item-label {
    width: 140px;
  }
}
</style>

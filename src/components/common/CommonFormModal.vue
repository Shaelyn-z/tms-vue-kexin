<template>
  <a-modal v-model="modalVisible" :title="title" @ok="handleOk" width="70vw">
    <a-form-model
      id="modalForm"
      ref="menuForm"
      :model="formInline"
      :rules="rules"
      layout="inline"
    >
      <a-form-model-item
        :label="item.title"
        v-for="item in formColumns"
        :key="item.dataIndex"
        :prop="item.dataIndex"
      >
        <a-input
          v-if="item.editOption.type === 'input'"
          v-model="formInline[item.dataIndex]"
        ></a-input>
        <a-select
          v-if="item.editOption.type === 'select' && !item.editOption.dict"
          v-model="formInline[item.dataIndex]"
        >
          <a-select-option></a-select-option
        ></a-select>
        <common-dict-select
          v-if="item.editOption.dict"
          v-model="formInline[item.dataIndex]"
          :dictCode="item.editOption.dict"
        ></common-dict-select>
        <a-range-picker v-if="item.editOption.type === 'dateRange'">
          <template slot="dateRender" slot-scope="current">
            <div class="ant-calendar-date">
              {{ current.date() }}
            </div>
          </template>
        </a-range-picker>
        <slot :name="item.slotName"></slot>
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>
<script>
export default {
  data() {
    return {
      formInline: {},
      rules: {}
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
    formColumns: {
      type: Array,
      default: () => []
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
  mounted() {
    this.initFormData()
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
    initFormData() {
      this.formColumns.forEach((item) => {
        this.$set(
          this.formInline,
          item.dataIndex,
          item.editOption.defaultValue || ''
        )
        if (item.editOption.required) {
          this.$set(this.rules, item.dataIndex, [
            {
              required: true,
              message: `${
                item.editOption.type === 'input' ? '请输入' : '请选择'
              }${item.title}`,
              trigger: 'change'
            }
          ])
        }
      })
    },
    handleOk() {
      this.modalVisible = false
    }
  }
}
</script>

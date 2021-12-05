<!-- 字典项下拉框，会根据static/dict.js定义的字典项进行下拉数据展示 -->
<template>
  <a-select
    v-model="selectValue"
    allowClear
    showSearch
    :filterOption="filterOption"
  >
    <a-select-option v-for="item in DictMap[dictCode]" :key="item.value">
      {{ item.text }}
    </a-select-option>
  </a-select>
</template>

<script>
import DictMap from '@/static/js/dict'
export default {
  name: 'CommonDictSelect',
  data() {
    return {
      DictMap
    }
  },
  model: {
    props: 'value',
    event: 'update:value'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    dictCode: {
      type: String,
      default: ''
    }
  },
  computed: {
    selectValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  },
  methods: {
    /**
     * @description 根据输入的内容筛选下拉数据选项
     * @param {*} inputValue 输入的内容
     * @param {*} option 某一个下拉选项的节点信息
     * @return {Boolean} true则表示通过筛选，展示在下方，false则不通过筛选
     */
    filterOption(inputValue, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) >= 0
      )
    }
  }
}
</script>

<style></style>

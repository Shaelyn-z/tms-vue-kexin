<!--公共数据搜索条件折叠面板-->
<template>
  <a-collapse accordion>
    <a-collapse-panel key="1" header="搜索条件">
      <div ref="searchForm" id="searchForm">
        <a-form-model layout="inline" :model="searchFormData">
          <a-form-model-item label="客商类型">
            <common-dict-select
              v-model="searchFormData.custType"
              dictCode="custType"
            ></common-dict-select>
          </a-form-model-item>
          <a-form-model-item>
            <template slot="label">
              <a-tooltip placement="right">
                <template slot="title">
                  {{ searchKeywordDesc }}
                </template>
                关键字&nbsp;<a-icon type="question-circle" />
              </a-tooltip>
            </template>
            <a-input v-model="searchFormData.name"></a-input>
          </a-form-model-item>
          <a-form-model-item label="录入时间">
            <a-range-picker v-model="searchFormData.date"> </a-range-picker>
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary" @click="queryByForm"> 查询 </a-button>
            <a-button type="primary" @click="queryByForm"> 重置 </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
export default {
  props: {
    searchKeywordDesc: {
      type: String,
      default: '',
      desc: '关键字描述'
    },
    searchFieldList: {
      type: Array,
      require: true,
      desc: '搜索字段数组'
    }
  },
  data() {
    return {
      searchFormData: {
        custType: '',
        name: '',
        date: []
      }
    }
  },
  methods: {
    /**
     * @description 根据查询表单过滤菜单数据
     */
    queryByForm() {
      console.log('查询接口')
    }
  }
}
</script>

<style>
</style>
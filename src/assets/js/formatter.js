/*
 * @Author: wyz
 * @Date: 2021-12-06 10:22:59
 * @LastEditors: wyz
 * @Description: 定义通用的格式化函数
*/
import Vue from 'vue'
import DictMap from '@/static/js/constantsExt'
const vm = new Vue()

/**
 * @description 根据字典项提供的颜色渲染表格单元格内容
 * @param {*} dictCode 名字
 * @param {*} value 单元格value值
*/
export function renderCellByDict(dictCode, value) {
  // map格式转换 {key: {value, text, color}} --> {value: {value, text, color}}
  const valueMap = Object.values(DictMap[dictCode]).reduce((pre, cur) => {
    pre[cur.value] = cur
    return pre
  }, {})
  return vm.$createElement('span', {
    style: {
      border: `1px solid ${valueMap[value].color}`,
      color: valueMap[value].color,
      borderRadius: '3px',
      display: 'inline-block',
      textAlign: 'center',
      padding: '2px 10px'
    }
  }, valueMap[value].text)
}

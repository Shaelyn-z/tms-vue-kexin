import VXETable from 'vxe-table'
import DictMap from '@/static/js/constantsExt'

VXETable.renderer.add('DictCell', {
  renderDefault(h, renderOpts, params) {
    const { row, column } = params
    const { dictCode } = renderOpts
    const cellValue = row[column.property]
    if (!cellValue && cellValue !== 0) {
      return ''
    }
    // map格式转换 {key: {value, text, color}} --> {value: {value, text, color}}
    const valueMap = Object.values(DictMap[dictCode]).reduce((pre, cur) => {
      pre[cur.value] = cur
      return pre
    }, {})
    const spanStyle = {
      color: valueMap[cellValue].color
    }
    return [
      <span style={ spanStyle }>{ valueMap[cellValue].text }</span>
    ]
  }
})

const Mock = require('mockjs')


export default Mock.mock({ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|20': [
    {
      'key|+1': 10,
      'name': '@cword(5, 10)'
    }
  ],
  'tableData|10': [
    {
      'key|+1': 10,
      'name': '@cword(5, 10)',
      'cost': 10,
      'unit|1': [1, 2],
      'remark': '@cword(5, 8)',
    }
  ]
})

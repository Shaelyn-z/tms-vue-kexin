const Mock = require('mockjs')


export default Mock.mock({ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|100': [
    {
      'code|+1': 10,
      'personnelType|1': [1, 2],
      'name': '@cname',
      'isUse|1': [0, 1],
      'state|1': [0, 5, 10, 15, 20]
    }
  ]
})

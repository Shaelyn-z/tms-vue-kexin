const Mock = require('mockjs')


export default Mock.mock({ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|100': [
    {
      'code|+1': 10,
      'cname': '@cname',
    }
  ]
})

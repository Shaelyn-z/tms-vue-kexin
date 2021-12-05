const Mock = require('mockjs')

export default Mock.mock({ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|100': [
    {
      'code|+1': 10,
      'id|+1': 10,
      'plateNumber|1': ['粤E41675', '粤AHK30挂', '桂E3308挂'],
      'isGps|1': ['粤E41675', '粤AHK30挂', '桂E3308挂'],
      'isUse|1': [0, 1]
    }
  ]
})

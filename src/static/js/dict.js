// 是否
export const yesOrNo = [
    {
      value: 1,
      text: '是'
    }, {
      value: 0,
      text: '否'
    },
  ]

// 车辆类型
export const vehicleType = [
  {
    value: 1,
    text: "车头",
    color: '#077621'
  }, {
    value: 2,
    text: "车挂",
    color: '#760d27'
  }
]
    
// 客商类型
export const custType = [
  {
    value: 1,
    text: "客户",
    prefix: 'KH',
    color: '#061376'
  }, {
    value: 2,
    text: "供应商",
    prefix: 'GY',
    color: '#76052d'
  }, {
    value: 3,
    text: "承运商",
    prefix: 'CY',
    color: '#09762d'
  }, {
    value: 4,
    text: "客商",
    prefix: 'KS',
    color: '#590776'
  },
]

const DictMap = {
  yesOrNo,
  custType,
  vehicleType
}

export default DictMap

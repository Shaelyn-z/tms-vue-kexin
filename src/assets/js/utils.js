/**
 * @description 获取浏览器本地存储值
 * @param {*} name 键名
 * @param {*} type 数值类型，假如是对象类型，需要做反序列化
 * @return 从缓存中获取的值
*/
export function getStore(name, type = 'string') {
  let storage = localStorage.getItem(name)
  if (type === 'object') {
    return storage ? JSON.parse(storage) : {}
  }
  if (type === 'array') {
    return storage ? JSON.parse(storage) : []
  }
  return storage
}

/**
 * @description 将值保存到浏览器缓存中
 * @param {*} name 键名
 * @param {*} value 值
*/
export function setStore(name, value) {
  // 如果是对象，则需要先进行序列化再存储
  if (typeof value === 'object') {
    localStorage.setItem(name, JSON.stringify(value))
  } else {
    localStorage.setItem(name, value)
  }
}

/**
 * @description 清空缓存
*/
export function clearStore() {
  localStorage.clear()
}
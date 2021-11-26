import {getStore, setStore} from '@/assets/js/utils'
export default {
  namespaced: true,
  state: {
    allMenuList: getStore('allMenuList', 'array'),
    openMenuList: getStore('openMenuList', 'array'),
    currMenu: getStore('currMenu', 'object')
  },
  mutations: {
    setAllMenuList: (state, payload) => {
      state.allMenuList = payload
      setStore('allMenuList', payload)
    },
    // 新增菜单tab页
    addOpenMenu: (state, payload) => {
      // 先看是否已经打开，若是，则不做任何操作
      const isOpend = state.openMenuList.find(item => item.path === payload.path)
      if (! isOpend) {
        state.openMenuList = state.openMenuList.concat(payload)
        setStore('openMenuList', state.openMenuList)
      }
    },
    // 关闭已打开的菜单
    deleteOpenMenu: (state, payload) => {
      const index = state.openMenuList.findIndex(item => item.path === payload.path)
      const currMenu = payload.type === 'this' ? state.openMenuList[index - 1] : payload
      switch (payload.type) { 
        // 关闭左侧，需要保留首页
        case 'left':
          state.openMenuList.splice(1, index - 1)
          break;
          // 关闭右侧
        case 'right':
          state.openMenuList.splice(index + 1)
          break;
          // 关闭其他，需要保留首页
        case 'others':
          if (index === 0) {
            state.openMenuList = state.openMenuList.splice(index, 1)
          } else {
            state.openMenuList = state.openMenuList[0].concat(state.openMenuList.splice(index, 1))
          }
          break;
        case 'this':
          state.openMenuList.splice(index, 1)
          break;
      }
      state.currMenu = currMenu
      setStore('currMenu', currMenu)
      setStore('openMenuList', state.openMenuList)
    },
    setCurrMenu: (state, payload) => {
      state.currMenu = payload
      setStore('currMenu', payload)
    }
  }
}

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
      const isOpend = state.openMenuList.find(item => item.path === payload.path)
      if (!isOpend) {
        state.openMenuList = state.openMenuList.concat(payload)
        setStore('openMenuList', state.openMenuList)
      }
    },
    // 关闭已打开的菜单
    deleteOpenMenu: (state, payload) => {
      const index = state.openMenuList.findIndex(item => item.path === payload.path)
      switch (payload.type) {
        // 关闭左侧
        case 'left':
          state.openMenuList.splice(0, index)
          break;
          // 关闭右侧
        case 'right':
          state.openMenuList.splice(index + 1)
          break;
          // 关闭其他
        case 'others':
          state.openMenuList = state.openMenuList.splice(index, 1)
          break;
      }
      setStore('openMenuList', state.openMenuList)
    },
    setCurrMenu: (state, payload) => {
      state.currMenu = payload
      setStore('currMenu', payload)
    }
  }
}

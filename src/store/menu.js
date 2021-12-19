import {getStore, setLocalStore, setSessionStore} from '@/assets/js/utils'
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
      setLocalStore('allMenuList', payload)
    },
    // 新增菜单tab页
    addOpenMenu: (state, payload) => {
      // 先看是否已经打开，若是，则不做任何操作
      const isOpend = state.openMenuList.find(item => item.path === payload.path)
      if (! isOpend) {
        state.openMenuList = state.openMenuList.concat(payload)
        setSessionStore('openMenuList', state.openMenuList)
      }
    },
    // 关闭已打开的菜单
    deleteOpenMenu: (state, payload) => {
      const index = state.openMenuList.findIndex(item => item.path === payload.path)
      let currMenu
      if (payload.type === 'this' && state.currMenu.path === payload.path) {
        // 如果是关闭具体某页，且该页刚好是打开状态，则选中该页的前一页
        currMenu = state.openMenuList[index - 1]
      } else if (payload.type === 'this' && state.currMenu.path !== payload.path) {
        // 如果是关闭具体某页，且该页并不是当前页，则选中页不变
        currMenu = state.currMenu
      } else {
        // 如果是其它关闭类型，则选中右键的tab页面
        currMenu = payload
      }
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
      setSessionStore('currMenu', currMenu)
      setSessionStore('openMenuList', state.openMenuList)
    },
    setCurrMenu: (state, payload) => {
      state.currMenu = payload
      setSessionStore('currMenu', payload)
    },
    // 清除所有数据
    clearAll: state => {
      state.allMenuList = []
      state.openMenuList = [{path:"/index",name:"首页",closable:false}]
      state.currMenu = {path:"/index",name:"首页"}
      setLocalStore('allMenuList', state.allMenuList)
      setSessionStore('openMenuList', state.openMenuList)
      setSessionStore('currMenu', state.currMenu)
    }
  }
}

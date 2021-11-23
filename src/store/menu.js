export default {
  state: {
    allMenuList: [],
    openMenuList: [],
    currMenu: {}
  },
  getters: {
    getAllMenuList: state =>  {
      return state.allMenuList
    },
    getOpenMenuList: state => {
      return state.openMenuList
    },
    getCurrMenu: state => {
      return state.currMenu
    }
  }
}
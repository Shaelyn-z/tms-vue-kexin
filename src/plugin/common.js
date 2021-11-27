/*
 * @Author: wyz
 * @Date: 2021-11-27 11:18:00
 * @LastEditors: wyz
 * @Description: 用于存放一些通用的指令、全局方法
*/
export default {
  install(Vue) {
    Vue.prototype.$createTab = function ({path, name, pathList = [], closable = true}) {
      this.$store.commit('menu/setCurrMenu', {path, pathList})
      this.$store.commit('menu/addOpenMenu', {path, name, pathList, closable})
      this.$router.push({path})
    }
  }
}

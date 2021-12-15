<template>
  <div class="container">
    <vuedraggable class="left-drag" v-model="planList">
      <transition-group>
        <div class="plan" v-for="plan in planList" :key="plan.key">
          <div class="plan-title">{{ plan.title }}</div>
          <div class="plan-list">
            <div
              class="plan-item"
              v-for="(item, index) in planSubList"
              :key="index"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </transition-group>
    </vuedraggable>
    <div :class="notifyFold ? 'right-notify-fold' : 'right-notify'">
      <a-icon
        :type="notifyFold ? 'double-left' : 'double-right'"
        @click="notifyFold = !notifyFold"
      />
    </div>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
  name: 'IndexPage',
  data() {
    return {
      planList: [
        { title: '当天整体计划', key: 'overAll' },
        { title: '当天物流计划', key: 'logistics' },
        { title: '当天外物流计划', key: 'overLogistics' }
      ],
      planSubList: [
        { title: '计划总数', key: 'total' },
        { title: '未调度', key: 'total1' },
        { title: '已调度', key: 'total2' },
        { title: '充装中', key: 'total3' },
        { title: '运输中', key: 'total4' },
        { title: '已到达', key: 'total5' },
        { title: '已卸货', key: 'total6' }
      ],
      notifyFold: false
    }
  },
  components: {
    vuedraggable
  }
}
</script>

<style lang="less" scoped>
@notify-board-width: 400px;
.container {
  display: flex;
  padding: 0px;
  background: #f0f2f5;
  .left-drag {
    flex: 1;
    margin-right: 20px;
    background: white;
  }
  .right-notify {
    border-radius: 5px;
    width: @notify-board-width;
    position: relative;
    background: white;
    animation-name: expand;
    animation-duration: 0.5s;
  }
  .right-notify-fold {
    position: relative;
    animation-name: fold;
    animation-duration: 0.5s;
  }
  @keyframes expand {
    from {
      width: 10px;
    }
    to {
      width: @notify-board-width;
    }
  }
  @keyframes fold {
    from {
      width: @notify-board-width;
    }
    to {
      width: 10px;
    }
  }
  .right-notify,
  .right-notify-fold {
    i {
      top: 50%;
      left: -15px;
      font-size: 15px;
      position: absolute;
      border-radius: 50%;
      background: rgba(204, 204, 204, 0.2);
    }
  }
}
.plan {
  height: 150px;
  width: calc(100% - 20px);
  border: 1px solid rgb(238, 238, 238);
  border-radius: 5px;
  margin: 10px;
  .plan-title {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0px 10px;
    cursor: move;
    background: rgb(238, 238, 238);
  }
  .plan-list {
    display: flex;
    font-size: 14px;
    .plan-item {
      height: 100px;
      flex: 1;
      margin: 10px;
      border-radius: 5px;
      background: aquamarine;
    }
  }
}
</style>

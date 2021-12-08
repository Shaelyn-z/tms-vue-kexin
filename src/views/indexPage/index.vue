<template>
  <div>
    <div class="plan" v-for="(plan, index) in planList" :key="index">
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
  </div>
</template>

<script>
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.plan {
  height: 150px;
  width: 100%;
  .plan-title {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding: 0px 10px;
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

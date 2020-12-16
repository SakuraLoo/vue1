<template>
  <div>
    <h2>选项数据</h2>
    <b>data:</b>
    <div> {{ msg }} </div>
    <b>computed:</b>
    <div> {{ aDouble }} </div>
    <b>mothods:</b>
    <div @click="say('hi')"> click me </div>
  </div>
</template>

<script>
export default {
  data() { //定义变量
    return {
      msg: "Hello World!",
      num: 1
    }
  },
  computed: { //计算属性
    aDouble() {
      return this.num * 2;
    }
  },
  methods: { //事件函数
    say(h) {
      console.log(h)
    }
  },
  mounted() { //demo12_路由vue-router，在这里获取到传过来的参数
    // console.log(this.$route.params.userId)
    console.log(this.$route.query.plan)
  }
}
</script>
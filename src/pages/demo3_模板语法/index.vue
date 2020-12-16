<template>
  <div>
    <h2>模板语法</h2>
    <b>1.data:</b>
      <div> {{ msg }} </div>
    <b>2.模板中直接嵌入js代码:</b>
      <div> {{ number + 1 }} </div>
    <b>3.指令:</b>
      <b>①v-hmtl</b>
        <div v-html="rawHTML"></div>
      <b>②v-bind</b>
        <div v-bind:class="red"></div>
        <div @click="change">点击修改颜色</div>
    <b>③v-on</b>
      <div v-on:click="say('hi')">点击</div>
      <div @click="say">点击</div>
    <b>4.计算属性(computed)</b>
      <div> {{ aDouble }} </div>
    <b>5.过滤器</b>
      <div> {{ message | capitalize }} </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World!",
      number: 1,
      rawHTML: '<span>123</span>',
      red: 'red active',
      num: 1,
      message: 'message'
    }
  },
  computed: {
    aDouble() {
      return this.num * 2;
    }
  },
  methods: {
    change() {
      this.red = 'blue';
    },
    say() {
      console.log('hi');
    }
  },
  filters: {
    capitalize() {
      return '123';
    }
  }
}
</script>
<template>
  <div>
    <h2>计算属性</h2>
    <div> {{ returndMessage }} </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World!"
    }
  },
  computed: {
    returndMessage() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>
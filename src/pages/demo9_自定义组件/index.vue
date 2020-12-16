<template>
  <div>

    <h2>自定义组件</h2>
    <b>倒计时组件</b>
    <count-down v-bind:style="styleObject_red"></count-down>
    <count-down v-bind:style="styleObject_blue"></count-down>

  </div>
</template>

<script>
import Countdown from '@/components/countdown.vue'

export default {
  components: {
    'count-down': Countdown
  },
  data() {
    return {
      styleObject_red: {
        color: 'red',
        fontSize: '16px'
      },
      styleObject_blue: {
        color: 'blue',
        fontSize: '16px'
      }
    }
  }
}
</script>
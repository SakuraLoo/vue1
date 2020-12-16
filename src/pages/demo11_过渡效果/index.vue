<template>
  <div>

    <h2>过渡效果</h2>

    <button v-on:click="show = !show">
      toggle折叠
    </button>
    <transition name="xx">
      <p v-if="show">hello</p>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .xx-enter-active, .xx-leave-active {
    transition: opacity .5s;
  }
  .xx-enter, .xx-leave-to {
    opacity: 0;
  }
  .xx-enter-to  {
    opacity: 1;
  }
</style>
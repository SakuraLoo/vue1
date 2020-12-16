<template>
  <div>

    <h2>事件处理器</h2>
    <button v-on:click="counter += 1">增加 1</button>
    <p>点击了 {{ counter }} 次 </p>

    <button @click="greet">Greet</button>
    
    <button @click="say('hi')">点击</button>

    <div @click="dothis2()">
      <div @click="dothis()">阻止事件冒泡</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    greet() {
      this.counter = this.counter + 1;
    },
    say(h) {
      console.log(h)
    },
    dothis() {
      console.log('doThis')
    },
    dothis2() {
      console.log('doThis2')
    }
  }
}
</script>
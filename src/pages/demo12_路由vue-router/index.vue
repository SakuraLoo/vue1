<template>
  <div>

    <h2>路由vue-router</h2>
    <router-link to="/demo1">demo2</router-link>
    
    <router-link :to="{name:'demo2', params: {userId:123}}">params传参</router-link>
    
    <router-link :to="{name:'demo2', params: {userId:456}, query:{plan:'private'} }">query显示完整网址，传新的参数</router-link>

    <button @click="toURL">跳转页面</button>


  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    toURL() {
      // this.$router.push({path: '/demo3'})
      // this.$router.push({name:'demo2', params: {userId:123}})
      this.$router.push({name:'demo2', params: {userId:456}, query:{plan:'private'}})
    }
  }
}
</script>

<style scoped>
  * {
    display: block;
  }
</style>
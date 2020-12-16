<template>
  <div>

    <h2>Vue中的Dom操作</h2>
    <div ref="head" id="head"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    // $(".head").html("123");

    //原生(我试的，找不到class，只找得到id)
    // document.getElementById('head').innerHTML = "123";

    this.$refs.head.innerHTML = "123";
  }
}
</script>
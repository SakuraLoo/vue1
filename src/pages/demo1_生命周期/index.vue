<template>
  <div>
    生命周期
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  creatd() {
    console.log('creatd');
  },
}
</script>
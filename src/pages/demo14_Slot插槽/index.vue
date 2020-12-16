<template>
  <div>

    <h2>Slot插槽</h2>

    <slots>
      <div>123</div>

      <p slot="bottom">888</p>
    </slots>


  </div>
</template>

<script>
import slots from '@/components/slot.vue'

export default {
  components: {
    slots
  },
  data() {
    return {
    }
  }
}
</script>
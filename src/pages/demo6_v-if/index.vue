<template>
  <div>
    <h2>条件渲染 (v-if)</h2>

    <div v-if="ok">Yes</div>
    
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ok: true,
      type: 'D'
    }
  }
}
</script>
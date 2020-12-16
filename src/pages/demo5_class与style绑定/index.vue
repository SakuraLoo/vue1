<template>
  <div>
    <h2>class与style绑定</h2>
    <div v-bind:class="{'active': isActive, 'text-danger': hasError}">第一种绑定方式</div>
    <div :class="classObject">第二种绑定方式</div>
    <div :class="['active','text-danger']">第三种绑定方式</div>

    <div v-bind:style="{'color': activeColor, 'fontSize': fontSize + 'px'}">style1</div>
    <div v-bind:style="styleObject">style2</div>
    <div v-bind:style="[baseStyles, overridingStyles]">style3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,

      classObject: {
        'active': true,
        'text-danger': false
      },

      activeClass: 'active',
      errorClass: 'text-danger',

      activeColor: 'red',
      fontSize: 20,

      styleObject: {
        color: 'blue',
        fontSize: '16px'
      },

      baseStyles: { color: 'green'},
      overridingStyles: { fontSize: '12px'}
    }
  }
}
</script>
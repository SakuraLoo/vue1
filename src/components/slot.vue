<template>
  <div>

    <h2>插槽内部</h2>

    <slot></slot>

    <p>我是最底部</p>
    <slot name="bottom"></slot>

  </div>
</template>
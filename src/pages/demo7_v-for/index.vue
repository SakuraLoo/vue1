<template>
  <div>

    <h2>列表渲染</h2>

    <ul>
      <li v-for="(item,index) in items" :key="index">
        {{ item.msg }}
      </li>
    </ul>

    <ul>
      <li v-for="(item,index) in items" :key="index">
        {{ index }} - {{ item.msg }}
      </li>
    </ul>
    
    <ul>
      <li v-for="(item,key) in obj" :key="key">
        {{ key }} : {{ value }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {msg: 'Foo'},
        {msg: '123'}
      ],

      obj: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  }
}
</script>
<template>
  <div>

    <h2>vue-resource请求</h2>


  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    /*第一种写法*/
    //get请求
    this.$http.get('/someUrl').then(response => {
      // get body data
      console.log(response.body);
    }, response => {
      // error callback
    })

    //post请求
    this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
      console.log(response.body);
    }, response => {
      // error callback
    })

    /*第二种写法*/
    this.$http.get('/someUrl', {params: {foo: 'bar'}, headers: {'X-Custom': '...'}}).then(response => {
      // success callback
      console.log(response.body);
    }, response => {
      // error callback
    })


    // //实例
    // //get请求
    // this.$http.get('http://192.168.1.171/LYGWebAPI/api/Project/getOrgShortByUserId?userId=1').then(response => {
    //   // get body data
    //   console.log(response.body);
    // }, response => {
    //   // error callback
    // })

    // //post请求，前缀不一样，整不出来
    // this.$http.post('http://192.168.1.171/LYGWebAPI/api/Dust/getAttendancesInfoByUserId?userId=1', {userId: 1}).then(response => {
    //   console.log(response.body);
    // }, response => {
    //   // error callback
    // })

  }
}
</script>
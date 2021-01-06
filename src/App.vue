<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  /*min-width: 450px;*/
  /*opacity:0.8;*/
}
body{
  /*background-image: url("assets/bg.jpg");*/
  /*!*background-repeat:repeat-x;*!*/
  /*background-size: 100%;*/
  /*background-repeat:no-repeat;*/
}
</style>

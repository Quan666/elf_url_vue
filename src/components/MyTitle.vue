<template>
  <div>
    <h1>{{title_txt}}</h1>
    <p>{{introduction}}</p>
  </div>
</template>

<script>
export default {
  name: 'mytitle',
  props: {
    title_txt: String,
    introduction: String
  }
}
</script>

<style scoped>
h1{
  margin: 0px;
  padding: 0px;
  color: #2c3e50;
  /*color: aliceblue;*/
}
p{
  margin: 0px ;
  padding: 0px;
  color: #2c3e50;
  /*color: aliceblue;*/
}
</style>

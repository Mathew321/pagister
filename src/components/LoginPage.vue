<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to Pagister
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>To Do List</h3>
    <ul>
      <li>Watch Vue Tutorial</li>
      <li>Try out Vue</li>
      <li>Write my Vue app</li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/" target="_blank" >Vue JS video course</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

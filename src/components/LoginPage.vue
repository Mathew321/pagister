<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to Pagister
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 class="h3">To Do List</h3>
    <ul class="ul">
      <li class="li">Watch Vue Tutorial</li>
      <li class="li">Try out Vue</li>
      <li class="li">Write my Vue app</li>
    </ul>
    <h3>Essential Links</h3>
<<<<<<< Updated upstream
    <h3>First commit from Marcin!</h3>
    <ul>
      <li><a href="https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/" target="_blank" >Vue JS video course</a></li>
=======
    <ul class="ul">
      <li class="li"><a href="https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/" target="_blank" class="a">Vue JS video course</a></li>
>>>>>>> Stashed changes
    </ul>
    <h3>First commit from Marcin!</h3>
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
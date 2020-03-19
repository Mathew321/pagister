<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginPage msg="Welcome Matvei and Marcin!"/>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    LoginPage
  }
}
</script>
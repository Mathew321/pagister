<template>
    <div>
      
    </div>
</template>

<script>
export default {
  name: 'CijferPage',
  data() {
    return {};
  },
  methods: {
    getData() {
      var users = require('../data/Users.json');
      console.log("First user: " + users[0].User); 
    }
  }
}
</script>

<style scoped>

</style>
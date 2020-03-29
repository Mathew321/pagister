<template>
<div class="main-container">
  <div class="crop" :style="{ backgroundImage: 'url(' + require('@/assets/'+ photo +'.png') + ')'}"/>
  <div class="user-data">
    <div>Naam: {{ userName }}</div>
    <div>Klas: {{ userClass }}</div>
  </div>
</div>
</template>

<script>
import users from '../data/Users.json'

export default {
  name: 'ProfilePage',
  data() {
    return {
      userName: this.getUser().name,
      userClass: this.getUser().class,
      photo: this.getProfilePhoto()
    }
  },
  methods: {
    getProfilePhoto() {
      var login = this.getUser().login;
      try {
        require('../assets/' + login + '.png');
        return login;
      } catch(err) {
        return "anonymous"
      }
    },
    getUser() {
      var userId = this.$store.userId;
      var index = users.map(e => e.id).indexOf(userId);
      return users[index];
    }
  }
}
</script>

<style scoped>
.crop {
  background-image: url("../assets/anonymous.png");
  width: 100px;
  height: 150px;
  background-position: center;
  background-size: cover;
  border: 1px solid #ccc;
}
.user-data {
    margin-left: 4px;
    text-align: left;
    padding: 4px;
    border:1px solid #ccc;
    vertical-align: middle;
}
.user-data div {
    text-align: left;
    padding: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
}
</style>
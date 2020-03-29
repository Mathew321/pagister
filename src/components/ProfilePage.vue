<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
  <div class="bovenbalk">
    Mijn profiel
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
<div class="main-container">
  <div class="crop" :style="{ backgroundImage: 'url(' + require('@/assets/'+ photo +'.png') + ')'}"/>
  <div class="user-data">
    <div>Naam: {{ userName }}</div>
    <div>Klas: {{ userClass }}</div>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
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
        console.log("Profile photo not found!")
        return "anonymous"
      }
    },
    getUser() {
      var userId = this.$store.userId;
      if (!userId) {
        this.$router.push('/Login')
      }
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
  height: 100px;
  background-position: center;
  background-size: cover;
  border: 1px solid #ccc;
  
}
.user-data {
    margin-left: 4px;
    text-align: left;
    padding: 10px;
    border:1px solid #ccc;
    vertical-align: middle;
    border-radius: 4px;
    
}
.user-data div {
    text-align: left;
    padding: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
}

.bovenbalk{
  position: fixed;
  background-color: #2a2a2e;
  width: 1300px;
  text-align: left;
  font-family: 'Sen', sans-serif;
  font-style: bold;
  font-size: 50px;
  color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.main-container{
  width: 300px;
  
}




</style>
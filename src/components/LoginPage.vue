<template>
  <div id="heelsite">
    <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
    <div id="pagisterlogo" >
    <img alt="Vue logo" src="../assets/geenMagisterlogo.png" width="150">
    </div>
        <br>
    <br>
    <br>
    <br>
    <br>
    <div id="alles">
    <div id="loginteksten">
    <h1 id="welkomtekst">
      Welkom bij Pagister,
    </h1>
    <h2 id="logintekst">
      Log in of maak een account
    </h2>
    </div>

    <div class="data">
      <form>
        <div id="loginpagina">
        <label for="uname"><b></b></label>
        <input v-model="uname" type="text" placeholder="Gebruikersnaam" name="uname" required>
        <br>
        
        <label for="pwd"><b></b></label>
        <input v-model="password" type="password" placeholder="Wachtwoord" name="pwd" required>
        <br>

        <input v-on:click="login(uname, password)" type="submit" value="Login" />
        <br>
        <div id="regknop">
        <input v-on:click="login(uname, password)" type="submit" value="Maak een account" />
          
        <label>
          <input id="cb" type="checkbox" checked="checked" name="remember"> Onthoud mij
        </label>
        </div>
          <br>
        
       
        
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
        uname: "",
        password: ""
    };
  },
  methods: {
    login() {
      var users = require('../data/Users.json');
      var index = users.map(e => e.login).indexOf(this.uname);
      var pwd = users[index].pwd;
      if (index === -1) {
        console.log("Login Failed");
        return false;
      }
      if (pwd === this.password) {
        console.log("Login Success");
        console.log("User id: " + users[index].id);
        this.$store.userId= users[index].id;
        console.log("User id from store: " + this.$store.userId)
        this.$router.push("/Main");
        return true;
      }
      console.log("Login Failed");
      return false;
    }
  }
}
</script>

<style scoped>
#loginpagina{
  font-family: 'Sen', sans-serif;
}

#loginteksten #welkomtekst{
  font-family: 'Sen', sans-serif;
  font-style: bold;
  font-size: 45px;
  color: darkolivegreen;
}

#loginteksten #logintekst{
  font-family: 'Sen', sans-serif;
  font-style: bold;
  font-size: 25px;
  color: #333;
}
#pagisterlogo{
  font-family: 'Sen', sans-serif;
  text-align: left;
  margin-left: 15px;
}
input[type=text], select {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password], select {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 300px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

#regknop input[type=submit] {
  width: 170px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 10px 8px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#regknop input[type=submit]:hover {
  background-color: #45a049;
}
</style>


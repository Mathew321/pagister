<template>
  <div>

    <img alt="Vue logo" src="../assets/geenMagisterlogo.png" width="500">
        <br>
    <br>
    <br>
    <br>

    <h1>
      Log in
    </h1>

    <div class="data">
      <form>
        <label for="uname"><b>Username </b></label>
        <input v-model="uname" type="text" placeholder="Enter Username" name="uname" required>
          <br>
          <br>
        <label for="pwd"><b>Password </b></label>
        <input v-model="password" type="password" placeholder="Enter Password" name="pwd" required>
          <br>
          <br>
        <label>
          <input id="cb" type="checkbox" checked="checked" name="remember"> Onthoud mij
        </label>
          <br><br>
        <input v-on:click="login(uname, password)" type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    login() {
      var users = require('../data/Users.json');
      var index = users.map(e => e.login).indexOf(this.uname);
      var pwd = users[index].PWD;
      if (index === -1) {
        console.log("Login Failed");
        return false;
      }
      if (pwd === this.password) {
        console.log("Login Success");
        this.$router.push("/Main");
        return true;
      }
      console.log("Login Failed");
      return false;
    }
  }
}
</script>
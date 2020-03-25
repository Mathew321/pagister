import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';

import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LoginPage
    },
    {
      path: "/Main",
      component: MainPage
    }
  ]
})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

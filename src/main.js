import Vue from 'vue';
import Vuex from 'vuex';
import store from "./store.js"
import VueRouter from "vue-router";
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

import App from './App.vue';
Vue.use(VueSidebarMenu)

import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/Login"
    },
    {
      path: "/Login",
      component: LoginPage
    },
    {
      path: "/Main",
      component: MainPage
    }
  ]
});

Vue.use(VueRouter)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

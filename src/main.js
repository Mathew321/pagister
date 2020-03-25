import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';

import LoginPage from './components/LoginPage.vue';
import MainPage from './components/MainPage.vue';
import AgendaPage from './components/AgendaPage.vue';
import CijferPage from './components/CijferPage.vue';
import ProfilePage from './components/ProfilePage.vue'

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Login",
      component: LoginPage
    },
    {
      path: "/Main",
      component: MainPage
    },
    {
      path: "/Agenda",
      component: AgendaPage
    },
    {
      path: "/Cijfers",
      component: CijferPage
    },
    {
      path: "/Profile",
      component: ProfilePage
    }
  ]
})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
  state: {
    loggedInUser: ""
  },
  mutations: {
    setLoggedInUser(login) {
      this.$state.loggedInUser = login;
    }
  },
  actions: {
    setLoggedInUser({commit}, token) {
      commit('setToken', token)
    }
  }
}).$mount("#app");

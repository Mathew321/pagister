<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
    <div class="main-container">
    <div id="main-view" :class="[{'collapsed' : collapsed}]">
      <sidebar-menu :collapsed="collapsed" :menu="menu" @collapse="onCollapse" @item-click="onItemClick" >
        <div slot="footer">
          <button class="logout-button" v-on:click="logout()">
            <i class="fa fa-sign-out-alt"></i>
            <span>&nbsp;Logout</span>
          </button>
        </div>
        <span slot="toggle-icon"><i class="fa fa-arrows-alt-h" /></span>
      </sidebar-menu>
      <info-page  v-show="infopage" />
      <agenda-page  v-show="agenda" />
      <cijfer-page  v-show="cijfers" />
      <profile-page  v-show="profile" />
    </div>
  </div>
</div>
</template>

<script>
import InfoPage from "./InfoPage.vue";
import AgendaPage from "./AgendaPage.vue";
import CijferPage from "./CijferPage.vue";
import ProfilePage from "./ProfilePage.vue";

export default {
  name: 'MainPage',
  components: {
    InfoPage,
    AgendaPage,
    CijferPage,
    ProfilePage
  },
  data() {
    return {
      infopage: true,
      agenda: false,
      cijfers: false,
      profile: false,
      collapsed: false,
      menu: [{
        header: true,
        title: 'Pagister',
        hiddenOnCollapse: true
        },
        {
        title: 'Vandaag',
        icon: 'fa fa-calendar-check'
        },
        {
        title: 'Profile',
        icon: 'fa fa-user',
        },
        {
        title: 'Agenda',
        icon: 'fa fa-calendar-alt',
        },
        {
        title: 'Cijfers',
        icon: 'fa fa-award',
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.userId = null;
      this.$router.push('/Login');
    },
    onCollapse (collapsed) {
      this.collapsed = collapsed;
    },
    onItemClick(event, item) {
      if (item.title === "Vandaag") {
        this.$data.infopage = true;
        this.$data.agenda = false;
        this.$data.cijfers = false;
        this.$data.profile = false;
      }
      else if (item.title === "Agenda") {
        this.$data.infopage = false;
        this.$data.agenda = true;
        this.$data.cijfers = false;
        this.$data.profile = false;
      }
      else if (item.title === "Cijfers") {
        this.$data.infopage = false;
        this.$data.agenda = false;
        this.$data.cijfers = true;
        this.$data.profile = false;
      }
      else if (item.title === "Profile") {
        this.$data.infopage = false;
        this.$data.agenda = false;
        this.$data.cijfers = false;
        this.$data.profile = true;
      }
    }
  }
}

</script>

<style scoped>
.v-sidebar-menu {
width: 200px;
font-family: 'Sen', sans-serif;
}

.v-sidebar-menu-vsm_collapsed {
padding-left: 35px;
}

.logout-button {
  width: 100%;
  background-color: black;
  color: white;
  border: 0px;
  opacity: 0.5;
  height: 40px;
  padding-left: 0px;
}

.main-container {
  display: flex;
}

#main-view-collapsed {
  padding-left: 50px;
}

#main-view {
  display: inline-block;
  padding-left: 200px;
}
</style>
<template>
<div>
    <div id="main-view" :class="[{'collapsed' : collapsed}]">
      <info-page />
    </div>
    <sidebar-menu :collapsed="collapsed" :menu="menu" @collapse="onCollapse" @itemClick="onItemClick" >
      <span slot="toggle-icon"><i class="fa fa-arrows-alt-h" /></span>
    </sidebar-menu>
</div>
</template>

<script>
import InfoPage from "./InfoPage.vue";

export default {
  name: 'MainPage',
  components: {
    InfoPage
  },
  data() {
    return {
      collapsed: false,
      menu: [{
        header: true,
        title: 'Pagister',
        hiddenOnCollapse: true
        },
        {
        href: '/Main',
        title: 'Vandaag',
        icon: 'fa fa-calendar-check'
        },
        {
        href: '/Profile',
        title: 'Profile',
        icon: 'fa fa-user',
        },
        {
        href: '/Agenda',
        title: 'Agenda',
        icon: 'fa fa-calendar-alt',
        },
        {
        href: '/Cijfers',
        title: 'Cijfers',
        icon: 'fa fa-award',
        }
      ]
    };
  },
  methods: {
    getData() {
      var users = require('../data/Users.json');
      console.log("First user: " + users[0].User); 
    },
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    }
  }
}
</script>

<style scoped>
.half-page-block {
  display: inline-block;
  width: 40%;
}
.v-sidebar-menu {
  width: 200px;
}
#main-view {
  padding-left: 200px;
}
#main-view.collapsed {
  padding-left: 50px;
}
</style>
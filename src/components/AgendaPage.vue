<template>
    <div>
      <info-block :infoData="info"/>
    </div>
</template>

<script>
import InfoBlock from "./InfoBlock.vue"
import agenda from '../data/Agenda.json'

export default {
  name: 'AgendaPage',
  components: {
    InfoBlock
  },
  data: function() {
    return {
      info: {
        header: "Agenda",
        items: agenda[0].week_1.monday.map(day => day.lessons)
      }
    };
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
.v-sidebar-menu-vsm_collapsed {
  padding-left: 35px;
}
#main-view {
  padding-left: 200px;
}
#main-view-collapsed {
  padding-left: 50px;
}
</style>
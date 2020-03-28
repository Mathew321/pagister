<template>
  <div class="info-container">
    <info-block :infoData="today"/>
    <info-block :infoData="homework"/>
    <info-block :infoData="mail"/>
    <info-block :infoData="marks"/>
  </div>
</template>

<script>
import InfoBlock from "./InfoBlock.vue";
import agenda from '../data/Agenda.json';
import users from '../data/Users.json'

export default {
  name: 'InfoPage',
  components: {
    InfoBlock
  },
  data() {
    return {
      today: {
        header: "Vandaag",
        items: this.getLessonsForToday()
      },
      homework: {
        header: "Huiswerk",
        items: agenda[0].week_1.monday.map(day => day.lessons)
      },
      mail: {
        header: "Berichten",
        items: [["Laatste update", "Nieuws", "Vieren: Koningsdag!"]]
      },
      marks: {
        header: "Cijfers",
        items: this.getMarks()
      }
    };
  },
  methods: {
    getData() {
      var users = require('../data/Users.json');
      console.log("First user: " + users[0].User); 
    },
    getLessonsForToday() {
      var dayOfTheWeek = (new Date()).getDay();
      var week = agenda[0].week_1;
      switch (dayOfTheWeek) {
        case 1: return week.monday.map(day => day.lessons)
        case 2: return week.tuesday.map(day => day.lessons)
        case 3: return week.wednesday.map(day => day.lessons)
        case 4: return week.thursday.map(day => day.lessons)
        case 5: return week.friday.map(day => day.lessons)
        default: return week.monday.map(day => day.lessons)
      }
    },
    getMarks() {
      var userId = this.$store.userId;
      console.log("User id: " + userId);
      var index = users.map(e => e.id).indexOf(userId);
      console.log(users[index].cijfers[0]);
      return [users[index].cijfers];
    }
  }
}
</script>

<style scoped>
.info-container {
  display: flex;
  width: 700px;
}
</style>
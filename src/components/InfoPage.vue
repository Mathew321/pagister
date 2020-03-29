<template>
<div>
 <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
  <div class="bovenbalk">
    Vandaag
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="info-container">
    <info-block :infoData="today"/>
    <info-block :infoData="homework"/>
    <info-block :infoData="mail"/>
    <info-block :infoData="marks"/>
  </div>
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
        header: "Laatste Cijfer",
        items: this.getLastMark()
      }
    };
  },
  methods: {
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
    getLastMark() {
      var userId = this.$store.userId;
      if (!userId) {
        this.$router.push('/Login')
      }
      if (!userId) {
        this.$router.push('/Login')
      }
      var index = users.map(e => e.id).indexOf(userId);
      var cijfersWithDates = users[index].cijfers.map(cijfer => {
        const container = {};
        container.vak = cijfer.vak;
        container.cijfer = cijfer.cijfer;
        container.date = new Date(cijfer.date);
        return container;
      });
      var lastMark = cijfersWithDates.reduce(function(prev, curr) {
          return prev.date > curr.date ? prev : curr;
      });
      return [[lastMark]];
    }
  }
}
</script>

<style scoped>
.info-container {
  display: flex;
  width: 700px;
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
</style>
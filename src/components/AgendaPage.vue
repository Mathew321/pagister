<template>
<div>
 <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
  <div class="bovenbalk">
    Agenda
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
<div class="agenda-container">
  <table class="agenda-table">
    <th colspan=4>
      <td>Maandag</td>
    </th>
    <tr v-for="(item, index) in agenda.monday[0].lessons" :key="index">
      <td class="lesson">{{ item.name }}</td>
      <td class="code">{{ item.code }}</td>
      <td class="lokaal">{{ item.lokaal }}</td>
      <td class="homework">{{item.homework}}</td>
    </tr>
  </table>
  <table class="agenda-table">
    <th colspan=4>
      <td>Dinsdag</td>
    </th>
    <tr v-for="(item, index) in agenda.tuesday[0].lessons" :key="index">
      <td class="lesson">{{ item.name }}</td>
      <td class="code">{{ item.code }}</td>
      <td class="lokaal">{{ item.lokaal }}</td>
      <td class="homework">{{item.homework}}</td>
    </tr>
  </table>
  <table class="agenda-table">
    <th colspan=4>
      <td>Woensdag</td>
    </th>
    <tr v-for="(item, index) in agenda.wednesday[0].lessons" :key="index">
      <td class="lesson">{{ item.name }}</td>
      <td class="code">{{ item.code }}</td>
      <td class="lokaal">{{ item.lokaal }}</td>
      <td class="homework">{{item.homework}}</td>
    </tr>
  </table>
  <table class="agenda-table">
    <th colspan=4>
      <td>Donderdag</td>
    </th>
    <tr v-for="(item, index) in agenda.thursday[0].lessons" :key="index">
      <td class="lesson">{{ item.name }}</td>
      <td class="code">{{ item.code }}</td>
      <td class="lokaal">{{ item.lokaal }}</td>
      <td class="homework">{{item.homework}}</td>
    </tr>
  </table>
  <table class="agenda-table">
    <th colspan=4>
      <td>Vrijdag</td>
    </th>
    <tr v-for="(item, index) in agenda.friday[0].lessons" :key="index">
      <td class="lesson">{{ item.name }}</td>
      <td class="code">{{ item.code }}</td>
      <td class="lokaal">{{ item.lokaal }}</td>
      <td class="homework">{{item.homework}}</td>
    </tr>
  </table>
</div>
</div>
</template>

<script>
import agenda from '../data/Agenda.json'

export default {
  name: 'AgendaPage',
  components: {
  },
  data() {
    return {
      agenda: agenda[0].week_1
    }
  }
}
</script>

<style scoped>
.agenda-container {
  display: block;
  width: 500px;
}

.agenda-table {
    -webkit-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    -moz-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    margin: 10px;
    display: inline-block;
    margin:0;
}
th {
    background-color: rgb(240, 228, 209);
    border-bottom: 2px solid #ccc;
    vertical-align: middle;
    margin: 0px;
}
.lesson {
  width: 150px;
}
.code {
  width: 50px;
  color:rgb(208, 196, 196)
}
.lokaal {
   width: 50px;
}
.homework {
  width: 350px;
}
tr {
    padding: 0px;
    margin: 0px;
    color: rgb(78, 77, 77);
}
td {
    text-align: left;
    padding: 4px;
    border-bottom:1px solid #ccc;
    vertical-align: middle;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
}
tr:hover{
    cursor: pointer;
    background-color: rgb(240, 228, 209);
}
</style>
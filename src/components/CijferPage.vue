<template>
    <div class="info-container">
      <div class="info-block">
        <table class="cijfers-table">
          <th>
            <td>Vak</td>
          </th>
          <th>
            <td>Cijfer</td>
          </th>
          <th>
            <td>Datum</td>
          </th>
          <tr v-for="(item, index) in marks" :key="index">
            <td class="code">{{ item.vak }}</td>
            <td class="cijfer">{{ item.cijfer }}</td>
            <td class="cijfer-date">{{item.date}}</td>
          </tr>
        </table>
    </div>
    </div>
</template>

<script>
import users from '../data/Users.json'

export default {
  name: 'CijferPage',
  components: {
  },
  data() {
    return {
      marks: this.getMarks()
    }
  },
  methods: {
    getMarks() {
        var userId = this.$store.userId;
        var index = users.map(e => e.id).indexOf(userId);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        var cijfers = users[index].cijfers;
        
        var cijfersWithDatesFormatted = cijfers.map(cijfer => {
          const container = {};
          container.vak = cijfer.vak;
          container.cijfer = cijfer.cijfer;
          container.date = new Date(cijfer.date).toLocaleString('nl-nl', options);
          return container;
        });
        return cijfersWithDatesFormatted;
    }
  }
}
</script>
<style>
.cijfers-table {
    -webkit-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    -moz-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    min-height: 250px;
    margin: 10px;
    display: inline-block;
}
th {
    background-color: rgb(240, 228, 209);
    border-bottom: 2px solid #ccc;
    vertical-align: middle;
    margin: 0px;
}
.code {
    color:rgb(208, 196, 196)
}
.cijfer {
    width: 150px;
}
.cijfer-date {
    width: 200px;
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
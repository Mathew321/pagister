<template>
<div>
    <div class="half-page-block">
      <info-block :infoList="list"/>
       <info-block :infoList="list"/>
    </div>
    <div class="half-page-block">
      <info-block :infoList="list"/>
      <info-block :infoList="list"/>
    </div>
</div>
</template>

<script>
import InfoBlock from "./InfoBlock.vue";
export default {
  name: 'MainPage',
  components: {
    InfoBlock
  },
  data() {
    return {
      list: buildList()
    };
  },
  methods: {
    getData() {
      var users = require('../data/Users.json');
      console.log("First user: " + users[0].User); 
    }
  }
}

function buildList() {
  let listItem1 = {
    "title": "Title 1",
    "text": "Text 1"
  }
   let listItem2 = {
    "title": "Title 2",
    "text": "Text 2"
  }

  console.log([listItem1, listItem2]);
  return [listItem1, listItem2];
}
</script>

<style scoped>
.half-page-block {
  display: inline-block;
  width: 40%;
}
</style>
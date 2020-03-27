<template>
    <div>
      
    </div>
</template>

<script>
export default {
  name: 'CijferPage',
  data() {
    return {
      menu: [{
        header: true,
        title: 'Main Navigation',
        hiddenOnCollapse: true
        },
        {
        href: '/Main',
        title: 'Vandaag',
        icon: ''
        },
        {
        href: '/Profile',
        title: 'Profile',
        icon: '',
        },
        {
        href: '/Agenda',
        title: 'Agenda',
        icon: '',
        },
        {
        href: '/Cijfers',
        title: 'Cijfers',
        icon: '',
        }
      ]
    };
  },
  methods: {
    getData() {
      var users = require('../data/Users.json');
      console.log("First user: " + users[0].User); 
    }
  }
}
</script>

<style scoped>

</style>
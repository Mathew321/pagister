<template>
    <div class="info-block">
        <ul>
            <li class="block-header">
                <span>{{infoData.header}}</span>
            </li>
            <li v-for="(item, index) in infoData.items[0]" :key="index">
                <span v-show="infoData.header === 'Vandaag'">{{ item.name }}</span>
                <div v-show="infoData.header === 'Huiswerk'">
                   <span class="code">{{item.code}}:&nbsp;</span><span>{{ item.homework }}</span>
                </div>
                <span v-show="infoData.header === 'Berichten'">{{ item }}</span>
                <div v-show="infoData.header === 'Laatste Cijfer'">
                   <span class="code">{{ item.vak }}:&nbsp;</span><span>{{ item.cijfer }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "InfoBlock",
    props: ['infoData'],
    methods: {
    }
}
</script>

<style scoped>
.info-block {
    -webkit-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    -moz-box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    box-shadow: 2px 2px 12px 0px rgba(158,155,158,1);
    min-height: 250px;
    width: 200px;
    margin: 10px;
    display: inline-block;
}
.block-header {
    background-color: rgb(240, 228, 209);
    border-bottom: 2px solid #ccc;
    vertical-align: middle;
    margin: 0px;
}
.code {
    color:rgb(208, 196, 196)
}
ul {
    list-style-type:none;
    padding: 0px;
    margin: 0px;
    color: rgb(78, 77, 77);
}
li {
    text-align: left;
    padding: 4px;
    border-bottom:1px solid #ccc;
    vertical-align: middle;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
}
li:hover{
    cursor: pointer;
    background-color: rgb(240, 228, 209);
}
</style>
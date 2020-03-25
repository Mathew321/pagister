<template>
    <ul>
        <li class="block-header">
            <h3>Header</h3>
            <br>
        </li>
        <li>
            <h4>Test Block</h4>
            <span>test </span>
            <br>
        </li>
        <li v-for="info in infoList" :key="info.title" :value="info.title">
            <h4>{{ info.title }}</h4>
            <span>{{ info.text }}</span>
            <br>
        </li>
    </ul>
</template>

<script>
export default{
    props: {
        infoList: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type:none;
}
li {
    border: 1px dotted;
    text-align: left;
}
li:hover {
    background-color: #FFFFE0;
}
.block-header {
    background-color:#FFFFE0;
}
</style>

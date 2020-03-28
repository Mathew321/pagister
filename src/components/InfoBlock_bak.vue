<template>
    <ul>
        <li class="block-header">
            <h3></h3>
            <br>
        </li>
            <li class="class1">
            <h4></h4>
            <span></span>
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
.class1 {
border-radius: 0px 0px 15px 15px;
  padding-top: 150px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}
ul {
    list-style-type:none;
}
li {
    border: 1px solid;
    text-align: left;
    background-color: rgba(134, 122, 122, 0.541);
}
li:hover {
    
    pointer-events:none;
}
.block-header {
    background-color:rgba(90, 86, 86, 0.219);
    pointer-events:none;
    border-radius: 15px 15px 0px 0px;
}
</style>
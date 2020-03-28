<template>
    <div class="menu-block">
        <ul>
            <li class="menu-header">
                <span>{{menuData.header}}</span>
            </li>
            <li v-for="(item, index) in menuData.items" :key="index">
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

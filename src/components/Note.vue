<template>
    <div>
        <span id="room">{{room}}</span>
        <Resource v-for="item in items" :key="item" :value="item" />
    </div>
</template>

<script>
import Resource from "./Resource.vue"

export default {
    name: 'Note',
    components: {
        Resource,
    },
    props: {
        room: String,
        items: Array,
       
    },
    components: {
    Resource
}
}
</script>

<style scoped>
    span {
        margin-left: 5px;
        margin-right: 5px;
    }
    div {
        margin: 5px;
    }

    * {
        font-size: large;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
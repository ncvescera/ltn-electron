<template>
    <div>
        <span id="room">{{room}}</span>
        <span v-for="item in items" :key="item"> {{item}} </span>
    </div>

</template>

<script>
export default {
    name: 'Note',
    props: {
        room: String,
        items: Array,
       
    },
    components: {
        
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
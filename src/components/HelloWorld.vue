<template>
    <h1>HELLO WORLD</h1>
    <span> {{ message }}</span>
    <img src="../assets/icon/gtfoIcons/ammo.png" />
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        message: String
    }
}
</script>

<style scoped>
h1 {
    color: red;
    display: inline-block;
}
</style>
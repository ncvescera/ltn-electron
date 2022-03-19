<template>
    <HelloWorld message="AAAA"/>

    <button @click="test()">AAA</button>
    <p>test API: {{ test() }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    methods: {
        test() {

            const test =  window.API.test();
            console.log(test);
            return test;
        }
    }
    
}
</script>

<style>
    body {
        background-color: aqua;
    }
</style>
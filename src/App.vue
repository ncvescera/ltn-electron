<template>
  <TitleBar title="Let Them Note" />
</template>

<script>
import TitleBar from './components/TitleBar.vue'

export default {
  name: 'App',
  components: {
    TitleBar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0; 
    border: 0; 
    vertical-align: baseline;
  }
  
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    height: 100%; margin: 0;
  }

  body {
    font-family: "Segoe UI", sans-serif;
    background: #1A2933;
    color: #FFF;
    border: 1px solid #48545c;
    overflow-y: hidden;
  }
</style>

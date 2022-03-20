<!-- 
    Box principale 

    Qui ci sta un titolo e il contenitore al cui interno verranno
    mostrate le note
-->
<template>
    <div id="main">
        <h1>Resources Notes 📋</h1>
        <NoteManager />
    </div>
</template>

<script>
import NoteManager from './NoteManager.vue'

export default {
    name: 'MainBox',
    components: {
        NoteManager,
    },
}
</script>

<style scoped>
    #main {
        margin: 10px 5% 10px 5%; /* potrebbero essere tutti convertiti in px */
        width: auto;
        height: auto;
    }
</style>
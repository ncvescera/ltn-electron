<!-- 
    Box principale 

    Qui ci sta un titolo e il contenitore al cui interno verranno
    mostrate le note
-->
<template>
    <div id="main">
        <div class="a"><h1>Resources Notes 📋</h1></div>
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

<style >
    #main {
        position: fixed;
        margin: 20px; /* potrebbero essere tutti convertiti in px */
        width: auto;
        left:  0;
        right: 0;
        bottom: 0;
        top: 20px;
        margin-bottom: 10px;
    }
</style>
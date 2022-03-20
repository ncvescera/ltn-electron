<template>
    <div id="note-box">
        <div id="note"></div>
    </div>

    <div id="footer">    
        <TextBox />
    </div>
</template>

<script>
import TextBox from './TextBox.vue'

export default {
    name: 'NoteManager',
    components: {
        TextBox,
    }
}
</script>

<style scoped>

</style>
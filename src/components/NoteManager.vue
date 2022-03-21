<template>
        <div id="note-box" class="b">
            <div id="note">
            </div>
        </div>

        <div id="footer" class="c">    
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

<style >

#note-box {
    background-color: rgba(206, 197, 197, 0.445);
    width: 100%;
    height: auto;
    position: absolute;
    top: 45px;
    bottom: 45px;
    border-radius: 5px;
  
}
#footer {
    width: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}


</style>
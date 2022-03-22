<template>
    <div id="main">
        <div class="a"><h1>Resources Notes <ClearButton @clear="clear"/></h1></div>
        
        <div id="note-box" class="b">
            <div id="note">
                <Note v-for="note in notes" :key="note.room" :room="note.room" :items="note.items"/>
            </div>
        </div>

        <div id="footer" class="c">    
            <TextBox @new-note="newNote"/>
        </div>
    </div>
</template>

<script>
import TextBox from './TextBox.vue'
import Note from './Note.vue'
import ClearButton from './ClearButton.vue';

export default {
    name: 'NoteManager',
    components: {
    TextBox,
    Note,
    ClearButton
},
    data() {
        return {
            notes: [
                //{ room: '220b', items: ['tool', 'ammo'] },
                //{ room: '220c', items: ['tool', 'ammo'] },
            ],
        }
    },
    methods: {
        newNote(note) {
            //console.log(note)
            // controlla se la nota esiste già (stessa stanza)
            const noteIndex = this.notes.findIndex(item => item.room === note.room);

            // se la nota esiste la aggiorna, altrimenti ne aggiunge una nuova
            noteIndex === -1 ? this.notes.push(note) : this.notes[noteIndex].items.push(...note.items);
        },
        clear() {
            this.notes = [];
        },
    }
}
</script>

<style scoped>
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
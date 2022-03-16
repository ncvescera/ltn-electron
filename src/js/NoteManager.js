class NoteManager {
    notes;

    constructor(element_id) {
        const tmp = document.getElementById(element_id);
        
        // deve essere un id valido
        if (tmp == null) {
            console.error("NoteManager: div not found");
            throw new Error("NoteManager: div not found");
        }

        this.notes = tmp;
    }

    addNote(text) {
        this.notes.appendChild(new Nota(text).toHtml());
        this.notes.scrollTo(0, this.notes.scrollHeight);  // scroll to bottom
    }
}
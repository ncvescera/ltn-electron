import { Nota } from './Nota';

export class NoteManager {
    notes: HTMLDivElement;
    notesArray: Nota[];

    constructor(element_id: string) {
        const tmp = <HTMLDivElement>document.getElementById(element_id);
        
        // deve essere un id valido
        if (tmp == null) {
            console.error("NoteManager: div not found");
            throw new Error("NoteManager: div not found");
        }

        this.notes = tmp;
        this.notesArray = [];
    }

    addNote(text: string): void {
        const newNota = new Nota(text);
        this.notesArray.push(newNota);
        //console.log(this.notesArray);

        newNota.toHtml().addEventListener('contextmenu', (event: MouseEvent) => { 
            // elimina la nota dall'array
            const idx = this.notesArray.indexOf(newNota);
            this.notesArray.splice(idx, 1); //rimuove solo quell'elemento (idx)

            // elimina la nota dal DOM
            this.notes.removeChild(newNota.toHtml());

            //console.log(this.notesArray);
        })


        this.notes.appendChild(newNota.toHtml());
        this.notes.scrollTo(0, this.notes.scrollHeight);  // scroll to bottom
    }
}
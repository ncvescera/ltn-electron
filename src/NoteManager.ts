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
        let newNota = new Nota(text);
        
        // controlla se c'è una nota con la stessa stanza
        if (this.notesArray.length > 0) {
            const equalRoom = this.notesArray.find(nota => (nota.room != '' && nota.room == newNota.room)); // cerca note con stessa stanza

            if (equalRoom != null) {    // ne ha trovata una
                //console.log('equal room: ');
                //console.log(equalRoom);
                
                // crea il nuovo testo unendo quello trovato a quello aggiunto
                const newText = `${equalRoom.text}${newNota.text.replace(newNota.room, '').replace('  ', ' ')}`;   // elimina la room dal secondo, sarebbe ripetitivo
                console.log(newText);

                newNota = new Nota(newText);    // crea la nuova nota unita
                this.removeNote(equalRoom);     // elimina la vecchia nota
            }
        }
        
        this.notesArray.push(newNota);  // aggiunge la nuova nota all'array
        //console.log(this.notesArray);

        // tasto destro elimina la nota (sia dal dom che dall'array)
        newNota.toHtml().addEventListener('contextmenu', (event: MouseEvent) => { 
            this.removeNote(newNota);   // elimina la nota
        })


        this.notes.appendChild(newNota.toHtml());         // aggiunge la nota al DOM
        this.notes.scrollTo(0, this.notes.scrollHeight);  // scroll to bottom

        console.log('Aggiunta nota:');
        console.log(newNota);
    }

    private removeNote(nota: Nota): void {
        // elimina la nota dall'array
        const idx = this.notesArray.indexOf(nota);
        this.notesArray.splice(idx, 1); //rimuove solo quell'elemento (idx)

        // elimina la nota dal DOM
        this.notes.removeChild(nota.toHtml());
    }
}
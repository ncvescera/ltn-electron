export class NoteManager {
    notes: HTMLDivElement;

    constructor(element_id: string) {
        const tmp = <HTMLDivElement>document.getElementById(element_id);
        
        // deve essere un id valido
        if (tmp == null) {
            console.error("NoteManager: div not found");
            throw new Error("NoteManager: div not found");
        }

        this.notes = tmp;
    }

    addNote(text: string): void {
        this.notes.appendChild(new Nota(text).toHtml());
        this.notes.scrollTo(0, this.notes.scrollHeight);  // scroll to bottom
    }
}
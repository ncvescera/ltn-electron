// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.


console.log('RENDEREER');

const textobx = <HTMLInputElement>document.getElementById("input");
const notes = <HTMLDivElement>document.getElementById("note");

textobx.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        console.log(textobx.value);

        addNote(textobx.value);
        textobx.value = '';
    }
});


function addNote(note: string): void {
    const newNote = document.createElement('span');
    newNote.innerText = note;

    // for right click
    newNote.addEventListener('contextmenu', (event: MouseEvent) => {
        manageNote(newNote, event);
    })

    // for left click
    newNote.addEventListener('click', (event: MouseEvent) => {
        manageNote(newNote, event);
    })

    notes.appendChild(newNote);
}

// potrebbe essere spostata in addNote
function manageNote(note: HTMLSpanElement, event: MouseEvent): void {
    console.log('Managing note');
    console.log(note.textContent);

    switch (event.button) {
        case 0:
            console.log('Left click');
            note.classList.toggle('barred');

            break;
        case 1:
            console.log('Middle click');
            break;
        case 2:
            console.log('Right click');
            notes.removeChild(note);
            
            break;
    }
}
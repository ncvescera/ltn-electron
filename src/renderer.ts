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
        notes.scrollTo(0, notes.scrollHeight);  // scroll to bottom
    }
});


function addNote(note: string): void {
    const newNote = document.createElement('span');
    newNote.classList.add('nota');

    const words = note.split(' ');
    words.forEach(word => {
        switch (word) {
            case 'ammo':
                newNote.appendChild(generateImage('ammo'));
                break;
            
            case 'medic':
            case 'med':
            case 'medkit':
                newNote.appendChild(generateImage('med'));
                break;
            
            case 'tool':
                newNote.appendChild(generateImage('tool'));
                break;
            
            case 'disinfect':
            case 'disinfection':
            case 'dis':
            case 'pack':
                newNote.appendChild(generateImage('disinfect'));
                break;
            
            default:
                const text = document.createElement('span');
                text.textContent = ` ${word} `
                newNote.appendChild(text);
        }
    });

    

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


function generateImage(type: 'tool'|'ammo'|'med'|'disinfect'): HTMLImageElement {
    const img = document.createElement('img');
    img.src = `./gtfoIcons/${type}.png`;
    img.classList.add('tool');

    return img
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

//const reg = new RegExp('^(\\d+)')

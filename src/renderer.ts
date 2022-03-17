// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

console.log('RENDEREER');

const textobx = <HTMLInputElement>document.getElementById("input");

textobx.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        console.log(textobx.value);

        window.manageNotes.addNote(textobx.value);  //chiamata API a preload.ts
        textobx.value = '';
    }
});

//const reg = new RegExp('^(\\d+)')

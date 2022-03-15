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
        notes.innerHTML += `<span>${textobx.value}</span>`;
        textobx.value = '';
    }
});

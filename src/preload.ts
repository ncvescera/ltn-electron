// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {ipcRenderer} = require('electron');
const ipc = ipcRenderer


window.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById('note');
    if (element)
    for (let i = 0; i < 1000; i++) {
        element.innerHTML += 'Hello World from the preload script ! !<br>';
    }

    const minButton = document.getElementById('min-button')!;
    const maxButton = document.getElementById('max-button')!;
    const restoreButton = document.getElementById('restore-button')!;
    const closeButton = document.getElementById('close-button')!;

    closeButton.addEventListener("click", event => {
        ipc.send('closeApp');
    });

    minButton.addEventListener("click", event => {
        ipc.send('minApp');
    });

    maxButton.addEventListener("click", event => {
        ipc.send('maxApp');
        restoreButton.classList.toggle('maximized');
        maxButton.classList.toggle('maximized');
    });

    restoreButton.addEventListener("click", event => {
        ipc.send('restoreApp');
        restoreButton.classList.toggle('maximized');
        maxButton.classList.toggle('maximized');
    });
})

// listener per gestione finestra

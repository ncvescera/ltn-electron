// All of the Node.js APIs are available in the preload process.
import { NoteManager } from "./NoteManager";

// It has the same sandbox as a Chrome extension.
const {ipcRenderer} = require('electron');
const ipc = ipcRenderer


let noteManager: NoteManager;

window.addEventListener("DOMContentLoaded", () => {
    const minButton = <HTMLButtonElement>document.getElementById('min-button');
    const maxButton = <HTMLButtonElement>document.getElementById('max-button');
    const restoreButton = <HTMLButtonElement>document.getElementById('restore-button');
    const closeButton = <HTMLButtonElement>document.getElementById('close-button');

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

    noteManager = new NoteManager('note'); 
});

const { contextBridge } = require('electron')

declare global {
    interface Window { 
        manageNotes: {
            addNote: (text: string) => void;
        } 
    }
}

contextBridge.exposeInMainWorld('manageNotes', {
    addNote: (text: string) => { noteManager.addNote(text); },

})


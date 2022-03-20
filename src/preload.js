const { contextBridge, ipcRenderer } = require('electron')
const ipc = ipcRenderer

contextBridge.exposeInMainWorld('windowButtonsAPI', {
    close: () => {ipc.send('closeApp');},
    min: () => {ipc.send('minApp');},
    max: () => {ipc.send('maxApp');}
})

console.log('PRELOAD')
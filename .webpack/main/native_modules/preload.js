console.log('PRELOAD');
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('API', {
    test: () => { return 'OK!' }
})
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

console.log('RENDEREER');
//console.log(window.myAPI.desktop);

const noteManager = new NoteManager('note');
const textBox = document.getElementById("input");

textBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
      console.log(textBox.value);

      noteManager.addNote(textBox.value);
      textBox.value = '';
  }
});

//const reg = new RegExp('^(\\d+)')

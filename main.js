 const { app, BrowserWindow } = require('electron')

 function createWindow() {
     win = new BrowserWindow({
         width: 800,
         height: 800,
         webPreferences: {
             nodeIntegration: true
         }
     });

     win.loadFile('index.html');
 }
const { app, BrowserWindow, globalShortcut } = require('electron');

app.allowRendererProcessReuse = true;

let win;

function createBrowserWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 400, 
    minHeight: 600,
    backgroundColor: "#fff",
    autoHideMenuBar: true,
    webPreferences: {
      devTools: true,
      contextIsolation: true,
      webviewTag: true,
      enableRemoteModule: true,
      nodeIntegration: false,
      nativeWindowOpen: true,
      webSecurity: true,
      allowRunningInsecureContent: true
    }
  })

  win.loadURL(`file://${__dirname}/index.html`, { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36' });
}

app.whenReady().then(() => {
  createBrowserWindow();

  globalShortcut.register('Alt+X', () => {
    console.log('Alt+X is pressed') // Test for download button
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process')
const installExtension = require('electron-devtools-installer').default
const chalk = require('chalk')
const {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

// Production or dev?
const development = process.env.NODE_ENV === 'development'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  if (development) {
    win.loadURL(`file://${__dirname}/loading.html`)
    // spawn dev server (react-scripts start) as child, listen for stdout and
    // reaload win when dev server is ready
    const devServer = spawn('react-scripts', ['start'])

    devServer.stdout.on('data', data => {
      const message = data.toString()

      if (message.split(' ')[0] === 'Failed') {
        console.log(chalk.red(message))
      } else {
        console.log(chalk.green(message))
      }

      const serverIsUp = message.includes('http://localhost:3000/')

      if (serverIsUp) {
        win.loadURL('http://localhost:3000/')
      }
    })

    devServer.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    })

    devServer.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    })

    // Open the DevTools.
    win.webContents.openDevTools()
  } else {
    // load the index.html of the app.
    win.loadURL(`file://${__dirname}/build/index.html`)
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

const installExtensions = async () => {
  try {
    const extensions = {
      'REACT_DEVELOPER_TOOLS': REACT_DEVELOPER_TOOLS,
      'REDUX_DEVTOOLS': REACT_DEVELOPER_TOOLS
    }


    await Object.keys(extensions).forEach(extensionName => {
      installExtension(extensions[extensionName])
      console.log(chalk.green(`Added Extension:  ${extensionName}`))
    })

    console.log(chalk.green('All extensions installed successfully!'))
    createWindow()
  } catch (err) {
    console.log(chalk.red(err))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', development ? installExtensions : createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

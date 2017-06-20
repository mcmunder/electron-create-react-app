const electron = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')
const chalk = require('chalk')
const installExtension = require('electron-devtools-installer').default
const {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({width: 900, height: 680})

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

const installExtensions = async () => {
  try {
    const extensions = {
      REACT_DEVELOPER_TOOLS: REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS: REACT_DEVELOPER_TOOLS
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

app.on('ready', isDev ? installExtensions : createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

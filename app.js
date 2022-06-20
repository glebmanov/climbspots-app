const https = require('https')
const fs = require('fs')
const path = require('path')

const express = require('express')
const config = require('config')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = config.get('port') || 5511

const start = async () => {
  try {
    https.createServer(app).listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

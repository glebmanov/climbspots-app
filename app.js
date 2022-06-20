const https = require('https')
const fs = require('fs')
const path = require('path')

const options = {
  key: fs.readFileSync('cert/private.key'),
  cert: fs.readFileSync('cert/certificate.crt'),
  ca: fs.readFileSync('cert/certificate_ca.crt'),
}

const express = require('express')
const config = require('config')

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

  app.use((req, res, next) => (!req.secure ? res.redirect(301, 'https://' + req.headers.host + req.url) : next()))
}

const PORT = config.get('port') || 5511

const start = async () => {
  try {
    https.createServer(options, app).listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

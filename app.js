const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
const config = require('config')

const app = express()
const PORT_HTTP = config.get('portHttp')
const PORT_HTTPS = config.get('portHttps')
const options = {
  key: fs.readFileSync('cert/private.key'),
  cert: fs.readFileSync('cert/certificate.crt'),
  ca: fs.readFileSync('cert/certificate_ca.crt'),
}

app.use((req, res, next) => (req.secure ? next() : res.redirect(301, `https://${req.headers.host}${req.url}`)))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const start = async () => {
  try {
    http.createServer(app).listen(PORT_HTTP, () => console.log(`App has been started on port ${PORT_HTTP}...`))
    https
      .createServer(options, app)
      .listen(PORT_HTTPS, () => console.log(`App has been started on port ${PORT_HTTPS}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

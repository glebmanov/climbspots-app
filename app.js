const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const options = {
  key: fs.readFileSync('cert/private.key'),
  cert: fs.readFileSync('cert/certificate.crt'),
  ca: fs.readFileSync('cert/certificate_ca.crt'),
}

app.use(cors())
app.use('/api', require('./routes/weather.routes'))

app.use((req, res, next) => (req.secure ? next() : res.redirect(301, `https://${req.headers.host}${req.url}`)))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (_, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const start = async () => {
  try {
    http.createServer(app).listen(80, () => console.log(`App has been started on port 80...`))
    https.createServer(options, app).listen(443, () => console.log(`App has been started on port 443...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

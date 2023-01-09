const http = require('http')
const handler = require('./handlerRoutes')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(handler)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

process.on('uncaughtException', err =>
  console.log(`Server error! ==== ${err} ====`)
)

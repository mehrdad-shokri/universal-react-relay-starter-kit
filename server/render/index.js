import express from 'express'
import debug from 'debug'

import setup from './setup'

const log = debug('graphql')
const PORT = process.env.PORT_APP
let isBuilt = false

const app = express()

app.get('/health', (req, res) => {
  res.sendStatus(isBuilt ? 200 : 400)
})

const done = () => !isBuilt && app.listen(PORT, () => {
  isBuilt = true
  log(`BUILD COMPLETE -- Listening @ http://localhost:${PORT}`)
})

setup(app, done)

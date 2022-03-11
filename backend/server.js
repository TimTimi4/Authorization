const express = require('express')

const app = express()
const port = 1717
const cors = require('cors')
const qs = require('query-string')
const fetch = require('node-fetch')

// Избавляет от корс проблем (при наличии фронта и бэка на одном урле бывают проблемы)
app.use(cors())

app.use(express.json())

const clientId = 'fae8d4b9598a92c1fc1f'
const clientSecret = '94b7cf426afe05b931d331a18363d19a54011f24'

app.post('/auth', (req, res) => {
  const tokenUrl = 'https://github.com/login/oauth/access_token'
  const params = qs.stringify({
    client_id: clientId,
    client_secret: clientSecret,
    code: req.body.code,
  })
  const fetchLink = `${tokenUrl}?${params}`

  fetch(fetchLink, {
    method: 'POST',
  })
    .then((response) => response.text())
    .then((text) => {
      res.send(qs.parse(text))
    })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

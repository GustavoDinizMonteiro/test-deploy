const express = require('express')
const app = express()


app.route('/').get((req, res) => res.status(200).json({ ok: true }))

app.listen(80, () => console.log('app listem port 80'))

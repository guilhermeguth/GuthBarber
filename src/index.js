const express = require('express')
const app = express()
app.use(express.json())

require('./routes')(app)
app.get('/', (req, res) => res.status(200).send('Servidor rodando na porta 3000'))

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

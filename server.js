const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const routes =require('./routes/index')

const app = express()
const port = 4242

app.use(cors())

app.use(morgan('dev'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(bodyParser.urlencoded ({ extended: false}))
app.use(bodyParser.json())



app.use("/character", routes.character)
app.use("/addCharacter", routes.addCharacter)


app.get('/', (req, res)=>{
    res.status(200).send('Acceuil')
})

app.listen(port, console.log (`http://localhost:${port}`))
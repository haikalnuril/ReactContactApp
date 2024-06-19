const express = require ('express')

const cors = require ('cors')

const app = express()

app.use(cors())

//use body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 3000;

app.get('/', (req, res) =>{
    res.send('hello world!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
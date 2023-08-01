const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { route } = require('./routes/customerRoutes')

const app = express()

var corOptions = {
    origin: 'http://localhost:4200'
}

// middlewares
app.use(cors(corOptions))
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes 
const router = require('./routes/customerRoutes')
app.use('/customer', router)

//test api
app.get('/', (req, res)=> {
    res.send('working fine')
})


// Port
const PORT = process.env.PORT || 3000

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
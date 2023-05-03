const express = require('express');
const conectarDB = require('../DB')
const cors = require('cors')

const bodyParser = require('body-parser')
const app = express();

conectarDB()

app.use( cors() )
app.use( bodyParser.json() )

//app.use( "/api/cities" , require('../Router/City') )
app.use( "/api" , require('../Router/City')  )



app.listen(3000, ()=> {
    console.log('El servidor esta ejecutandose en el puerto 3000');
})
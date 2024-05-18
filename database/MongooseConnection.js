const mongoose = require('mongoose');
require('dotenv').config()

//para comenzar a leer variables dotenv, es procces.env.nombrevariable
mongoose.connect(process.env.CONN_STRING_MONGOOSE)

const connectionObj = mongoose.connection

connectionObj.on('connected', ()=> {
    console.log('MongoDB connection successful')
})

connectionObj.on('error', ()=> {
    console.log('MongoDB connection failed...')
})
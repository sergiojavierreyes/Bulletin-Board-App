//require postgres library and necessary modules
const pg = require ('pg')
const express = require('express')
const fs= require('fs')
const app = express()


//connects to the database
let connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")


//Renders a page that displays a form 
app.get('/form', (req,res)=> {
	res.render('form')
})




//Created a server that listens on port 1337
app.listen(1337,() => {
	console.log('Up and Running at port 1337!')
})


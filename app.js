//require postgres library and necessary modules
const pg = require ('pg')
const express = require('express')
const fs= require('fs')
const app = express()
const bodyParser = require ('body-parser')

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")

app.use(bodyParser.urlencoded({extended:true}))


//connects to the database
let connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';



//Renders a page that displays a form 
app.get('/form', (req,res)=> {
	res.render('form')
})


//Fetches messages from database
app.get('/results', (req, res) =>{
	
	res.redirect('results')

})

//takes in the post request from the form, and shows each of the messages people have posted.
app.post('/results', (req, res) => {
	//pg connect
	pg.connect(connectionString, (err, client, done) =>{
		if (err) throw (err)
			client.query('insert into messages(title, body) values ($1, $2)', [
				req.body.title, req.body.textmessage])

		done()
		res.redirect('results') 
	})
})


//Created a server that listens on port 1337
app.listen(1337,() => {
	console.log('Up and Running at port 1337!')
})


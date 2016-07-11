"use strict";

const express = require('express'),
	  server = require('./data/server/settings.js'),
	  paths = require('./data/app/paths.js'),
	  appSettings = require('./data/app/settings.js'),
	  bodyParser = require('body-parser'),
	  mysql      = require('mysql'),
	  connection = mysql.createConnection({
	  	host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'testdb'
	  }),
	  app = express();

app
	.set('views','views')
	.set('view engine','pug')
	.use('/assets',express.static(__dirname + '/assets'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({
	  extended: true
	}));

app.listen(server.port, () => console.log(`Serving from ${server.port}`));

for(let page in paths) {
	app.get(paths[page].route, (req,res) => {
		res.render(paths[page].file, {app:appSettings,page:paths[page]})
	})
}

app.post('/action', (req,res) => {
	console.log(req.body)
	res.render('index')
})
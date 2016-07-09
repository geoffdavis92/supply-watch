"use strict";

const express = require('express'),
	  server = require('./data/server/settings.js'),
	  paths = require('./data/app/paths.js'),
	  appSettings = require('./data/app/settings.js'),
	  app = express();

app
	.set('views','views')
	.set('view engine','pug');

app.listen(server.port, () => console.log(`Serving from ${server.port}`));



for(let page in paths) {
	app.get(paths[page].route, (req,res) => {
		res.render(paths[page].file, {app:appSettings,page:paths[page]})
	})
}
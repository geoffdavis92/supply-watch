const express = require('express'),
	  server = require('./data/server/settings.js'),
	  paths = require('./data/app/paths.js'),
	  app = express();

app
	.set('views','views')
	.set('view engine','pug')

app.listen(server.port, () => console.log(`Serving from ${server.port}`));

for(path in paths) {
	app.get(path.route, (req,res) => {
		res.serve(path.file)
	})
}
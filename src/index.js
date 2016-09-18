const express = require('express');
const thinky = require('thinky')({ host: 'db' });
const app = express();

console.log('Listening on 3000');

app.get('/', (req, res) => {
	thinky
		.dbReady()
		.then(() => {
			thinky.r.db('test').info().run().then(info => res.send(info));
		});
});

app.listen(3000);

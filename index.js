var express = require('express');
var app = express();
var port = 3000;

app.use((req, res, next) => {
	res.setHeader('content-type', 'application/json');
	next();
});

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/health-check', (req, res) => {
	res.send('success');
});

app.get('*', (req, res) => {
	res.status(404);
});

app.listen(port, () => {
	console.log('Docker Node App running')
});
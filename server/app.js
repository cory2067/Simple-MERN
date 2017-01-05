const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/users', (req, res) => {
	res.json([
		{ name: "cor", desc: "neat person who does things" },
		{ name: "jynnie", desc: "neat person who also does things" },
		{ name: "mntan", desc: "neat person who does things as well" }
		]);
});
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;

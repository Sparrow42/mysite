const express = require('express');
const app = express(); 
const addModule = require('./04_add.js');

app.get('/', (req, res) => res.send('Hello')); 
addModule.add(app, express);
app.listen(3000, function() { console.log('Listening on port 3000')} );

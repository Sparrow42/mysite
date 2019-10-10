const express = require('express')
const app = express(); 
app.get('/', (req, res) => res.send('Hello')); 
//httpのget,post,（パス、）
//function f (hikisu) {syori}
//=> const f = (hikisuu) => {syori}, 

app.listen(3000, function() { console.log('Listening on port 3000')} );

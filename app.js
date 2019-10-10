const express = require('express') //const　定数、let　変わる数
const app = express(); 
app.get('/', (req, res) => res.send('Hello')); 
//httpのget,post,（パス、）
//function f (hikisu) {syori}
//=> const f = (hikisuu) => {syori}, 

//console.log ->printみたいな。コマンドプロント
app.listen(3000, function() { console.log('Listening on port 3000')} );
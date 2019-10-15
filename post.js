const express = require('express');
const app = express();

app.get('/', (req,res) => { //postだとうまくいかないのはなぜ
    res.send('post!');
});
app.listen(3000, function() { console.log('Listening on port 3000')} );

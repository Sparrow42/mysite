const express = require('express');
const app = express();

app.use(express.static('web'));

//todoリストをクライアントに送信する
//req->相手から送られてきた情報。res->サーバーから送る情報。
app.get('/api/list', (req, res) => {
    const todolist = [
        {title: 'javascriptの勉強をする。', done:true},
        {title: 'node.jsの勉強をする。', done:false},
        {title: 'バイトに行く。', done:false}
    ];
    res.json(todolist);
});

app.listen(3000, ()=>console.log('Listening on port 3000'));

// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// webフォルダの中身を公開する
app.use(express.static('web'));

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
//req->相手から送られてきた情報。res->サーバーから送る情報。
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    //（JSON->データ交換フォーマット。言語間でやり取りをするためのデータ形式の決まり。）
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening ooooooooon port 3000'));

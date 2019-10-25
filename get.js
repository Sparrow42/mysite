const express = require('express');
const app = express();
const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  database: 'todo_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
});

/*** テーブル削除用***/
/*
const sql = "DROP TABLE todo_table;";
connection.query(sql, function(err){
  if(err) throw err;
  console.log("Table droped");
});
*/

/*テーブル作成*/
const sql = "CREATE TABLE IF NOT EXISTS todo_table"
    +" ("
    +"id INT AUTO_INCREMENT PRIMARY KEY,"
    +"title CHAR(30),"
    +"detail TEXT,"
    +"LimitDate datetime,"
    +"isComp INT(2)"
    +");";

connection.query(sql, function (err, result) {  
    if (err) throw err;
    console.log("Table created");  
});

//const time = date("Y/m/d H:i:s");
//const sql = "INSERT INTO todo_table"
//  +" (title, detail, LimitDate, isComp)"
//  +" VALUES ()";
//connection.query()

connection.query('SELECT * from todo_table;', function (err, rows, fields) {
  if (err) { console.log('err: ' + err); } 
  app.get('/api/get-all-todo', (req, res) => {
    //const todoList = [
    //    { id: rows[0].id, title: rows[0].title }
    //];
    const todoList_json = JSON.stringify(rows);
    res.json(todoList_json);
  });
});
//console.log(todoList_json);  

app.listen(3000, () => console.log('Listening on port 3000'));

connection.end();

/*
app.get('/', (req, res) => {
  const todoList = [
      { title: 'JavaScriptを勉強する', done: true },
      { title: 'Node.jsを勉強する', done: false },
      { title: 'Web APIを作る', done: false }
  ];
  res.json(todoList);
});
*/

//app.listen(3000, () => console.log('Listening on port 3000'));

/*
// userdataのカラムを取得
connection.query('SHOW COLUMNS FROM userdata;', function (err, rows, fields) {
  if (err) { console.log('err: ' + err); }
 
  console.log(rows[0].Field);
  console.log(rows[1].Field);
});


//todoリストをクライアントに送信する
//req->相手から送られてきた情報。res->サーバーから送る情報。
app.get('/api/get-all-todo', (req, res) => {
    const todolist = [
        {id: '',title: 'javascriptの勉強をする。', done:true},
        {title: 'node.jsの勉強をする。', done:false},
        {title: 'バイトに行く。', done:false}
    ];
    res.json(todolist);
});

app.listen(3000, ()=>console.log('Listening on port 3000'));
*/

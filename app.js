var express = require('express');

var app = express();
//3000포트 기반으로 아래 콜백 함수를 실행
app.listen(3000, function(){
    console.log("start Server!!");
})


// 아래 로그가 먼저 실행된다. 이유는 비동기 
console.log("end of server code");


app.get('/', function (req, res){
    // res.send("<h1>HI!</h1>")
    res.sendFile(__dirname+"/public/main.html");
})
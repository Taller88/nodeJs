var express = require('express');

var app = express();
//3000포트 기반으로 아래 콜백 함수를 실행
app.listen(3000, function(){
    console.log("start Server!!");
})

// static 디렉터리를 express에 등록하는 과정
// static 파일은 html, css, js 같은 정적인 파일을 의미
app.use(express.static('public'))


// 아래 로그가 먼저 실행된다. 이유는 비동기 
console.log("end of server code");

//url routing
app.get('/', function (req, res){
    // res.send("<h1>HI!</h1>")
    console.log("/ Function")
    res.sendFile(__dirname+"/public/main.html");
})

app.get('/main', function (req, res){
    // res.send("<h1>HI!</h1>")
    console.log("main Function")
    res.sendFile(__dirname+"/public/main.html");
})


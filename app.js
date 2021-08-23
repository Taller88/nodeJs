var express = require('express');
var bodyParser = require('body-parser')
var app = express();
//3000포트 기반으로 아래 콜백 함수를 실행
app.listen(3000, function(){
    console.log("start Server!!");
})

// static 디렉터리를 express에 등록하는 과정
// static 파일은 html, css, js 같은 정적인 파일을 의미
app.use(express.static('public'))
// express 모듈에서 내가 이것을 쓸게 라고 등록
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// view engine은 ejs야 -> 따로 include 안해줘도
app.set('view engine', 'ejs')

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

/*
    post
        HTTP 메소드 
        패킷의 body 

    * get의 경우에는 request값을 서버에서 받을 때 req.param 요런 식으로 받지만 
        post는 body parer라는 모듈이 필요
*/
 
app.get('/email', function (req, res){ 
    // res.send("<h1>HI!</h1>")
    console.log("email Function")
    res.sendFile(__dirname+"/public/form.html");
})

app.post("/email_post", function(req, res){
    // console.log("req:"+JSON.stringify(req));
 
    // console.log("req:"+JSON.stringify(req));
    // console.log("req:"+req.email)
    console.log(req.body);
    console.log(req.body.email);
    // res.send("Success post transfer \n result: "+req.body.email);
    res.render('email.ejs', {'email' :req.body.email})
})


app.post("/ajax_send_email", function(req, res){-
    // req.body.email
    // sendAjax에서 {'email': req.body.email}
    console.log("I got Request!!");
    console.log(req.body.email);
    var responseData = {'result':'ok', 'email':req.body.email};
    res.json(responseData);

})



// ejs view 템플릿 ejs, pug 등 종류가 다양함
// express 모듈에서  데이터와 html 결합해주는 
// express Getting Started 쭉 따라해보는 거 추천

// 미리 html 만들어두고 

  
// node_module 을 없어도 pakage.json의 dependency를 읽어서 설치를 해줌

//ajax 는 브라우저에서 새로고침 없이 XMLHttpRequest 보낼수 있고 서버에서 유효성 검사 후 응답값 보냄 

// 요청과 응답은 모두 JSON 

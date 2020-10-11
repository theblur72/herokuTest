var bodyParser = require('body-parser');

var express = require('express');
const PORT = process.env.PORT||3000;
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
var router = require('./router/main')(app);
var db = require('./db');




app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);




var server = app.listen(PORT, function(){
    console.log("Express server has started on port 3000")
})

/*오늘 배운거
1. 순서가 중요하다
2. index.js : 필요한 모듈을 정의하고 서버를 연다.
3. router폴더의 main.js : 필요한 웹페이지의 동작들을 관리한다. url이 어떤 상태일시 어떤 동작을 할지 나타내고, html을 불러오기도 한다
4. 이건 역할별로 나눈거지 사실 스까짬뽕해도 상관없다.
 */
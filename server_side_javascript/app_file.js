var express = require('express'); //express 엔진 사용
var bodyParser = require('body-parser') //body-parser 사용
var app = express();
app.use(bodyParser.urlencoded({ extended: false })) //post방식 요청을 가로챈다.
app.set('views', './views'); //view는 ./views 경로 하위에 두겠다 선언
app.set('view engine', 'jade'); //view engine에 jade 를 사용하겠다고 선언
app.locals.pretty = true; //개행처리

app.get('/topic/new', function(req, res){
    res.render('new');
});

app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send('hi, post, ' + req.body.title);
});

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
});
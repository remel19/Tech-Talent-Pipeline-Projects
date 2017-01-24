var pg = require('pg');
var express = require('express');
// body parser
var bodyParser = require('body-parser');



var app = express();

// json method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.set('view engine', 'ejs')
app.set('views', './views')
app.set('port', (process.env.PORT || 3000))

var Database = process.env.DATABASE_URL;
//get the home page on load
app.get('/', function(req,res){
  pg.connect(Database, function(err,client,done){
    client.query(`select * from messages`, function(err, result) {
      res.render('home', { data: result.rows});
      done();
      pg.end();
      })
  })
})

//post the messages to the bulletin board and saves to database
app.post('/', function(req,res){
  pg.connect(Database, function(err, client, done){
    client.query(`insert into messages(title,body) values('${req.body.title}','${req.body.body}')`, function(err, result){
      res.redirect('/');
      done();
      pg.end();
    })
  })

})

//gets the bulletin board with the messages
app.get('/posts', function(req, res){
  pg.connect(Database, function(err, client, done){
    client.query(`select * from messages`, function(err, result) {
      res.render('posts', { data: result.rows});
      done();
      pg.end();
    })
  })
})

//gets the single post page
app.get('/post/:id', function(req,res){
  pg.connect(Database, function(err,client,done){
    var post_id = req.params.id;
    client.query(`select * from messages where id = '${post_id}'`, function(err, result){
      res.render('singlePost', {data: result.rows});
      done();
      pg.end();
    })
  })
})

//deletes the post and returns to home page
app.get('/delete/post/:id', function(req, res){
  pg.connect(Database, function(err,client,done){
    var post_id = req.params.id;
    client.query(`delete from messages where id ='${post_id}'`, function(err,result){
      res.redirect('/');
      done();
      pg.end();
    })
  })
})

//if page not found return to home page
app.get("*", function(req,res){
  res.redirect('/')
})

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
})

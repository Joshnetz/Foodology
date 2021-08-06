var https = require('https');
const express = require('express');
const fs = require('fs');
const url = require("url");
var path = require('path');
var cookieParser = require('cookie-parser');
const app = express();
const Promise = require('es6-promise').Promise;
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const csrf = require('csurf');
const compression = require('compression');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');


const csrfProtection = csrf();

var  options = {
  //cert:  fs.readFileSync(__dirname +'/cert.pem', 'utf8'),
  //key: fs.readFileSync(__dirname +'/privkey.pem', 'utf8'),
  //ca: fs.readFileSync(__dirname +'/chain.pem', 'utf8'),
  //requestCert: false,
  //rejectUnauthorized: false
  
};

const server = require('http').Server(options,app);
const io = require('socket.io')(server);

//app
app.set('secret', 'Joseph12345678');
app.disable('x-powered-by');
app.set('trust proxy', 1); // trust first proxy

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));
app.use(compression());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

app.use(session({
  secret: 'ingercodenodebase',
  resave: true,
  saveUninitialized: true,
}));

//app.use(csrfProtection);

app.use(express.static('public'));
app.set('views', 'Views');
app.set('view engine', 'ejs');


// Middleware ----



//Controladores -------------------------------


//Router basicos ------------------------------

app.get('token',  function(req, res) { 
    
    var options = {
        'method': 'POST',
        'hostname': 'rests-integrations-dev.auth0.com',
        'path': '/oauth/token?',
        'headers': {
            'Content-Type': 'application/json',
        },
    };

    var reqdata = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    var postData = JSON.stringify({
    "client_id": "7iCfjZCO4bTns3OjqLK4de2GV3sp6Ymd",
    "client_secret": "RESDFGHJKLXCD",
    "audience": "https://microservices.dev.rappi.com/api/v2/restaurants-integrations-public-api",
    "grant_type": "client_credentials"
    });

    reqdata.write(postData);

    reqdata.end();
});


//Realiza la peticón a la api de Rapi para devolver los restaurantes que estan en la plataforma
app.get('/listar_restaurantes' , function(req, res) { 
    
    var token=req.params.token;
    var options = {
        'method': 'GET',
        'hostname': 'microservices.dev.rappi.com',
        'path': '/api/v2/restaurants-integrations-public-api/stores-pa',
        'headers': {
            'Content-Type': 'application/json',
            'x-authorization': token
        }
    };

    var reqdata = https.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    reqdata.end();

});



app.get('*', function(req, res) {
  res.render('error', { title: 'Hey', message: 'Hello there!'});
});


//Socket io -----------------------------

io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets '+socket.id);
  console.log("Procesos "+n_procesos);
  socketidentid=socket.id; 
 


  socket.on('disconnect', function() {
      
      console.log('Se desconecto '+socket.id);
     
      //desconectar(socket.id);
  });
});


server.listen(9207, function() {
  console.log("Servidor corriendo en https:localhost:9207");
});
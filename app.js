//. app.js
var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

//. Top Page
app.get( '/', function( req, res ){
  res.render( 'index', {} );
});

var http_port = process.env.PORT || 8080;
app.listen( http_port );
console.log( "server starting on " + http_port + " ..." );

module.exports = app;

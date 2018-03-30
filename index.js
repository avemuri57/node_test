const express = require('express');

var app = express();

var PORT = process.env.PORT || 5050;


app.get('/',function(req,res){
	res.send({"Hello":"World"});
});

app.listen(PORT,function(){
	console.log("Listening on port "+PORT);
});

module.exports = app;
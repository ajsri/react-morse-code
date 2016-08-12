var express = require('express');

var app = express();

app.use(express.static("public"))


app.get("*", function(request, response){
  response.sendFile(__dirname + "/public/index.html")
})

app.listen("3001", function(){
  console.log("now listening on 3001")
})
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.send("My page is about nodejs");
})

app.get("/contato", function(req,res){
    res.send("E-mail: viniciusmuniz825@gmail.com");
})

app.get("/ola/:nome/:cargo", function(req,res){
    res.send("<h1>Ola "+ req.params.nome+"<h1>"+"<h2>Você é um "+ req.params.cargo+"<h2>");
})

app.listen(8081, function(){
    console.log("Servidor rodando");
});
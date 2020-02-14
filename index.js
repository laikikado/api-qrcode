var express = require('express'); 
var app = express();
var cors = require('cors');

let data = require('./data');

app.use(
   cors({
       credentials: true,
       origin: true
   })
);

app.options('*', cors());

app.get("/codespromos", (req, res) => {
    res.json(data);
 });

 app.get("/codespromos/:id", (req, res) => {
    const codepromoId = req.params.id;
    const codepromo = data.find(_codepromo => _codepromo.id === codepromoId);
 
    if (codepromo) {
       res.json(codepromo);
    } else {
       res.json({ message: `Le code promo ${codepromoId} n'existe pas`})
    }
 });
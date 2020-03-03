var express = require('express'); 
var app = express();
var cors = require('cors');
port = 3000;

let data = require('./data');

app.listen(port, () =>  {
   console.log('le serveur fonctionne sur le port ${port}')
})

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

//app.get("/codespromos/:id", (req, res) => {
app.get("/codespromos", (req, res) => {
    const codepromoId = req.params.id;
    const codepromo = data.find(_codepromo => _codepromo.id === codepromoId);
 
    if (codepromo) {
       res.json(codepromo);
    } else {
       res.json({ message: `Le code promo ${codepromoId} n'existe pas`})
    }
 });
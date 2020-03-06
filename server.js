let express = require('express');
let app = express();
let cors = require('cors');

let data = require('./data');

app.listen(process.env.PORT || 3000, function(){
    console.log('le serveur fonctionne sur le port ${port}')
});

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.options('*', cors());


/*app.get("/codespromos", function(req, res) => {
    res.json(data);*/
app.get('/', function(req, res) {
    res.send("hello world");
});

/*app.get("/codespromos/:id", function(req, res) => {
    const codepromoId = req.params.id;
    const codepromo = data.find(_codepromo => _codepromo.id === codepromoId);

    if (codepromo) {
       res.json(codepromo);
    } else {
       res.json({ message: `Le code promo ${codepromoId} n'existe pas`})
    }
 });*/
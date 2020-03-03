var express = require('express'); 
var app = express();
var cors = require('cors');
const PORT = 3000;

let data = require('./data');

app.listen(process.env.PORT || 3000, () =>  {
   console.log('le serveur fonctionne sur le port ${port}')
})

app.use(
   cors({
       credentials: true,
       origin: true
   })
);

app.options('*', cors());

/*app.get("/codespromos", function(req, res) => {
    res.json(data);*/
app.get('/', (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
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
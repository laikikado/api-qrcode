let express = require('express');
let app = express();
let cors = require('cors');
const port = 3000

let data = require('./data');

app.listen(process.env.PORT || port, function(){
    console.log(`le serveur fonctionne sur le port ${port}`)
});

async function main(){

    const uri = "mongodb+srv://root:root@cluster-jigqf.azure.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.options('*', cors());

app.get("/codespromos", function(req, res) {
        res.json(data);
    }
);

app.get("/codespromos/:id", function(req, res) {
    const codepromoId = req.params.id;
    const codepromo = data.find(_codepromo => _codepromo.id == codepromoId);

    if (codepromo) {
        res.json(codepromo);
    } else {
        res.json({ message: `Le code promo ${codepromoId} n'existe pas`})
    }
});

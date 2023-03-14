const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const dbName = 'urlShortener'; 

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})



 

module.exports = async () => {
    //conexión con el servidor
    await client.connect(); 
    const close = client.close.bind(client)
    const conectDB = client.db(dbName)
    return {conectDB, close} //retornamos la conexión con el nombre de la db a usar
}

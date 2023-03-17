const express = require("express");
const cors = require("cors");
const expressValidator = require('express-validator')

require('dotenv').config();





// llamamos a inicio DB
const initDB = require("./config/db");


const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false })); //nos permite leer la respuesta del usuario desde url

app.use(express.json());  // permite leer desde json



// ejecutamos conexion DB

initDB();


const port = process.env.PORT || 8000;  // TOMA EL PUERTO QUE DA EL SERVIDO CLOUSTING Y SINO EL 9000


// routes
app.use("/api", require("./routes"));


// app.use(express.static(path.join(__dirname,'public')));  // cargar contenido statico para ejs


app.get("/", (req, res) => {
  res.send("Welcome to my API");
  
});

app.listen(port, () => {
    console.log(`Todo funcionando en el puerto http://localhost:${port}`);
  });
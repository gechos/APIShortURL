const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());  // permite leer desde json
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false })); //nos permite leer la respuesta del usuario desde url
const port = process.env.PORT || 8000;  // TOMA EL PUERTO QUE DA EL SERVIDO CLOUSTING Y SINO EL 8000


// llamamos a inicio DB
const initDB = require("./config/db");

// ejecutamos conexion DB

initDB();


// routes
app.use("/api", require("./routes"));


// app.use(express.static(path.join(__dirname,'public')));  // cargar contenido statico para ejs


app.get("/", (req, res) => {
  res.send("Welcome to my API");
  
});

app.listen(port, () => {
    console.log(`Todo funcionando en el puerto http://localhost:${port}`);
  });
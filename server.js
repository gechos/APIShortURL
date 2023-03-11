const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

// llamamos a inicio DB y ejecutamos

const initDB = require("./config/db");
initDB();

const port = process.env.PORT || 8000;  // TOMA EL PUERTO QUE DA EL SERVIDO CLOUSTING Y SINO EL 9000

app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false })); //nos permite leer la respuesta del usuario desde el formulario


// routes
app.use("/", require("./routes"));


app.get("/", (req, res) => {
  res.send("Welcome to my API");
});


app.listen(port, () => {
    console.log(`Todo funcionando en el puerto http://localhost:${port}`);
  });
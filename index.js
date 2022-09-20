require("dotenv").config();
const express = require("express");
require("./db/conexion")

const app = express();

app.use(express.json())

app.use(require("./routes/user.routes"));
app.use(require("./routes/task.routes"))

app.listen(3000, ()=>console.log("Servidor conectado"));
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('ejs')
const dbConnect = require("./db");

const app = express();
dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(require("./routes/user.routes"));
app.use(require("./routes/task.routes"))

app.listen(3000, ()=>console.log("Servidor conectado"));
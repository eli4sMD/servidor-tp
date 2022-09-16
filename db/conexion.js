const mongoose = require('mongoose');

    try {
        mongoose.connect('mongodb+srv://iron:12345@cluster-1.w0jxijv.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Conectado a la Base de Datos');

    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }


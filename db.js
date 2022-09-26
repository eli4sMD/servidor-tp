const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.connect('mongodb+srv://elias:elias@servidortp.wqke606.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Conectado a la Base de Datos');

    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
}
module.exports = dbConnect

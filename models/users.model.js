const {model, Schema} = require("mongoose");

const user = new Schema({
    nombre: String,
    apellido: String,
    edad: Number

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("users", user);
const {model, Schema} = require("mongoose");

const task = new Schema({
    titulo: String,
    descripcion: String,
    estado: String

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("tasks", task);
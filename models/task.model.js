const {model, Schema} = require("mongoose");

const task = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        default: true
    },
    isActive:{
        type: Boolean,
        default: true
    }

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("tasks", task);
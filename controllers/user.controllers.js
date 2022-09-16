const ctrl = {};
const user = require("../models/users.model")

ctrl.getuser = async (req, res)=>{
    const users = await user.find();

    res.json(users);
}

ctrl.postuser = async (req, res)=>{
    const {nombre, apellido, edad} = req.body;

    const nuevoUsuario = new user({
        nombre,
        apellido,
        edad
    })

    const guardarUsuario = await nuevoUsuario.save();

    res.json(guardarUsuario);
}

ctrl.putuser = async (req, res)=>{
    const {id, nombre, apellido, edad} = req.body;

    const actualizarUser = await user.updateOne({_id: id},{$set:{nombre, apellido, edad}});

    res.json(actualizarUser);
}

ctrl.deleteuser = async (req, res)=>{
    const {id} = req.body;

    const eliminarUser = await user.deleteOne({_id:id});

    res.json(eliminarUser);
}

module.exports = ctrl;
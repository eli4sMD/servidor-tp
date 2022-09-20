const ctrlTask = {};
const task = require("../models/task.model")

ctrlTask.getTask = async (req, res)=>{
    const tasks = await task.find();

    res.json(tasks);
}

ctrlTask.postTask = async (req, res)=>{
    const {titulo, descripcion, estado} = req.body;

    const nuevaTarea = new task({
        titulo,
        descripcion,
        estado
    })

    const guardarTarea = await nuevaTarea.save();

    res.json(guardarTarea);
}

ctrlTask.putTask = async (req, res)=>{
    const {id, titulo, descripcion, estado} = req.body;

    const actualizarTask = await task.updateOne({_id: id},{$set:{titulo, descripcion, estado}});

    res.json(actualizarTask);
}

ctrlTask.deleteTask = async (req, res)=>{
    const {id} = req.body;

    const eliminarTask = await user.deleteOne({_id:id});

    res.json(eliminarTask);
}

module.exports = ctrlTask;
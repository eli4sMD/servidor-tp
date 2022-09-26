const ctrlTask = {};
const task = require("../models/task.model")

ctrlTask.getTask = async (req, res)=>{
    const tasks = await task.find({ isActive: true });

    res.render("index", {tasks});
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
    const id = req.params.id;
    const {titulo, descripcion, estado} = req.body;

    try {
        const tareaActualizada = await task.findByIdAndUpdate(id, { titulo, descripcion, estado })

        return res.json({
            msg: 'Tarea actualizada correctamente',
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea'
        })
    }
}

ctrlTask.deleteTask = async (req, res)=>{
    const id = req.params.id;

    try {
        await task.findByIdAndUpdate(id, { isActive: false })
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
}

module.exports = ctrlTask;
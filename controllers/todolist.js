const db = require('../models');


const createList = async (req, res) => {
    const { task } = req.body;
    const newTask = await db.Todolist.create({
        task: task
    })
    res.status(201).json(newTask);
};

const getList = async (req, res) => {
    const list = await db.Todolist.findAll();
    res.status(200).json(list);
};

const getlistById = async (req, res) => {
    const _id = req.params.id;
    const list = await db.Todolist.findOne({ where: { id: _id } });
    res.status(200).json(list);
};

const updateList = async (req, res) => {
    const _id = req.params.id;
    const { task } = req.body;
    await db.Todolist.update({
        task: task
    }, {
        where: { id: _id }
    })
    res.status(200).json(`update taskId: ${_id} success`);
};

const deleteList = async (req, res) => {
    const _id = req.params.id;
    await db.Todolist.destroy({
        where: { id: _id }
    });
    res.status(200).json(`delete taskId: ${_id} success`);
};

module.exports = {
    getList,
    getlistById,
    createList,
    updateList,
    deleteList
};
module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Todolist', {
        task: {
            type: DataTypes.STRING(300),
        }
    },{
        tableName: 'todolist',
        timestamps: false
    });

    return model;
}
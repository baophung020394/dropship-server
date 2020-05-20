module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        full_name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.INTEGER
        }

        // updatedAt: {
        //     type: Sequelize.DATE,
        //     field: 'updated_at'
        // },
        // createdAt: {
        //     type: Sequelize.DATE,
        //     field: 'created_at'
        // },

        

    });

    return User;
};
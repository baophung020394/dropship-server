module.exports = (sequelize, Sequelize) => {
    const Rut = sequelize.define("ruttiens", {
        idRut: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        soTienRut: {
            type: Sequelize.STRING
        },
        bankName: {
            type: Sequelize.STRING
        },
        accountName: {
            type: Sequelize.STRING
        },
        accountNumber: {
            type: Sequelize.STRING
        },
        momo: {
            type: Sequelize.STRING
        }
    });

    return Rut;
};
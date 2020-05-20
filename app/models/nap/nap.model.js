module.exports = (sequelize, Sequelize) => {
    const Nap = sequelize.define("naptiens", {
        idNap: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        soTienNap: {
            type: Sequelize.STRING
        },
        maNap: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }
    });

    return Nap;
};
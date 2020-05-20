module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orderreceives", {
        maDonHang: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nameReceive: {
            type: Sequelize.STRING
        },
        phoneReceive: {
            type: Sequelize.STRING
        },
        addressReceive: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        qualityProduct: {
            type: Sequelize.INTEGER
        },
        nameProduct: {
            type: Sequelize.STRING
        },
        maVanDon: {
            type: Sequelize.STRING
        },
        hinhThucDropShip: {
            type: Sequelize.STRING
        },
        pay: {
            type: Sequelize.STRING
        },
        totalPay: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        note: {
            type: Sequelize.STRING
        }
    });

    return Order;
};
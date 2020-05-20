module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        idProduct: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: Sequelize.STRING
        },
        unitPrice: {
            type: Sequelize.DOUBLE
        },
        dealPrice: {
            type: Sequelize.DOUBLE
        },
        SKU: {
            type: Sequelize.STRING
        },
        qualityProduct: {
            type: Sequelize.STRING
        },
        imageProduct: {
            type: Sequelize.STRING
        },
        typeImage: {
            type: Sequelize.STRING
        },
        dataImage: {
            type: Sequelize.BLOB('long')
        },
        idCategory: {
            type: Sequelize.INTEGER
        }
    });

    return Product;
};
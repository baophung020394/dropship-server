module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        productName: {
            type: Sequelize.STRING
        },
        unitPrice: {
            type: Sequelize.STRING
        },
        dealPrice: {
            type: Sequelize.STRING
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
        idCategory: {
            type: Sequelize.INTEGER
        }
    });

    return Product;
};
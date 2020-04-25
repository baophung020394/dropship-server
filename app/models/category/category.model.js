module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        idCategory: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: Sequelize.STRING
        },
    });
    return Category;
};
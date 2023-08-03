const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = ( sequelize, DataTypes ) => {

    const Customer = sequelize.define("customer", {
        name: {
            type : DataTypes.STRING,
            allowNull: false
        },
        email: {
            type : DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type : DataTypes.INTEGER,
            allowNull: false
        },
        city: {
            type : DataTypes.STRING,
        }
    })

    return Customer
}
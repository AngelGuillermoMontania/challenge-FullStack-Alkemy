const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("Category", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Is required name"
                },
                len: {
                    args: [2, 40],
                    msg: "minimum 3 characters"
                },
            }
        }
    }, {
        sequelize: sequelize,
        modelName: 'Category',
        tableName: 'Categories',
        timestamps: false,
        hooks: {
            beforeCreate: (category, options) => {
                category.name = category.name.charAt(0).toUpperCase() + category.name.slice(1);
            },
            beforeUpdate: (category, options) => {
                category.name = category.name.charAt(0).toUpperCase() + category.name.slice(1);
            }
        }
    })
};
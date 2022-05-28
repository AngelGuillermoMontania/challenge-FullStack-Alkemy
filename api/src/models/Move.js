const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("Move", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: ['ENTRY', 'EXIT'],
            allowNull: false,
            validate: {
                isIn: {
                    args: ['ENTRY', 'EXIT'],
                    msg: "Required is ENTRY or EXIT",
                }
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Is required name"
                },
                len: {
                    args: [2, 25],
                    msg: "minimum 3 characters"
                },
            }
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: {
                    msg: "Is required numeric type, decimal or integer"
                },
                notNull: {
                    msg: "Amount is required"
                }
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                isDate: {
                    msg: "Is required date"
                }
            }
        }
    }, {
        sequelize: sequelize,
        modelName: 'Move',
        tableName: 'Moves',
        timestamps: false,
        hooks: {
            beforeCreate: (user, options) => {
                user.type = user.type.toUpperCase();
            },
            beforeUpdate: (user, options) => {
                user.type = user.type.toUpperCase();
            }
        }
    })
};
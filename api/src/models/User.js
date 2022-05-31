const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "User",
            validate: {
                notNull: {
                    msg: "Is required name"
                },
                len: {
                    args: [2, 100],
                    msg: "minimum 3 characters"
                },
            }
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Email is required"
                }
            }
        }
    }, {
        sequelize: sequelize,
        createdAt: false,
        modelName: "User",
        tableName: "Users",
        timestamps: false,
        hooks: {
            beforeUpdate: (user, options) => {
                user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
            }
        }
    })
};

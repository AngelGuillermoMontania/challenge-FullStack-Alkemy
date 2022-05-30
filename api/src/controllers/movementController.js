const { User, Movement, Category } = require('../db.js');
const { Op } = require("sequelize");

module.exports = {
    create: async (req, res) => {
        let { id, type, concept, amount, date } = req.body;
        try {
            const newMovement = await Movement.create({
                type,
                concept,
                amount,
                date
            })
            const user = await User.findOne({
                where: {
                    id
                }
            })
            await user.addMovement(newMovement)
            const movements = await Movement.findAll({
                where: {
                    UserId: id
                },
                limit: 100
            })
            res.send({
                status: 200,
                url: "movements/create",
                ok: true,
                method: "post",
                data: movements     
            })
        } catch (error) {
            console.log(error)
            res.send({
                message: error.message,
                ok: false
            })
        }
    },
    getAll: async (req, res) => {
        const { id } = req.query
        try {
            const movements = await Movement.findAll({
                where: {
                    UserId: id
                },
                limit: 100
            })
            /* const entries = await Movement.sum('amount',{
                where: {
                    [Op.and]: [{ UserId: id }, { type: "ENTRY" }],
                }
            })
            const exits = await Movement.sum('amount',{
                where: {
                    [Op.and]: [{ UserId: id }, { type: "EXIT" }],
                }
            }) */
            res.send({
                status: 200,
                url: "movements",
                method: "get",
                ok: true,
                data: movements
            })
        } catch (error) {
            res.send({
                message: error.message,
                ok: false
            })
        }
    },
    destroy: async (req, res) => {
        const { UserId, id } = req.body
        try {
            const user = await User.findByPk(UserId)
            user.removeMovements(await Movement.findByPk(id))
            await Movement.destroy({
                where: {
                    id
                }
            })
            res.send({
                status: 200,
                url: "movements/create",
                method: "delete",
                ok: true     
            })
        } catch (error) {
            res.send({
                message: error.message,
                ok: false
            })
        }
    }
}
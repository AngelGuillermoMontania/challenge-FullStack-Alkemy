const { User, Movement, Category } = require('../db.js');
const { Op } = require("sequelize");

module.exports = {
    create: async (req, res) => {
        let { id, type, concept, category, amount, date } = req.body;
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
            const categorySearch = await Category.findOne({
                where: {
                    name: category
                }
            })
            await user.addMovement(newMovement)
            await categorySearch.addMovement(newMovement)
            const allMovements = await Movement.findAll({
                where: {
                    UserId: id
                },
                include: {
                    model: Category
                },
                limit: 100
            })
            res.send({
                status: 200,
                url: "movements/create",
                ok: true,
                method: "post",
                data: allMovements     
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
        const { id } = req.query
        try {
            const MovementToDestroy = await Movement.findByPk(id)
            const user = await User.findByPk(MovementToDestroy.UserId)
            const category = await Category.findByPk(MovementToDestroy.CategoryId)
            await user.removeMovements(MovementToDestroy)
            await category.removeMovements(MovementToDestroy)
            const allMovements = await Movement.findAll({
                where: {
                    UserId: MovementToDestroy.UserId,
                },
                include: {
                    model: Category
                },
                limit: 100
            })
            await Movement.destroy({
                where: {
                    id
                }
            })
            res.send({
                status: 200,
                url: "movements/create",
                method: "delete",
                ok: true,
                data: allMovements  
            })
        } catch (error) {
            res.send({
                message: error.message,
                ok: false
            })
        }
    }
}
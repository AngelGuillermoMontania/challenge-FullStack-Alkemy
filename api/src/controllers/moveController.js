const { User, Move, Category } = require('./../db.js');

module.exports = {
    create: async (req, res) => {
        let { id, type, name, amount, date } = req.body;
        try {
            const move = await Move.create({
                type,
                name,
                amount,
                date
            })
            const user = await User.findOne({
                where: {
                    id
                }
            })
            await user.addMove(move)
            res.send({
                status: 200,
                url: "moves/create",
                ok: true         
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
        const { id } = req.body
        try {
            const moves = await Move.findAll({
                where: {
                    UserId: id
                },
                limit: 100
            })
            res.send({
                status: 200,
                url: "moves/create",
                ok: true,
                data: moves     
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
            user.removeMoves(await Move.findByPk(id))
            await Move.destroy({
                where: {
                    id
                }
            })
            res.send({
                status: 200,
                url: "moves/create",
                ok: true     
            })
        } catch (error) {
            res.send(error)
        }
    }
}
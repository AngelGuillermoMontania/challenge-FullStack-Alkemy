const { User, Move, Category } = require('./../db.js');

module.exports = {
    findOrCreate: async (req, res) => {
        try {
            const [newUser] = await User.findOrCreate({
                where: {
                    email: req.body.email,
                },
                defaults: {
                    email: req.body.email,
                    name: req.body.email
                }
            })
            const user = await User.findOne({
                where: {
                    id: newUser.id
                },
                include: {
                    model: Category
                }
            })
            res.send({
                status: 200,
                url: "users/create",
                ok: true,
                data: user
            })
        } catch (error) {
            console.log(error.msg)
        }
    },
    editName: async (req, res) => {
        const { email, name } = req.body
        try {
            await User.update({
                name,
            },{
                where: {
                    email
                }
            });
            const user = await User.findOne({
                where: {
                    email
                }
            });
            res.send(user)
        } catch (error) {
            console.log(error.msg)
        }
    }
}
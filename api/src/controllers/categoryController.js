const { User, Movement, Category } = require("./../db.js");

module.exports = {
    getAll: async (req, res) => {
        const { id } = req.query;
        try {
            const categories = await Category.findAll({
                where: {
                    UserId: id
                },
                limit: 30
            });
            res.send({
                status: 200,
                url: "category/",
                method: "get",
                ok: true,
                data: categories    
            });
        } catch (error) {
            res.send({
                message: error.message,
                ok: false
            });
        }
    },
    findOrCreate: async (req, res) => {
        const { id, category } = req.body;
        try {
            const searchCategory = await Category.findOne({
                where: {
                    name: category
                }
            });
            if(searchCategory) {
                const categories = await Category.findAll({
                    where: {
                        UserId: id
                    },
                    limit: 30
                });
                res.send({
                    status: 200,
                    url: "category/",
                    method: "post",
                    ok: true,
                    data: categories    
                });
            } else {
                const user = await User.findByPk(id);
                const newCategory = await Category.create({
                    name: category
                });
                await user.addCategory(newCategory);
                const categories = await Category.findAll({
                    where: {
                        UserId: id
                    },
                    limit: 30
                });
                res.send({
                    status: 200,
                    url: "category/",
                    method: "post",
                    ok: true,
                    data: categories    
                });
            }
        } catch (error) {
            res.send({
                message: error.message,
                ok: false
            });
        }
    },
};
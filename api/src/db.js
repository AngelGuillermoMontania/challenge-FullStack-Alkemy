require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/challengeAlkemy`, {
    logging: false, // Set to console.log to see the raw SQL queries
    native: false, // Lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// We read all the files from the Models folder, require them and add them to the modelDefiners array
fs.readdirSync(path.join(__dirname, "/models"))
.filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
.forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
});

// We inject the connection (sequelize) to all the models
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// To relate the models we do a destructuring
const { User, Movement, Category } = sequelize.models;

// Relations
User.hasMany(Movement);       
Movement.belongsTo(User);

User.hasMany(Category);
Category.belongsTo(User);

Category.hasMany(Movement);         
Movement.belongsTo(Category);

// We export the connection and the models
module.exports = {
    ...sequelize.models,
    conn: sequelize,     
};
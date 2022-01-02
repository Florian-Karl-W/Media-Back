const config = require("../config/db-config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.MainCat = require("./Main-categories.js")(sequelize, Sequelize);
db.SubCat = require("./Sub-categories.js")(sequelize, Sequelize);
db.Media = require("./media.js")(sequelize, Sequelize);

// a MainCat has many SubCat
db.MainCat.belongsToMany(db.SubCat, {
  through: "MainCat_SubCat",
  as: "SubCat",
  foreignKey: "MainCatId",
});
// a subcategory has many Media
db.SubCat.hasMany(db.Media, { as: "Media" });
db.SubCat.belongsToMany(db.MainCat, {
  through: "MainCat_SubCat",
  as: "MainCat",
  foreignKey: "SubCatId",
});
// but a Media belongs to one SubCat
// db.Media.belongsTo(db.SubCat, {
//   foreignKey: "SubCatId",
//   as: "SubCat",
// });
db.Media.belongsTo(db.MainCat, {
  foreignKey: "MainCatId",
  as: "MainCat",
});

module.exports = db;

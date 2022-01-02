module.exports = (sequelize, Sequelize) => {
  const MainCategory = sequelize.define("main-categories", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return MainCategory;
};

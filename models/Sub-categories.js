module.exports = (sequelize, Sequelize) => {
  const SubCategory = sequelize.define("sub-categories", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return SubCategory;
};

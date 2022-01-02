module.exports = (sequelize, Sequelize) => {
  const Media = sequelize.define("medias", {
    name: {
      type: Sequelize.STRING,
    },
    photo: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Media;
};

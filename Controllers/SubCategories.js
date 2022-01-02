const db = require("../models");
const MainCat = db.MainCat;
const SubCat = db.SubCat;

exports.findAll = () => {
  return SubCat.findAll({
    include: [
      {
        model: MainCat,
        as: "MainCat",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((SubCat) => {
      return SubCat;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tutorials: ", err);
    });
};

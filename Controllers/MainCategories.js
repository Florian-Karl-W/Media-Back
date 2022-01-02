// const db = require("../models");
// const MainCat = db.MainCat;
// const SubCat = db.SubCat;

// exports.findAll = () => {
//   console.log("blabla");
//   return MainCat.findAll({
//     include: [
//       {
//         model: SubCat,
//         as: "SubCat",
//         attributes: ["id", "name"],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   })
//     .then((MainCat) => {
//       return MainCat;
//     })
//     .catch((err) => {
//       console.log(">> Error while retrieving Tags: ", err);
//     });
// };

const db = require("../models");
const MainCat = db.MainCat;
const SubCat = db.SubCat;

exports.findAll = (req, res) => {
  console.log("blabla");
  MainCat.findAll({
    include: [
      {
        model: SubCat,
        as: "SubCat",
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    // MainCat.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving main-categories.",
      });
    });
};

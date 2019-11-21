var db = require('../../models');

const getAll = (req, res) => {
  // TODO - Implement Members.getAll
  console.log('MembersController.getAll');
  db.User.findAll({ 

  }).then(function(dbUsers) {
    var usersObject = {
      users: dbUsers
    };
    return res.json(usersObject)
  })
};

const create = (req, res) => {
  // TODO - Implement Members.create
  console.log('MembersController.create');
  db.User.create({
    firstName: "req.body.firstName",
    lastName: "req.body.lastName",
    email: "req.body.email",
    phoneNumber: "req.body.phoneNumber",
    image: "req.body.image"
  })
  .then(function(dbUser) {
    res.json(dbUser);
  });
};


// const getById = (req, res) => {
//   // TODO - Implement Members.getById
//   const { id } = req.params;
//   console.log('MembersController.getById.id', id);
//   res.json({
//     id
//   });
// };

// const updateById = (req, res) => {
//   // TODO - Implement Members.updateById
//   const { id } = req.params;
//   console.log('MembersController.getById.id', id);
//   res.json({
//     id
//   });
// };

// const deleteById = (req, res) => {
//   // TODO - Implement Members.deleteById
//   const { id } = req.params;
//   console.log('MembersController.getById.id', id);
//   res.status(500).end();
// };

module.exports = {
  getAll,
  create,
  // getById,
  // updateById,
  // deleteById
};

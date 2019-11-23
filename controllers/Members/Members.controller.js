var db = require('../../models');

var db = require('../../models');
const getAll = (req, res) => {
  db.User.findAll({ 
  })
  .then(function(dbUsers) {
    var usersObject = {
      users: dbUsers
    };
    return res.json(usersObject)
  })
};
const create = (req, res) => {
  db.User.create({
    nickName: req.body.nickName,
    email: req.body.email
  })
  .then(function(dbUser) {
    res.json(dbUser);
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  db.User.findOne({
    where: {
      id: id
    }
  })
  .then(function(dbUser) {
    res.json({
      dbUser
    })
  });
};

const updateById = (req, res) => {
  const { id } = req.params;
  db.User.update(req.body, {
    where: {
      id: id
    }
  })
  .then(function(dbUser){
    res.json(dbUser)
  })
};
const deleteById = (req, res) => {
  const { id } = req.params;
  db.User.destroy({
    where: {
      id: id
    }
  })
  .then(function(dbUser){
    res.json(dbUser);
    res.status(500).end();
  })
};
module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};






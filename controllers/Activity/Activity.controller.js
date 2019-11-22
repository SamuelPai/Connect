var db = require('../../models');

const getAll = (req, res) => {
  db.Activity.findAll({ 
  })
  .then(function(dbActivity) {
    var activityObject = {
      activity: dbActivity
    };
    return res.json(activityObject)
  })
};

const create = (req, res) => {
  db.Activity.create({
    title: "req.body.title",
    link: "req.body.link",
    notes: "req.body.notes",
    eventDate: '2022-12-12',
    confirmed: true,
    votesYes: 2,
    votesNo: 1
  })
  .then(function(dbActivity) {
    res.json(dbActivity);
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  db.Activity.findOne({
    where: {
      id: id
    }
  })
  .then(function(dbActivity) {
    res.json({
      dbActivity
    })
  });
};

const updateById = (req, res) => {
  const { id } = req.params;
  db.Activity.update(req.body, {
    where: {
      id: id
    }
  })
  .then(function(dbActivity){
    res.json(dbActivity)
  })
};

const deleteById = (req, res) => {
  const { id } = req.params;
  db.Activity.destroy({
    where: {
      id: id
    }
  })
  .then(function(dbActivity){
    res.json(dbActivity);
  })
};

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};

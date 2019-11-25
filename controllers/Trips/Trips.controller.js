var db = require('../../models');

const getAll = (req, res) => {
  // TODO - Implement Trips.getAll
  console.log('TripsController.getAll');
  db.Trips.findAll({ 

  }).then(function(dbTrips) {
    var tripsObject = {
      trips: dbTrips
    };
    return res.json(tripsObject)
  })

};


const create = (req, res) => {
  // TODO - Implement Trips.create
    db.Trips.create({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    image: req.body.image
    }).then(function(dbTrips) {
      res.json(dbTrips);
    });
  };

  const getById = (req, res) => {
    const { id } = req.params;
    db.Trips.findOne({
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
    db.Trips.update(req.body, {
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
    db.Trips.destroy({
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

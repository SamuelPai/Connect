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

// res.json([
//   {
//     id: 1,
//     name: 'Test 1'
//   },
//   {
//     id: 2,
//     name: 'Test 2'
//   },
//   {
//     id: 3,
//     name: 'Test 3'
//   },
// ]);

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


// const getById = (req, res) => {
//   // TODO - Implement Trips.getById
//   const { id } = req.params;
//   console.log('TripsController.getById.id', id);
//   res.json({
//     id
//   });
// };

// const updateById = (req, res) => {
//   // TODO - Implement Trips.updateById
//   const { id } = req.params;
//   console.log('TripsController.getById.id', id);
//   res.json({
//     id
//   });
// };

// const deleteById = (req, res) => {
//   // TODO - Implement Trips.deleteById
//   const { id } = req.params;
//   console.log('TripsController.getById.id', id);
//   res.status(500).end();
// };

module.exports = {
  getAll,
  create
  // getById,
  // updateById,
  // deleteById
};

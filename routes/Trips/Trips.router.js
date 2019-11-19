const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Trips/Trips.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// // inital test
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource from trips');
// });
router.get('/', controller.getAll);

// ROUTES
// router.post('/Trips', controller.create);

// router.get('/Trips/:id', controller.getById);
// router.put('/Trips/:id', controller.updateById);
// router.delete('/Trips/:id', controller.updateById);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Trips/Trips.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.post('/Trips', controller.create);
router.get('/Trips', controller.getAll);
router.get('/Trips/:id', controller.getById);
router.put('/Trips/:id', controller.updateById);
router.delete('/Trips/:id', controller.updateById);

module.exports = router;

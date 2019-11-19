const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Activity/Activity.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.post('/Activity', controller.create);
router.get('/Activity', controller.getAll);
router.get('/Activity/:id', controller.getById);
router.put('/Activity/:id', controller.updateById);
router.delete('/Activity/:id', controller.updateById);

module.exports = router;

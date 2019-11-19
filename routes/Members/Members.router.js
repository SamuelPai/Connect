const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Members/Members.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.post('/Members', controller.create);
router.get('/Members', controller.getAll);
router.get('/Members/:id', controller.getById);
router.put('/Members/:id', controller.updateById);
router.delete('/Members/:id', controller.updateById);

module.exports = router;

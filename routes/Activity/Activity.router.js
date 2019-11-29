const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Activity/Activity.controller');
// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
 console.log('Time: ', Date.now());
 next();
});
// ROUTES
router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.updateById);
router.get('/trip/:tripId', controller.getByTripId);
module.exports = router;
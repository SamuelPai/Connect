var db = require('../../models');
// const create = (req, res) => {
//   // TODO - Implement Activity.create
//   console.log('ActivityController.create');
//   res.json({
//     id: 0,
//     name: 'Test 0'
//   });
// };
const getAll = (req, res) => {
 // TODO - Implement Activity.getAll
 console.log('ActivityController.getAll');
 db.Activity.findAll({
 }).then(function(dbActivity) {
   var activityObject = {
     Activity: dbActivity
   };
   return res.json(activityObject)
 })
};
// const getById = (req, res) => {
//   // TODO - Implement Activity.getById
//   const { id } = req.params;
//   console.log('ActivityController.getById.id', id);
//   res.json({
//     id
//   });
// };
// const updateById = (req, res) => {
//   // TODO - Implement Activity.updateById
//   const { id } = req.params;
//   console.log('ActivityController.getById.id', id);
//   res.json({
//     id
//   });
// };
// const deleteById = (req, res) => {
//   // TODO - Implement Activity.deleteById
//   const { id } = req.params;
//   console.log('ActivityController.getById.id', id);
//   res.status(500).end();
// };
module.exports = {
 // create,
 // getById,
 getAll
 // updateById,
 // deleteById
};
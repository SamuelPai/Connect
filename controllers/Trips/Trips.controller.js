
const create = (req, res) => {
  // TODO - Implement Trips.create
  console.log('TripsController.create');
  res.json({
    id: 0,
    name: 'Test 0'
  });
};

const getAll = (req, res) => {
  // TODO - Implement Trips.getAll
  console.log('TripsController.getAll');
  res.json([
    {
      id: 1,
      name: 'Test 1'
    },
    {
      id: 2,
      name: 'Test 2'
    },
    {
      id: 3,
      name: 'Test 3'
    },
  ]);
};

const getById = (req, res) => {
  // TODO - Implement Trips.getById
  const { id } = req.params;
  console.log('TripsController.getById.id', id);
  res.json({
    id
  });
};

const updateById = (req, res) => {
  // TODO - Implement Trips.updateById
  const { id } = req.params;
  console.log('TripsController.getById.id', id);
  res.json({
    id
  });
};

const deleteById = (req, res) => {
  // TODO - Implement Trips.deleteById
  const { id } = req.params;
  console.log('TripsController.getById.id', id);
  res.status(500).end();
};

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById
};

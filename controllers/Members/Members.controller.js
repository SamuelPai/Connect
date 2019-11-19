
const create = (req, res) => {
  // TODO - Implement Members.create
  console.log('MembersController.create');
  res.json({
    id: 0,
    name: 'Test 0'
  });
};

const getAll = (req, res) => {
  // TODO - Implement Members.getAll
  console.log('MembersController.getAll');
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
  // TODO - Implement Members.getById
  const { id } = req.params;
  console.log('MembersController.getById.id', id);
  res.json({
    id
  });
};

const updateById = (req, res) => {
  // TODO - Implement Members.updateById
  const { id } = req.params;
  console.log('MembersController.getById.id', id);
  res.json({
    id
  });
};

const deleteById = (req, res) => {
  // TODO - Implement Members.deleteById
  const { id } = req.params;
  console.log('MembersController.getById.id', id);
  res.status(500).end();
};

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById
};

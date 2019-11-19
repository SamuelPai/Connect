'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trips', [{
        name: 'Fishing trip',
        location: 'Florida Keys',
        notes: 'I want to catch a shark!',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trip', null, {});
  }
};

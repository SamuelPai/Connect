'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Trips', [{
      title: 'Europe Trip',
      location: 'London and Spain',
      Description: 'Can not wait to see madrid',
      tripDate: '2022-08-02',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLBiPIpYbN8jD4EYcl6c4sb9QZF5incaMm-SIu9DgnBnpZVuZ&s',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trips', null, {});
  }
};

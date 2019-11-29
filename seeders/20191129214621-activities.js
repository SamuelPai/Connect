'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('activities', [{
        title: "DataTypes.",
        link: "DataTypes.",
        notes: "DataTypes.",
        eventDate: "2021-12-11",
        confirmed: false,
        votesYes: 4,
        votesNo: 8,
        tripId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], { });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Activity', null, {});

  }
};

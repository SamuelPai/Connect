'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Activities', [{
      title: 'fishing charter',
      link: 'http://www.silverkingfishon.com/CharterFishing/Milwaukee',
      notes: 'we should do the half day trip',
      eventDate: '2022-12-12',
      confirmed: false,
      votesYes: 2,
      votesNo: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('People', null, {});
  
  }
};

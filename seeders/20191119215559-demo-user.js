'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nickName: 'John',
      email: 'johnnyboy@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
      
    }], {});
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
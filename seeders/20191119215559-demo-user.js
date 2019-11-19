'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Keys',
      email: 'johnnyboy@gmail.com',
      phoneNumber:'555-457-1267',
      image: "https://www.gannett-cdn.com/-mm-/027ae90a01e405d14361c1115697c8316ddc0fe0/c=0-97-599-696/local/-/media/2018/12/11/USATODAY/USATODAY/636801335402603461-John-Bacon.png",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Users', null, {});
   
  }
};

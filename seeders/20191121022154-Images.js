'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Image', [{
          src: 'https://files.slack.com/files-pri/THKK1RQ20-FQVCDTTV4/join.jpg' ,
          altText: 'Events to Plan',
          caption: 'Events to plan',
          header: 'Events ',
          createdAt: new Date(),
          updatedAt: new Date()
          
      }],
      [{
          src:'https://files.slack.com/files-pri/THKK1RQ20-FQT66SV5E/connect.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2',
          header: 'Slide 2 Header',
          createdAt: new Date(),
          updatedAt: new Date()
      }], 
      [{
          src: 'https://files.slack.com/files-pri/THKK1RQ20-FQVCE6P3Q/on_a_mountain.jpg',
          altText: 'Slide 4',
          caption: 'Slide 4',
          header: 'Slide 3 Header',
          createdAt: new Date(),
          updatedAt: new Date()
      }], 
      [{
          src: 'https://files.slack.com/files-pri/THKK1RQ20-FQV1YKQMV/walking_to_expedition.jpg',
          altText: 'Slide 5',
          caption: 'Slide 5',
          header: 'Slide 5 Header',
          createdAt: new Date(),
          updatedAt: new Date()
      }], 
      [{
          src: 'https://files.slack.com/files-pri/THKK1RQ20-FQV1Z20BZ/star_friends.jpg',
          altText: 'Slide 6',
          caption: 'Slide 6',
          header: 'Slide 6 Header',
          createdAt: new Date(),
          updatedAt: new Date()
      }], 
      
      {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Image', null, {});

  }
};


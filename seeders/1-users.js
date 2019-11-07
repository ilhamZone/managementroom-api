'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'palay@tes.com',
        password: 'palay007',
        image: 'https://d1bvpoagx8hqbg.cloudfront.net/259/1049b67254cf59b868cd1ea12213cd1e.jpg',
        name: 'Ilham Muhammad',
      },
      {
        email: 'budi@tes.com',
        password: 'palay007',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/220px-Pierre-Person.jpg',
        name: 'Budi Santoso',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

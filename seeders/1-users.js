'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'palay@tes.com',
        password: 'palay007',
        name: 'Ilham Muhammad',
      },
      {
        email: 'budi@tes.com',
        password: 'palay007',
        name: 'Budi Santoso',
      },
      {
        email: 'tono@tes.com',
        password: 'palay007',
        name: 'Tono Sukirman',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

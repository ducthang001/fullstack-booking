'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'ducthangdt0@gmail.com',
      password: '123456',
      firstName: 'Thang',
      lastName: 'Huynh',
      address: '86/37 Dinh Phong Phu Street',
      phoneNumber: '0384815404',
      gender: 1,
      image: '',
      roleId: 'R1',
      positionId: 'P1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

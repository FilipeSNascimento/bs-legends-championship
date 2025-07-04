'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'sobrenome', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '' // Ou algum valor padrão, ou nullable: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'sobrenome');
  }
};

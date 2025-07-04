'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inscricoes', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nomeEquipe: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      titular1: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      titular2: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      titular3: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      reserva1: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      reserva2: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      instagram: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      logoEquipe: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      comprovantePix: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Inscricoes');
  }
};

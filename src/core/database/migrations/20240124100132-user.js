'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { sequelize: connection } = queryInterface;
    await connection.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable(
        'user',
        {
          id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          email: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          phone: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          password: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          f_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          l_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          about: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          deletedAt: {
            allowNull: true,
            type: Sequelize.DATE,
          },
        },
        {
          uniqueKeys: {
            unique_type_name_index: {
              fields: ['email'],
            },
          },
        },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};

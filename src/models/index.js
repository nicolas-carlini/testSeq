import Sequelize from 'sequelize';
import configs from '../config';
import user from './user';

const { database } = configs;

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  database,
);

// Initialize models
user.init(sequelize, Sequelize);

Object.values(sequelize.models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(sequelize.models));

export default sequelize;

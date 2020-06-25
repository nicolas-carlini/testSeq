module.exports = {
  development: {
    username: process.env.APP_MYSQL_USER,
    password: process.env.APP_MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.APP_MYSQL_DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
  },
};

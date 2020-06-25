export default {
  up: (queryInterface) =>
    queryInterface.bulkInsert('users', [
      {
        firstName: 'Jonh',
        lastName: 'Doe',
        email: 'jonhDoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('users', null),
};

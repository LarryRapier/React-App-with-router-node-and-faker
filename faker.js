// fakerData.js
const { faker } = require('@faker-js/faker');

function generateFakeData(numUsers = 10) {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
      },
      company: faker.company.name(),
    });
  }
  return users;
}

module.exports = generateFakeData;
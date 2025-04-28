const { faker } = require('@faker-js/faker');


function generateFakeData() {
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
      },
      phone: faker.phone.number(),
    });
  }
  return users;
}

const fakeData = generateFakeData();
console.log(JSON.stringify(fakeData, null, 2));
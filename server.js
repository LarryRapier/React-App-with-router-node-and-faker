const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/users/', (req, res) => {
  console.log('Accessed /api/users/ or /api/users/?');
  console.log('Query parameters:', req.query);

  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
     //  Faker data:  faker data for UserList page comes from here, not faker.js
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country(),
    });
  }

  //  Corrected:  Move res.json(users) here, *after* users is populated
  res.json(users);
  console.log(users);
});


//  2nd end point ** top users
app.get('/api/topusers/', (req, res) => {
  console.log('Accessed /api/topusers/ or /api/topusers/?');
  console.log('Query parameters:', req.query);

  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
     //  Faker data:  faker data for UserList page comes from here, not faker.js
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country(),
    });
  }

  //  Corrected:  Move res.json(users) here, *after* users is populated
  res.json(users);
  console.log(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

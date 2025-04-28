// server.js (Node.js with Express)
const express = require('express');
const { faker } = require('@faker-js/faker');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/fake-data/', (req, res) => {
  const data = Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
  }));
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
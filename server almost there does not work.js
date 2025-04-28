const express = require('express');
const cors = require('cors'); // For handling CORS
const { faker } = require('@faker-js/faker');  // For generating fake data

const app = express();
const port = 3001;


app.use(cors()); // Enable CORS to allow requests from the React app

const path = require('path');

//  Add this route:
app.get('/api/users/', (req, res) => {
    console.log('Accessed /api/users/ or /api/users/?');
    console.log('Query parameters:', req.query); //  Access the query parameters
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or, for production: 
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.setHeader('Access-Control-Allow-Origin', '*'); // or specify your React app's origin
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true); // If you need to send cookies
        // Your route logic here
            // res.status(200).send();
            // res.json([{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]);
    res.end(data);
    // res.setHeader('Content-Type', 'text/plain');
    
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country(),
    });
  }
  res.json(users);
  console.log(users);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  
});

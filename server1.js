const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors'); // For handling CORS - ADD THIS LINE

//  Define a simple module (simulating your 'myModule.js')
const myModule = {
  exportedValue: "Hello from Node.js!"
};

app.use(cors()); // Enable CORS for all cross-origin requests - ADD THIS LINE

//  Define a route to handle the fetch request from React
app.get('/api/module-value', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or, for production: 
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  //  In a real application, you might fetch data from a database,
  //  another API, or perform some other logic here.  For this example,
  //  we're simply sending the value from our 'myModule'.
  res.json({ value: myModule.exportedValue });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

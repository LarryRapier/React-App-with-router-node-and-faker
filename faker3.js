const http = require('http');
const port = 3001;
const { faker } = require('@faker-js/faker');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

// Simple GET API to accept GET request in "/" path 
app.get("/", (req, res) => {
    res.status(200).send("Hey, You are in my backend!!!");
  });

    if (req.url === '/api/users/' && req.method === 'GET') {
        // Generate some fake user data
        const users = [];
        for (let i = 0; i < 5; i++) {
            users.push({
                id: i + 1,
                name: faker.person.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country()
            });
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

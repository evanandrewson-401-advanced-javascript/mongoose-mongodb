require('dotenv').config();

const app = require('./lib/app');

const { createServer } = require('http');
const server = createServer(app);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log('server running on', PORT);
});
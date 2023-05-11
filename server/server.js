const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

console.log('server.js is running and being used');
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)}); //listens on port 3000 -> http://localhost:3000/

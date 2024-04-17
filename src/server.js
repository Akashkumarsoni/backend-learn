const express = require('express');
const app = express();
const addUser = require('./routes/addUser');
// To use JSON data
app.use(express.json())
app.use('/api/users', addUser);

// PORT and HOSTNAME
const port = 1200;
const hostname = 'localhost';

app.listen(port, hostname, ()=>{
    console.log(`Server is up and running on http://${hostname}:${port}`);
})
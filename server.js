const express = require('express');

const app = express();



app.use(express.static('images'));


app.listen(3001, () => console.log('Example app listening on port 3001'));

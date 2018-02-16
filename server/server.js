const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const cors = require('cors');
const ctrl = require('./controllers.js');
require('dotenv').config();

const port = 3005;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/shelf/:id', ctrl.getAll);
app.get('/api/bin/:id', ctrl.getOne);
app.post('/api/bin/:id', ctrl.create);
app.put('/api/bin/:id', ctrl.update);
app.delete('/api/bin/:id', ctrl.delete);

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Listening on port ${port}`));
})

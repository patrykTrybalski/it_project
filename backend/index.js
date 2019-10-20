const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const {Todo} = require('./models/todo');
const {URL, DB_NAME} = require('./config/DB');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(`${URL}${DB_NAME}`, {useNewUrlParser: true});
mongoose.connection.on('error', () => console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('connected'));

app.get('/', (req, res) => {
    res.send('hello world')
});

app.post('/todo', (req, res) => {
    Promise.resolve()
        .then(() => new Todo(req.body))
        .then(todo => todo.save())
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});

app.get('/todo', (req, res) => {
    Promise.resolve()
        .then(() => Todo.find({}))
        .then(todo => res.send(todo))
        .catch(err => res.send(err));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: err
        }
    });
});

const server = app.listen(3000, () => {
    console.log('Listening on port ' + server.address().port);
});

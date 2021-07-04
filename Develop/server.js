const path = require('path');

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes/pages');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
});
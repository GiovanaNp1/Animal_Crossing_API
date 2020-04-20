const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://GiovanaN:gio19gio@cluster0-elgva.mongodb.net/animal_crossing_pc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(routes)

app.listen(3333)
  
  
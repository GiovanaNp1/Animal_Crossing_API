const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = (process.env.PORT || 3333);

mongoose.connect('mongodb+srv://Visitante:Visitante123@cluster0-elgva.mongodb.net/animal_crossing_pc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:  true
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/frontend')));
app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port}`));
  
  
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capybara_dashboard', {useNewUrlParser: true});

const PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 1},
    }, {timestamps: true})

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
const Person = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Person.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_person: function(req, res) {
        const person = new Person();
        person.name = req.params.name;
        person.save()
            .then(newUserData => {
                res.redirect('/');
            })
            .catch(err => {
                res.json(err);
            })
    },

    remove_person : function(req, res) {
        Person.remove({'name' : req.params.name})
            .then(data => res.redirect("/"))
            .catch(err => res.json(err));
    },

    get_person: function(req, res) {
        Person.findOne({'name' : req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
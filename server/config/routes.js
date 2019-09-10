const controller = require('../controllers/controller.js');

module.exports = function(app) {
    app.get('/', (req, res) => {
        controller.index(req, res);
    });

    app.get('/new/:name', (req, res) => {
        controller.add_person(req, res);
    });

    app.get('/remove/:name', (req, res) => {
        controller.remove_person(req, res);
    });

    app.get('/get/:name', (req, res) => {
        controller.get_person(req, res);
    });
}
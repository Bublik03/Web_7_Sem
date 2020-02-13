var db = require('../db');

module.exports = function (router) {
    router.get('/favorite', function (req, res) {
        db
            .then(c => c.find({}, {projection: {_id: 0}}))
            .then(result => result.toArray())
            .then(docs => res.send(JSON.stringify(docs.reduce((a, v) => {a[v.cityName] = v; return a}, {}))))
            .catch(err => res.status(500).send(err.toString()))
            .catch(err => console.log(err.toString()))
    });

    router.put('/favorite', function (req, res) {

        if (!req.body || !req.body.cityName) {
            res.status(400).send('No city provided');
        }

        req.body.cityName = req.body.cityName.toLowerCase();
        db
            .then(c => c.updateOne({cityName: req.body.cityName}, {"$set": req.body}))
            .then((result) => {
                if (result.matchedCount === 0)
                    throw "City not found";
                else
                    res.send("ok");
            })
            .catch(err => {
                if (err === "City not found")
                    res.status(404).send(err);
                else
                    res.status(500).send(err.toString());
            })
            .catch(err => console.log(err.toString()))
    });

    router.post('/favorite', function (req, res) {

        if (!req.body || !req.body.cityName) {
            res.status(400).send('City not provided');
            return
        }

        req.body.cityName = req.body.cityName.toLowerCase();
        db
            .then(c => c.insertOne(req.body))
            .then(() => res.send("ok"))
            .catch(err => {
                if (err.code === 11000)
                    res.status(409).send("City is already added");
                else
                    res.status(500).send(err.toString());
            })
            .catch(err => console.log(err.toString()))
    });

    router.delete('/favorite', function (req, res) {

        if (!req.body.name) {
            res.status(400).send('No name provided');
        }

        db
            .then(c => c.deleteOne({cityName: req.body.name.toLowerCase()}))
            .then(result => {
                if (result.deletedCount === 0)
                    throw "City not found";
                else
                    res.send("ok");
            })
            .catch(err => {
                if (err === "City not found")
                    res.status(404).send(err);
                else
                    res.status(500).send(err.toString());
            })
            .catch(err => console.log(err.toString()))
    });
};
const AXIOS = require("axios");
const ROUTER = require('express').Router();
const { User } = require("../model/userModel");

// CREATE
ROUTER.route('/signup').post((req, res) => {
    let userObj = {
        _id: req.body._id,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
        level: 1,
        cows: []
    };
    const NEWUSER = new User(userObj);
    NEWUSER.save().then(() => res.json(NEWUSER)).catch((err) => res.json(`Error: ${err}`))
});

// READ
ROUTER.route("/get-all").get((req, res) => {
    User.find()
    .then(users => res.json(users)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route('/get/:_id').get((req, res) => {
    User.findById(req.params._id)
    .then((user) => res.json(user)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route("/recover/:email").get((req, res) => {
    User.findOne({"email": req.params.email}).then((user) => res.json(user)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route("/get-cows/:_id").get((req, res) => {
    User.findById(req.params._id).then((user) => res.json(user.cows).catch((err) => res.json(`Error: ${err}`)));
})

// UPDATE
ROUTER.route("/levelup/:_id").post((req, res) => {
    User.updateOne({"_id": req.params._id}, {"level": req.body.level}).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
}); 

ROUTER.route("/add-cow/:_id").post((req, res) => {
    User.updateOne({"_id": req.params._id}, {$push: {"cows": req.body.cow}}).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
})

// DELETE
ROUTER.route("/delete/:_id").delete((req, res) => {
    User.findByIdAndDelete(req.params._id).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
});
    
module.exports = ROUTER;

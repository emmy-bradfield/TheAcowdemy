const AXIOS = require("axios");
const ROUTER = require('express').Router();
const {User} = require("../model/userModel");

// CREATE
ROUTER.route('/signup').post((req, res) => {
    let userObj = {
        _id: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
        level: 1,
        items: [
            {
                veg: 0,
                bug: 0,
                gem: 0,
                CP: 0
            }
        ],
        cows: []
    };
    const NEWUSER = new User(userObj);
    NEWUSER.save().then(() => res.json(NEWUSER)).catch((err) => res.json(`Error: ${err}`))
});

// READ
ROUTER.route("/get-all").get((req, res) => {
    User.find().then(users => res.json(users)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route('/get/:_id').get((req, res) => {
    User.findById(req.params._id).then((user) => res.json(user)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route("/recover/:email").get((req, res) => {
    User.findOne({"email": req.params.email}).then((user) => res.json(user)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route("/get-cows/:_id").get((req, res) => {
    User.findById(req.params._id).then((user) => res.json(user.cows)).catch((err) => res.json(`Error: ${err}`));
})

// UPDATE
ROUTER.route("/levelup/:_id").post((req, res) => {
    User.updateOne({
        "_id": req.params._id
    }, {"level": req.body.level}).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
});

ROUTER.route("/add-cow/:_id").post((req, res) => {
    User.updateOne({
        "_id": req.params._id
    }, {
        $push: {
            "cows": req.body
        }
    }).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
})

ROUTER.route("/save/:_id").post((req, res) => {
    let updatedUSER = req.body
    console.log(`req.body = ${
        req.body
    }`);
    console.log(`req.body as obj = ${updatedUSER}`);
    console.log(`requested _id = ${
        req.params._id
    }`)
    User.findByIdAndDelete(req.params._id).then(() => {
        const USER = new User(updatedUSER);
        USER.save().then(() => {
            res.json(USER);
        }).catch((err) => {
            res.json(`Error: ${err}`);
        })
    }).catch((err) => res.json(err));
});

// DELETE
ROUTER.route("/delete/:_id").delete((req, res) => {
    User.findByIdAndDelete(req.params._id).then(() => res.json(true)).catch((err) => res.json(`Error: ${err}`));
});

module.exports = ROUTER;

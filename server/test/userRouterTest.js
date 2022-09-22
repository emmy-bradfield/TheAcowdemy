const {expect} = require("chai");
const CHAI = require("chai");
const CHAIHTTP = require("chai-http");
const APP = require("../index.js");
const {User} = require('../model/userModel');
CHAI.use(CHAIHTTP);

describe("Test the User Routes", function () { 
    // SETUP
    // before((done) => {
    //     User.deleteMany({}, (err, res) => {
    //         done();
    //     })
    // });

    // TEST DATA
    const TESTCOW = {
        _id: 'Betty',
        age: 3,
        rarity: 2,
        image: '',
        cost: 20
    }

    const NEWCOW = {
        _id: 'Dasiy',
        age: 1,
        rarity: 1,
        image: '',
        cost: 20
    }

    const NEWUSER = {
        _id: "test-user-1",
        password: "root",
        email: "test-user@gmail.com",
        name: "Test User",
        age: 20,
        level: 1,
        cows: [TESTCOW],
        __v: 0
    }

    const LEVELEDUSER = {
        _id: "test-user-1",
        password: "root",
        email: "test-user@gmail.com",
        name: "Test User",
        age: 20,
        level: 2,
        cows: [TESTCOW],
        __v: 0
    }

    const USER_COW = {
        _id: "test-user-1",
        password: "root",
        email: "test-user@gmail.com",
        name: "Test User",
        age: 20,
        level: 2,
        cows: [TESTCOW, NEWCOW],
        __v: 0
    }

    // CREATE
    it("Should create a new User", (done) => {
        CHAI.request(APP).post("/users/signup").send(NEWUSER).end((err, res) => {
            if (err) {
                console.log(`Error: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((user) => {
                expect(user).to.equal(NEWUSER);
            });
            done();
        })
    });

    // READ
    it("Should return all Users", (done) => {
        CHAI.request(APP).get("/users/get-all").end((err, res) => {
            if (err) {
                console.log(`Error: ${err}`);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.find().then((users) => {
                expect(users).to.have.lengthOf(0);
                expect(users).to.include(NEWUSER);
            });
            done();
        });
    });

    it("Should return a specific user given the ID", (done) => {
        CHAI.request(APP).get("/users/get/test-user-1").query("test-user-1").end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((user) => {
                expect(user).to.equal(NEWUSER);
            });
            done();
        })
    });

    it("Should return a specific user given the email", (done) => {
        CHAI.request(APP).get("/users/recover/test-user@gmail.com").query("test-user@gmail.com").end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findOne({"email": "test-user@gmail.com"}).then((user) => {
                expect(user).to.equal(NEWUSER);
            });
            done();
        })
    });

    it("Should return a specific user's cows given the ID", (done) => {
        CHAI.request(APP).get("/users/get-cows/test-user-1").query("test-user-1").end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((cows) => {
                expect(cows).to.include(TESTCOW);
                expect(cows).to.have.lengthOf(1);
            });
            done();
        })
    });

    // UPDATE
    it("Should level-up the account of a specific user", (done) => {
        CHAI.request(APP).post("/users/levelup/test-user-1").query("test-user-1").send({level: 2}).end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((user) => {
                expect(user).to.equal(LEVELEDUSER);
            });
            done();
        });
    });

    it("Should add a new cow to the account of a specific user", (done) => {
        CHAI.request(APP).post("/users/add-cow/test-user-1").query("test-user-1").send({cows: NEWCOW}).end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((user) => {
                expect(user).to.equal(USER_COW);
            });
            done();
        })
    })


    // DELETE
    it("Should delete a specified user", (done) => {
        CHAI.request(APP).delete("/users/delete/test-user-1").query("test-user-1").end((err, res) => {
            if (err) {
                console.log(err);
                done(err);
            }
            expect(res).to.have.status(200);
            expect(res).to.not.be.null;
            User.findById("test-user-1").then((user) => {
                expect(user).to.be.null;
            });
            done();
        })
    })
})

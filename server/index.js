require("dotenv").config();
const EXPRESS = require("express");
const APP = EXPRESS();
const CORS = require("cors");
const PORT = 4000 || process.env.PORT;
const MONGO_URL = `mongodb+srv://emily-bradfield:${proces.env.PWORD}@acowdemy.kh65rp5.mongodb.net/?retryWrites=true&w=majority`;
const PATH = require('path');

APP.use(EXPRESS.json());
APP.use(CORS());

const MONGOOSE = require('mongoose');
const USER_ROUTES = require("./route/userRouter");
APP.use("/users", USER_ROUTES);

const ROUTER = EXPRESS.Router();


MONGOOSE.connect(MONGO_URL, {useNewUrlParser: true
    }).then(() => {
        console.log(`Mongoose Connection Successful`)
    }).catch((err) => {
        console.log(`Mongoose Connection Failed: ${err}`)
    });

const CONNECTION = MONGOOSE.connection;

CONNECTION.once("open", function(){
    console.log("MongoDB Connection Successful")
});

APP.use(EXPRESS.static(PATH.resolve(__dirname, '../client')));

APP.get('*', (req, res) => {
    res.sendFile(PATH.resolve(__dirname, '../client', 'index.html'))
})

let SERVER = APP.listen(PORT, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log(`Connecting on Port ${PORT}`)
    }
});

module.exports = SERVER;
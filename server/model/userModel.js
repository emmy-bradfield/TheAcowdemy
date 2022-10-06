const MONGOOSE = require("mongoose");
const {Schema, model} = MONGOOSE;

const cowSchema = new Schema({
    _id: String,
    age: Number,
    rarity: Number,
    image: String,
    cost: Number
})

const userSchema = new Schema({
    _id: String,
    password: String,
    name: String,
    email: String,
    age: Number,
    level: Number,
    items: [{
        veg: Number,
        bug: Number,
        gem: Number
    }],
    cows: [cowSchema]
});

const User = model('User', userSchema);
module.exports ={"User": User};
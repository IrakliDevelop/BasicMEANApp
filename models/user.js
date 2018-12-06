let mongoose    = require("mongoose"),
    bcrypt      = require("bcryptjs"),
    config      = require("../config/db");

//User schema
let UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    let query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if (err){
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback)
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
        if (err){
            throw err;
        }
        callback(null, isMatch);
    })
}
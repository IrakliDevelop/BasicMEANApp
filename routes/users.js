let express     = require('express'),
    router      = express.Router()
    User        = require("../models/user"),
    passport    = require("passport"),
    jwt         = require("jsonwebtoken");


//register
router.post('/register', (req,res, next) =>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err){
            res.json({success: false, msg:"Couldn't register user"});
        } else {
            res.json({success: true, msg:"Registered new user"});
        }
    });
});

//Auth
router.post("/authenticate", (req, res, next) =>{
    res.send("<h1>AUTHENTICATE ROUTE</h1>");
});

//Profile
router.get("/profile", (req,res, next)=>{
    res.send("<h1>PROFILE ROUTE </h>")
});


module.exports = router;
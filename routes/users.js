let express = require('express'),
    router = express.Router();


//register
router.get('/register', (req,res, next) =>{
    res.send("<h1>REGISTER ROUTE </h1>")
});

//Auth
router.get("/authenticate", (req, res, next) =>{
    res.send("<h1>AUTHENTICATE ROUTE</h1>");
});

//Profile
router.get("/profile", (req,res, next)=>{
    res.send("<h1>PROFILE ROUTE </h>")
});

//validate
router.get("/validate", (req,res, next) =>{
    res.send("Validate");
});

module.exports = router;
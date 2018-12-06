let express = require('express'),
    router = express.Router();


//register
router.post('/register', (req,res, next) =>{
    res.send("<h1>REGISTER ROUTE </h1>")
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
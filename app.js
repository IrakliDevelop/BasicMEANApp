let express    = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    passport    = require('passport'),
    mongoose    = require('mongoose'),
    users       = require('./routes/users'),
    config      = require("./config/db");

let app = express();


//connect to database
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on("connected", ()=>{
    console.log(`Connected to database ${config.database}`);
});
mongoose.connection.on("error", (err) =>{
    console.log(err);
});



//CORS middleware
app.use(cors());

//Body Parser middleware
app.use(bodyParser.json())

//Static folder
app.use(express.static(path.join(__dirname, 'pubic')));


//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

app.get("/", (req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
});



const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})
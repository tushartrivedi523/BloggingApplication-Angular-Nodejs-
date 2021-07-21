const express = require("express");
const cors = require("cors");
// const blogController = require("../controller/controller.js");


const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

const db = require('./app/config/db.config')


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//Test Run
app.get("/", (req,res)=>{
  res.redirect("/api/blogApp")
})


require("./app/routes/routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
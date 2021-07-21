/**
 * Mongoose is an ODM  
 */

//require the library
const mongoose = require("mongoose");

//connect to db
mongoose.connect('mongodb://localhost/login_validate');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'Error in connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log("Successfully Connected to db ")
});
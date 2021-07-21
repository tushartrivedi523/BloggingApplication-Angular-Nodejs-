const db = require("../models/db.model");
const Blog = require("../models/db.model")

// Create and Save a new Tutorial
exports.create = function(req, res){
  // Validate request
  if (!req.body.title) {
    res.status(506).send({
      message: "Content can not be empty!"
    });
    return;
  };

  // Create a Tutorial

  const blog = {
    title: req.body.title,
    category: req.body.category,
    content: req.body.content,
    userId : "tushartt523"
  };

  // Save Tutorial in the database
  Blog.create(blog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// // Retrieve all Blog from the database.
exports.findAll = (req, res) => {
    Blog.find({},function(err, blogs){
        if(err)
        {
            console.log("Error in Fetching data")
        }
        console.log("Data Successfully Fetched!!")
        // console.log(blogs)
        res.send(blogs)
    })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Blog.find({_id:id})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    var myquery = { _id: id};
    var newvalues = { $set: 
        {   title: req.body.title, 
            category: req.body.category,
            content: req.body.content,
            userId: "tushar123"
        } };
    Blog.updateOne(myquery, newvalues, function(err, blog){
      if(err)
      {
        console.log("Error in updating db");
      }
    })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Blog.remove({_id:id}, function(err){
        if(err)
        {
            console.log("Error in deleting data from db")
        }
        console.log("Data Deleted Successfully!!");
        // res.redirect("/viewBlogs");
        res.send("Deleted Successfully")
    })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Blog.remove({})
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

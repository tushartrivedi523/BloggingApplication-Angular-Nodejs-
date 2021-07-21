const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
});

const Blogs = mongoose.model('Blogs',blogSchema);
module.exports = Blogs;
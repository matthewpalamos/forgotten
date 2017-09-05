var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost/superultratest';
mongoose.connect(dbHost);
//Create a schema for Book
// var bookSchema = mongoose.Schema({
//   name: String,
//   //Also creating index on field isbn
//   isbn: {type: String, index: true},
//   author: String,
//   pages: Number
// });

//Create a Model by using the schema defined above
//Optionally one can provide the name of collection where the instances
//of this model get stored. In this case it is "mongoose_demo". Skipping
//this value defaults the name of the collection to plural of model name i.e books.
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
  console.log(mongoose.connection.readyState);
})



// var Book = mongoose.model('Book', bookSchema, "mongoose_demo");

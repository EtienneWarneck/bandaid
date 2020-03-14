const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const banddb = require("./models/band");
const userdb = require("./models/user");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(cors());

app.get('/users', function (req, res) {
  userdb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

app.get('/bands', function (req, res) {
  banddb.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});


app.post('/bands/add', function (req, res) {
  // console.log("POST req for SignUpForm", req.body)
banddb.create(req.body,
(err, found) => err ? console.log(err) : res.json(found)
);
});


//------------------------
// app.post('/bands/add', function (req, res) {
//   console.log("POST req for SignUpForm", req.body)
//   banddb.Band.insertOne(
//     {bands: req.body}
//   );
// });
//----------------------

//TEST UDEMY _____________________
// app.post('/bands/add',async function (req, res){
//   const { name, email, password, genre, setup, description, youtube} = req.body;
// try {
//   const newBand = new Band({ name, email, password, genre, setup, description, youtube})

//   const band = await newBand.save();
//   res.json(band);
// } catch (error) {
//   console.error(error.message);
//   res.status(500).send('Server mess ERROR')
// }
// })
//________________________


//________________________________________________________________________
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });
// //_______________________________________________________________________


app.get('/bands/:genre', function (req, res) {
  banddb.find(
    {genre: req.params.genre},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bandaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
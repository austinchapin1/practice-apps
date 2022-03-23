require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js');
const model = require('./model.js');


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


//ROUTES
// ADD NEW OR UPDATE WORD/DEF
app.post('/insert', (req, res) => {
  var word = req.body.word;
  var definition = req.body.definition;

  db.insert(word, definition)
  .then(()=>{
    res.sendStatus(201);
    console.log('inserted succesfully')
  })
  .catch(()=>{
    res.sendStatus(500)
  })
})




// GET WORDS BACK FROM SEARCH
app.get('/search', (req, res) => {
  var searchTerm = req.body.term;

  db.WordDef.find({})
  .then(results => {
    var filtered = results.filter( obj => obj.word.includes(searchTerm))
    res.json(filtered)
  })
  .catch(error => {
    console.log(error)
    res.send(error)
  })
})



app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});


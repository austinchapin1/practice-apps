require("dotenv").config();
const express = require("express");
var cors = require('cors')
const path = require("path");
const db = require('./db.js');
const model = require('./model.js');


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors())


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


// GET ALL
app.get('/all', (req, res) => {
  db.WordDef.find({})
    .then(results=> {
      res.json(results)
    })
    .catch(error=>{
      console.log(error)
    })
})


// GET WORDS BACK FROM SEARCH
app.get('/search/:term', (req, res) => {
  var searchTerm = req.params.term;
  console.log(req.query)

  db.WordDef.find({})
  .then(results => {
    var filtered = results.filter( obj => obj.word.includes(searchTerm))
    res.json(filtered)
  })
  .catch(error => {
    res.send(error)
  })
})


// DELETE WORD
app.delete('/delete', (req, res) => {
  var word = req.body.data
  db.WordDef.deleteOne({ word: word})
    .then(result => {
      console.log(`${word} deleted from database`, result)
      res.json(`${word} deleted from database`)
    })
    .catch(error => {
      res.send(error)
    })
})


app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});


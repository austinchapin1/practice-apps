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

  var word = req.data.word;
  var definition = req.data.definition;

  db.insert(word, definition)
    .then(()=>{
      res.sendStatus(201)
    })
    .catch(()=>{
      res.sendStatus(500)
    })
})


// GET WORDS BACK FROM SEARCH
app.get('/retrieve', (req, res) => {


})

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});


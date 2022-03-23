require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('DB connected')
});




// 2. Set up any schema and models needed by the app
const schema = mongoose.Schema ({
  word: String,
  definition: String
});
const WordDef = mongoose.model('WordDef', schema)






// MODEL FUNCTION TO INSERT OR UPDATE WORDS/DEF
var insert = function (word, def) {
  var formatted = new WordDef({word: word, definition: def})

  return WordDef.deleteOne({word: word})
    .then(()=>{
      return formatted.save()
    })
    .catch((err)=>{
      return err
    })
};


// 3. Export the models
module.exports.WordDef = WordDef;
module.exports.insert = insert;


// 4. Import the models into any modules that need them

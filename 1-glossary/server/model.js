const db = require('./db.js');

/*

POST request
      INSERTING
      This function will take the word and definition from the request body (sent from submit in React) { word: word, def: def}
      Need to put that info into correct schema
      Only doing one at a time so we can use newWordDef.save()

      EDITING
      find and delete? replace?

Get request
This function needs to accept a search term passed up from a submit in the app search function
Lets pull everything out of the DB
We can filter over the array of documents
If a word property of a document includes/contains? the search term we can push the whole document to an array

*/

var insert = function (word, def) {

  var formatted = new db.WordDef({word: word, definition: def})
  formatted.save()

}



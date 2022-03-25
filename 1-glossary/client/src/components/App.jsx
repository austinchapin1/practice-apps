import React from "react";
import ReactDOM from 'react-dom'
import Search from './Search.jsx';
import List from './List.jsx';
import ListItem from './ListItem.jsx';
import AddWord from './AddWord.jsx';
import axios from 'axios';

// import appFunctions from '../appFunctions/appFunctions.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordList: []
    }

    this.search = this.search.bind(this);
    this.addWord = this.addWord.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// MOUNT COMPONENT WITH DATA ON PAGE LOAD
componentDidMount() {
  this.getWords();
}





// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// GET ALL WORDS FOR COMPONENT DID MOUNT
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
getWords() {
  axios.get('/all')
  .then(response => {
    // Map over response and format objects to get word/definition
    var formatted = response.data.map(obj => {
      return { word: obj.word, definition: obj.definition}
    });
    // Set State and render page
    this.setState({
      wordList: formatted
    })
  })
  .catch(error => {
    console.log(error)
  })
}


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// SEARCH - GET request for filtered content
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  search(term) {
    // Attach params to URL on axios call - Take off in express as req.query
    axios.get('/search', { params: { term: term }})
      .then(response => {
        // Format response array to correct format
        var formatted = response.data.map(obj => {
          return { word: obj.word, definition: obj.definition}
        });
        // Reset state and rerender
        this.setState({
          wordList: formatted
        })
      })
      .catch(error => {
        console.log(error)
      })
  }




// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ADDWORD FUNCTION - POST REQUEST
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  addWord (word, def) {
    // Attach object as req.body
    axios.post('/insert', { word: word, definition: def })
      .then(response => {
        // Format object to be put into wordList array
        var format = { word: word, definition: def }
        var updated = [format, ...this.state.wordList];
        // Reset state and rerender
        this.setState({
          wordList: updated
        })
      })
      .catch(error => {
        console.log(error)
      })
  }





// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// DELETE FUNCTION - DELETE REQUEST
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  delete (word, idx) {
    // Send information in options object for delete request, access in express in req.body
    axios.delete('/delete', { data: {data: word }})
      .then(response => {
        this.state.wordList.splice(idx, 1);
        // Reset state to wordList w/o deleted word and rerender
        this.setState({
          wordList: this.state.wordList
        })
      })
      .catch(error => {
        console.log(error)
      })
  }



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// EDIT A WORD AND DEFINITION
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

edit (edittedWord, edittedDef, idx) {
  var edit = this.state.wordList.map( (obj, index) => {
    // Find index within current wordList
    if (idx === index) {
      // Delete current word from database
      this.delete(obj.word, idx)
    }
    // return obj
  })
  // Add editted word to database
  this.addWord(edittedWord, edittedDef)
}



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// RENDER
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  render() {
    return (
      <div>
        <h1></h1>
        <Search search={this.search}/>
        <br/>
        <AddWord addWord={this.addWord}/>
        <br/>
        <h1>WORD OUT</h1>
        <p>Double-Click to edit..</p>
        <List wordList={this.state.wordList} deleteFunc={this.delete} edit={this.edit}/>
      </div>
    );
  }
}






export default App;
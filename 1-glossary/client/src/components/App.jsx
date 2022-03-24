import React from "react";
import ReactDOM from 'react-dom'
import Search from './Search.jsx';
import List from './List.jsx';
import ListItem from './ListItem.jsx';
import AddWord from './AddWord.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordList: []
    }

    this.search = this.search.bind(this);
    this.addWord = this.addWord.bind(this);
    this.delete = this.delete.bind(this);
  }



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// MOUNT COMPONENT WITH DATA ON PAGE LOAD
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
componentDidMount() {
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
    axios.get('/search', { params: { term: term }})
      .then(response => {
        var formatted = response.data.map(obj => {
          return { word: obj.word, definition: obj.definition}
        });
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
    axios.post('/insert', { word: word, definition: def })
      .then(response => {
        console.log('word added to database');
        var format = { word: word, definition: def }
        var updated = [format, ...this.state.wordList];
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
    axios.delete('/delete', { data: {data: word }})
      .then(response => {
        this.state.wordList.splice(idx, 1);

        this.setState({
          wordList: this.state.wordList
        })
      })
      .catch(error => {
        console.log(error)
      })
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
        <List wordList={this.state.wordList} deleteFunc={this.delete}/>
      </div>
    );
  }
}






export default App;
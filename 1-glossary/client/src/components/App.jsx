import React from "react";
import ReactDOM from 'react-dom'
import Search from './Search.jsx';
import List from './List.jsx';
import ListItem from './ListItem.jsx';
import AddWord from './AddWord.jsx';
import axios from 'axios';

var testData = [
   {word: 'hey', definition: 'how arrrre ya'},
   {word: 'hello', definition: 'how arrrre ya!&*&^!&^!&*!'},
   {word: 'howdy', definition: 'how arrrre ya345345232323bdfsbfbf'},
   {word: 'hiya', definition: 'how arrrre ya53534543534'},
   {word: 'bye', definition: 'howgdfghdfhdfhre ya'},
]

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


  search(term) {
    axios.get('/search', { params: {
      term: term
    }})
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


  delete (word, idx) {
    // console.log('working from listitem', word, idx)
    axios.delete('/delete', { data: word })
      .then(response => {
        var wordRemoved = this.state.wordList.splice(idx, 1);

        this.setState({
          wordList: wordRemoved
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


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
import React from "react";
import ReactDOM from 'react-dom'
// import Search from './Search.jsx';
import List from './List.jsx';
// import ListItem from './ListItem.jsx';
import axios from 'axios';

var testData = [
  {word: 'hey',
   definition: 'how arrrre ya'},
   {word: 'hello',
   definition: 'how arrrre ya!&*&^!&^!&*!'},
   {word: 'howdy',
   definition: 'how arrrre ya345345232323bdfsbfbf'},
   {word: 'hiya',
   definition: 'how arrrre ya53534543534'},
   {word: 'bye',
   definition: 'howgdfghdfhdfhre ya'},
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordList: testData,
      value: ''
    }
  }



  // componentDidMount() {
  //   axios.get('/all')
  //     .then(response => {
  //       // Map over response and format objects to get word/definition
  //       var formatted = response.data.map(obj => {
  //         return { word: obj.word, definition: obj.definition}
  //       });
  //       // Set State and render page
  //       this.setState({
  //         wordList: formatted
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // SEARCH
  // axios.get('/search', { params: {
  //   term: 'test'
  // }})

  render() {
    return (
      <div>
        <h1>Test From A </h1>
        <List wordList={this.state.wordList}/>
      </div>
    );
  }
}






export default App;
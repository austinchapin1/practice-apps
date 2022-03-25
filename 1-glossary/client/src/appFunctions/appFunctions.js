import React from "react";
import ReactDOM from 'react-dom'
import Search from '../components/Search.jsx';
import List from '../components/List.jsx';
import ListItem from '../components/ListItem.jsx';
import AddWord from '../components/AddWord.jsx';
import axios from 'axios';

var getWords = () => {

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
};

module.exports.getWords = getWords;
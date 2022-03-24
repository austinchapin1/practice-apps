import React from "react";
import App from './App.jsx'
import List from './List.jsx'

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    // this.edit = this.edit.bind(this)
  }


  render() {
    // Destructure props in render function of stateful components
    const { word, def } = this.props;


    return (
      <div>
        <h4>{word}</h4>
        <div>{def}</div>
        <button onClick={console.log('hello')}>EDIT</button>
        <br/>
      </div>
    )
  }
}




export default ListItem;
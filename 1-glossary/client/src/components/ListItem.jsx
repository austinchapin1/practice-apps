import React from "react";
import App from './App.jsx'
import List from './List.jsx'

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordVal: '' || this.props.word,
      defVal: '' || this.props.def,
      edit: false
    }

    // this.handleWordEdit.bind(this) WORKS as -----   funcName = () => {}
  }

  handleWordEdit () {
    this.setState({
      edit: true
    })
  }

  editWordChange (e) {
    this.setState({
      wordVal: e.target.value
    })
  }

  editDefChange (e) {
    this.setState({
      defVal: e.target.value
    })
  }




  render() {
    // Destructure props in render function of stateful components
    const { word, def, idx, deleteFunc, edit } = this.props;

    var wordView = {};
    var wordEdit = {};

    if (this.state.edit) {
      wordView.display = 'none';
    } else {
      wordEdit.display = 'none';
    }


    return (
      <div onDoubleClick={this.handleWordEdit.bind(this)}>
        <br/>

        <h3 style={{cursor:'arrow'}} style={wordView}>{word}</h3>

        <input type='text' style={wordEdit} placeholder={word} value={this.state.wordVal} onChange={this.editWordChange.bind(this)}/>

        <div style={wordView}>{def}</div>

        <input type='text' style={wordEdit} placeholder={def} value={this.state.defVal} onChange={this.editDefChange.bind(this)}/>

        <button type='text' style={wordEdit} onClick={()=>edit(this.state.wordVal, this.state.defVal, idx)}>Confirm Edit</button>

        <button style={wordEdit} onClick={deleteFunc}>DELETE</button>

      </div>
    )
  }
}




export default ListItem;
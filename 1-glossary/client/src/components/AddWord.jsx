import React from 'react';

class AddWord extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      wordVal: '',
      defVal: ''
    }
  }

  wordVal(e){
    this.setState({
      wordVal: e.target.value
    })
  }

  defVal(e){
    this.setState({
      defVal: e.target.value
    })
  }

  submit(e) {
    console.log(this.state.wordVal, this.state.defVal);
    e.preventDefault();
    this.props.addWord(this.state.wordVal, this.state.defVal);

    this.setState({
      wordVal: '',
      defVal: ''
    })
  }


  render () {
    // Destructure props in render function of stateful components

    return (
      <form>
        <input value={this.state.wordVal} placeholder='Word' onChange={this.wordVal.bind(this)}/>
        <input value={this.state.defVal} placeholder='Definition' onChange={this.defVal.bind(this)}/>
        <button onClick={this.submit.bind(this)}>Add</button>
      </form>
    )
  }
}

export default AddWord;
import React from "react";

class Search extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.change = this.change.bind(this)
  }


  change (e) {
    this.setState({
      value: e.target.value
    })
  }



  search(e) {
    e.preventDefault()
    this.props.search(this.state.value);

    this.setState({
      value: ''
    });
  }




  render() {
    return (
      <form>
        <input placeholder='Word to search..' value={this.state.value} onChange={this.change}></input>
        <button onClick={this.search.bind(this)}>Search</button>
      </form>
    )
  }

}





export default Search;
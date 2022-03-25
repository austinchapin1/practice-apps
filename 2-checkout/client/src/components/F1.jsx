import React from 'react';



class F1 extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  emailChange (e) {
    this.setState({
      name: e.target.value
    })
  }

  passwordChange (e) {
    this.setState({
      name: e.target.value
    })
  }


  render () {


    return (
      <form onSubmit>
        <div>
          <label>Name</label>
          <input type='text' value={this.state.name} onChange={this.nameChange}/>\
        </div>
        <div>
          <label>Email</label>
          <input type='text' value={this.state.name} onChange={this.emailChange}/>\
        </div>
        <div>
          <label>Password</label>
          <input type='text' value={this.state.name} onChange={this.passwordChange}/>\
        </div>
        <button type='submit'>Next</button>
      </form>
    )
  }
}

export default F1;
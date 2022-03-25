import React from 'react';



class F1 extends React.Component {
  constructor(props) {
    super(props)
  }


  // OPTIONAL ALL IN ONE
  // handleChange (e) {
  //   const value = e.target.value;
  //   const name = e.target.name;

  //   this.setState({
  //     [name]: value
  //   })
  // }


  render () {

    const { name, email, password, handleChange } = this.props;


    return (
      <form>
        <div>
          <label>Personal Sign-In</label>
          <br/>
          <input type='text' placeholder='Name' value={name} onChange={handleChange} id='name'/>
          <input type='text' placeholder='Email' value={email} onChange={handleChange} id='email'/>
          <input type='text' placeholder='Password' value={password} onChange={handleChange} id='password'/>
        </div>
        <br/>
        <button type='submit'>Next</button>
      </form>
    )
  }
}

export default F1;
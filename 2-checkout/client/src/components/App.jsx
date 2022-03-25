import React from 'react';
import F1 from './F1.jsx';
import F2 from './F2.jsx';
import F3 from './F3.jsx';



class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      formNum: 3,
      name: '',
      email: '',
      password: '',
      address: '',
      state: '',
      city: '',
      zipcode: '',
      phone: '',
      creditcard: '',
      exp: '',
      cvv: '',
      billingzip: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.formNumChange = this.formNumChange.bind(this);
  }


  // OPTIONAL ALL IN ONE
  handleChange (e) {
    const value = e.target.value;
    const place = e.target.id;
    console.log(place);
    console.log(value);

    this.setState({
      [place]: value
    })
  }

  formNumChange () {
    var curr = this.state.formNum;

    if (curr === 3) {
      this.setState({
        formNum: 0
      })
    } else {
      this.setState({
        formNum: curr++
      })
    }
  }



  render () {

    // if this.state.forNum = 0
    //  Show checkout button aka HomePage
    //  Click checkout - FormNum += 1

    // if this.state.forNum = 1
    //  Show F1
    //  Change state for name, email, password
    //  Click Next - FormNum += 1

    // if this.state.forNum = 2
    //  Change state for address and phone stuff
    //  Click Next = FormNum += 1

    // if this.state.forNum = 3
    //  Change state for creditcard stuff
    //  Click PURCHASE - SendPOST request with all data in formatted {options}
    //    Change formNum back to 0

    var form;

    if (this.state.formNum === 1) {
      form = <F1 name={this.state.name} email={this.state.email} password={this.state.password} handleChange={this.handleChange}/>

    } else if (this.state.formNum === 2) {
      form = <F2 address={this.state.address} state={this.state.state} city={this.state.city} zipcode={this.state.zipcode} handleChange={this.handleChange}/>

    } else if (this.state.formNum === 3) {
      form = <F3 phone={this.state.phone} creditcard={this.state.creditcard} exp={this.state.exp} cvv={this.state.cvv} billingzip={this.state.billingzip} handleChange={this.handleChange}/>
    }

    return (
      <div>
        {this.state.formNum ? form : <button>Checkout</button>}
      </div>
    )
  }
}

export default App;
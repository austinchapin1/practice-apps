import React from 'react';



class F3 extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { phone, creditcard, exp, cvv, billingzip, handleChange } = this.props;

    return (
      <form>
        <div>
          <label>Phone #</label>
          <br/>
          <input type='text' value={phone} onChange={handleChange} id='phone'/>
        </div>
        <br/>
        <div>
          <label>Credit Card</label>
          <br/>
          <input type='text' placeholder='Credit Card #' value={creditcard} onChange={handleChange} id='creditcard'/>
          <input type='text' placeholder='Exp.' value={exp} onChange={handleChange} id='exp'/>
          <input type='text' placeholder='CVV' value={cvv} onChange={handleChange} id='cvv'/>
          <input type='text' placeholder='Billing Zip-Code' value={billingzip} onChange={handleChange} id='billingzip'/>
        </div>
        <br/>
        <button type='submit'>Next</button>
      </form>
    )
  }
}

export default F3;
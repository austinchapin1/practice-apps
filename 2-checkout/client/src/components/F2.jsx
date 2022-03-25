import React from 'react';



class F2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {

      const { address, state, city, zipcode, handleChange } = this.props;

    return (
      <form>
        <div>
          <label>Address</label>
          <br/>
          <input type='text' placeholder='Street Address' value={address} onChange={handleChange} id='address'/>
          <input type='text' placeholder='State ex: WA' value={state} onChange={handleChange} id='state'/>
          <input type='text' placeholder='City' value={city} onChange={handleChange} id='city'/>
          <input type='text' placeholder='Zip' value={zipcode} onChange={handleChange} id='zipcode'/>
        </div>
        <button type='submit'>Next</button>
      </form>
    )
  }
}

export default F2;
import React, { Component } from 'react'
import axios from 'axios'

class ClientForm extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    axios.post('http://localhost:3001/api/v1/clients', { data })
    .then(response => {
      console.log('success')
      this.setState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
      })
    })
    .catch(error =>
      console.log(error),
      console.log('fail')
    )
  }

  render() {
    const { first_name, last_name, phone, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="first_name" value={first_name} onChange={this.onChange} />
        <input type="text" name="last_name" value={last_name} onChange={this.onChange} />
        <input type="text" name="phone" value={phone} onChange={this.onChange} />
        <input type="email" name="email" value={email} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default ClientForm;

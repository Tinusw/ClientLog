import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client'

class ClientsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/clients.json')
    .then(response => {
      console.log(response)
      this.setState({clients: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.clients.map((client) => {
          return(
            <Client client={client} key={client.id}></Client>
          )
        })}
      </div>
    );
  }
}

export default ClientsContainer;

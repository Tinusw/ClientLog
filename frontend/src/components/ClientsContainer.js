import React, { Component } from 'react';
import axios from 'axios';

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
            <div className="tile" key={client.id} >
              <h4>{client.first_name}</h4>
              <p>{client.email}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ClientsContainer;

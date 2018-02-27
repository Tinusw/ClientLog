import React, { Component } from 'react';
import './App.css';
import ClientsContainer from './components/ClientsContainer'
import ClientForm from './components/ClientForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Client List</h1>
        </header>
        <ClientsContainer/>
        <ClientForm/>
      </div>
    );
  }
}

export default App;

import React from 'react'

const Client = ({client}) =>
  <div className="item" key={client.id}>
    <h4>{client.first_name}</h4>
    <p>{client.email}</p>
  </div>

export default Client

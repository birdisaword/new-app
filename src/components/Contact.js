import React, { Component } from 'react';
import { Contacts } from  './Contacts'

  class Contact extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
      users: Contacts,
    }
  }

  handleSearchChange = (e) => {
    const { value } = e.target;
   
    if (!value.trim()) {
      return this.setState({ users: Contacts });
    }

    const filteredUsers = this.state.users.filter((el) =>
    el.toLowerCase().includes(value.toLowerCase()))
    
    this.setState({  users: filteredUsers })
  }

  render() {
    const { users } = this.state

    return (
      <div className="image-container">
      <div className="container">
        <input className="input" onChange={ this.handleSearchChange } />
        <div className="card-wrapper">
          { users ? (users.map((el, index) => {
            return <div className="card" key={`Index is - ${ index }`}> { el } </div>
            })) : (<p> no matches </p>) }
        </div>
      </div>
      </div>
    )
        }
      }

export default Contact

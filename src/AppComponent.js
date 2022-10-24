import { Component } from 'react';
import React from "react";
import { contactsList } from './constants'

const contact = contactsList.map((el) => {
  return `${ el.firstName } ${ el.lastName } ${ el.phone }`
})

  class Contact extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
      contacts: contact,
      users: null,
      inputValue: "",
    }
  }

  componentDidMount() {
    this.setState({ users: this.state.contacts })
  }

  handleSearchChange = (e) => {
    const filteredUsers = this.state.users.filter((el) =>
    el.toLowerCase().includes(e.target.value.toLowerCase()))
    
    this.setState({ inputValue: e.target.value, users: filteredUsers })

    if (!e.target.value) {
      this.setState({ users: this.state.contacts })
    }
  }

  render() {
    const { users, inputValue } = this.state

    return (
      <div className="image-container">
      <div className="container">
        <input className="input" value={ inputValue } onChange={ this.handleSearchChange } />
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

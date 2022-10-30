import React, { Component } from 'react';
import { contacts } from  './Contacts'

  class Contact extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
      users: contacts,
      inputValue: "",
    }
  }

  // componentDidMount() {
  //   this.setState({ users: contacts })
  // }

  handleSearchChange = (e) => {
    const { value } = e.target;
    if (!value) {
      this.setState({ users: contacts })
      return
    }
    const filteredUsers = this.state.users.filter((el) =>
    el.toLowerCase().includes(value.toLowerCase()))
    
    this.setState({ inputValue: value, users: filteredUsers })
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

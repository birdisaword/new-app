import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
    <div  className="container">
      <h1 key={`key is ${this.props}`}> {this.props.firstName} {this.props.lastName} {this.props.phone}</h1>
    </div>
    )
  }
}
      
export default Contact

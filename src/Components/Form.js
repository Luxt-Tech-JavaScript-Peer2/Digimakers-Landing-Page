import React, { Component } from 'react'
import { database } from "../firebase";

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleNameChange = (event, em) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.name && this.state.email && this.state.message) {
      database.collection('Messages').add({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
        .then(() => {
          alert(`Hurray!!!! 
          Your message is well recieved, expect a response from us in a short while...`)
        })
        .catch((err) => {
          alert(err.message)
        })
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    }
  }
  
  render() {
    const {name, email, message} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
          <h2>Send Us a Message</h2>
          <p> We'll be glad to speek with you</p>
          <input type='text' placeholder='Name...' value={name} onChange={this.handleNameChange} required />
          <input type='email' placeholder='Email' value={email} onChange={this.handleEmailChange} required />
          <textarea placeholder='Message...' value={message} onChange={this.handleMessageChange} required />
          <input type='submit' value='submit' />
      </form>
    )
  }

}

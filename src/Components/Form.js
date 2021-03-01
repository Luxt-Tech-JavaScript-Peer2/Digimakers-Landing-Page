import React, { Component } from 'react'
import { database } from "../firebase";
import FormComponent from "./FormComponent";

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = (event) => {
    const {name, email,message} = this.state
    event.preventDefault()
    if (name && email && message) {
      database.collection('Messages').add({
        name: name,
        email: email,
        message: message
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
      <FormComponent
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={name}
        email={email}
        message={message}
      />
    )
  }

}

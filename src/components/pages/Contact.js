import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactHero from "../ContactHero";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <ContactHero />
        <ContactForm />
      </div>
    )
  }
}

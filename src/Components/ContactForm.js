import React, { Component } from 'react';
import Socials from './Socials';
import Address from './Address';
import Form from './Form';



export default class ContactForm extends Component {
  render() {
    return (
      <div className='contact_form'>
        <div className='wrapper'>
          <div>
            <div className='contacts_links'>
              <h2>Contact Details</h2>
              <Address />
              <Socials />
            </div>
            <div className='form'>
              <Form />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

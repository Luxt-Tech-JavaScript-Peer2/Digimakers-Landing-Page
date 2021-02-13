import React, { Component } from 'react';
import Socials from './Socials'
import Address from './Address'


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
              <form>
                <h2>Send Us a Message</h2>
                <p> We'll be glad to speek with you</p>
                <input type='text' placeholder='Name...' />
                <input type='email' placeholder='Email' />
                <textarea placeholder='Message...' />
                <input type='submit' value='submit' />
              </form>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

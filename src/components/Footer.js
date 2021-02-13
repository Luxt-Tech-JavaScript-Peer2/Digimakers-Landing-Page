import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'
import Socials from './Socials'
import Address from './Address'

export default function Footer() {
  return (
    <footer>
      <div className='wrapper'><h2>DigiMakers</h2>
         <div className='footer-top flex-col md-flex-row'>
          <div className='order2 md-order1 dt-only'>
           <Address />
            </div>
          <div className='order3 md-order2'>
          <Socials />
         </div>
          <div className='order1 md-order3'>
          <div className='footer-nav-links'>
            <ul className='flex-row md-flex-col'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>about</Link>
              </li>
              <li>
                <Link to='/team'>Team</Link>
              </li>
              <li>
                <Link to='/contact'>contact us</Link>
              </li>
            </ul>
          </div>
          </div>
        </div></div>
        <div className='small'>
          <small>
              <p>
              Copyright © 2021 DigiMakers. All rights reserved.
              </p>
          </small>
        </div>
   </footer>
  )
}

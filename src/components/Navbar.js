
import React, { useState } from 'react';
import { items } from './NavLinks';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

export default function Navbar(props) {
    const [clicked, setClick]= useState(false);
    const handleClick =(e)=>{
        setClick(!clicked)
    }
    return (

            
        <nav className="NavItem">
            <div className='nav-wrapper'>
                    <p className='title'>DigiMakers</p>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                      items.map((item, index)=>{
                        return(
                        <li key={index}>
                            <Link className={item.navLink} to={item.href}>{item.title}</Link>
                        </li>
                        )
                    }) 
                    }
                    <li className='mb-only'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    </ul>

                <button className='contact-btn dt-only'>
                <Link to='/contact'>Contact Us</Link>
                </button>
                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' :  'fas fa-bars'} ></i>
                </div>
            </div>
                
            </nav>
    
           
    
        
    )
}


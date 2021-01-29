
import React, { useState } from 'react';
import {items} from './NavLinks';


export default function Navbar(props) {
    const [clicked, setClick]= useState(false);
    const handleClick =(e)=>{
        setClick(!clicked)
    }
    return (

            <nav className="NavItem">
                <h1 className='title'>Digimakers</h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' :  'fas fa-bars'} ></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                    items.map((item, index)=>{
                        return(
                        <li key={index}>
                            <a className={item.navLink} href={item.href}>{item.title}</a>
                        </li>
                        )
                    }) 
                    }
                    <button className='contact-btn'>Contact Us</button>
                </ul>
            </nav>
    
        
    )
}


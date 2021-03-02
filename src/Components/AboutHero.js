import React, { Component } from 'react';
import '../styles/about-image.css';

export class AboutHero extends Component {
    render() {
return (
    <header className='about-hero'>
        <div className='about-hero-overlay'>
            <div className='wrapper'>
                <div className='about-desc'>
                    <p>About us</p>
                    <h1 className='' >We Thrive <br/> in challenges and build lasting solutions.</h1>
                </div>
            </div>
       </div>
    </header>
                
)
    }
}

export default AboutHero

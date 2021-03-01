import React, { Component } from 'react';
import '../../styles/about-image.css';
import Aboutlogo from "../../assets/classroom.jpg"


export class AboutImage extends Component {
    render() {
return (
    <main>
       
         <div className='section01'>
         <img src ={Aboutlogo}  className='main-image'/>
         </div>
         <p className='about'>About us</p>
         <h1 className='img-txt' >We Thrive <br />in challenges and build<br /> lasting solutions.</h1>
         
    
    </main>
                
            
)
    }
}

export default AboutImage

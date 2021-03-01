import React, {Component} from "react";
import "../styles/hero.css";
import logo from "../assets/digii.jpg"
import { Link } from "react-router-dom";

export class Hero extends Component{
    render() {
        return (
          <section className="hero">
            <div className='wrapper'>
                <div className="hero-text">
                  <h1>
                    <span className='we'> We</span> Develop <br /> Mobile and Web <br /> Apps...
                  </h1>
        
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Vestibulum at lacus facilisis, sagittis nibh ut, placerat  folowingj risus. 
                  </p>
              
                <button className='btn' >
                  <Link to='/contact'>Get in touch</Link>
                </button>
              </div>
                <img src={logo} alt="our brand flag" className='hero-image' />
             </div>  
          </section>
        );
    }
}


export default Hero

import React, { Component } from 'react';
import {testimonies} from "./Testimonies";
import Carousel from 'react-elastic-carousel';



export default class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 750, itemsToShow: 2},
    ]
  }

  render() {
    return (
      <section className='testimonial'>
      <div className='wrapper'>
        <header>
          <h2>What our clients say</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </header>
        <Carousel breakPoints={this.breakPoints} itemsToScroll={1} enableAutoPlay autoPlaySpeed={5000}>
          {
            testimonies.map((item, index) => {
            return(
              <item className='slide' key={index}>
              <div>
                <img src={item.photo}  alt={item.name}/>
                <div className='head'>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
              <div className='description'>
                <span className='open quote'>"</span>
                <p>{item.testimony}</p>
                <span className='close quote'>"</span>
              </div>
          </item>
            )
          })
          }
        </Carousel>

      </div>
    </section>
    )
  }
}

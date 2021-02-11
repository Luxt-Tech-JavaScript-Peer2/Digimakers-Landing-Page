import React, { Component } from 'react';
import { testimoniesData } from "./Testimonies";
import Testimony from './Testimony';
import Carousel from 'react-elastic-carousel';



export default class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
      { width: 1, itemsToShow: 1, showArrows: false },
      { width: 750, itemsToShow: 2},
    ]
  }

  render() {

  const testimonies =  testimoniesData.map((item) => {
      return(
        <Testimony testimony={item}/>
      )
    })

    return (
      <section className='testimonial'>
      <div className='wrapper'>
        <header>
          <h2>What our clients say</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </header>
          <Carousel
            breakPoints={this.breakPoints}
            itemsToScroll={1}
            enableAutoPlay
            autoPlaySpeed={4000}
          >
             {testimonies}
          </Carousel>

      </div>
    </section>
    )
  }
}

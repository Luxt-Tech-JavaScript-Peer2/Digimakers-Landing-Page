import React, { Component } from 'react'
import WhyWeAreSpecial from '../WhyWeAreSpecial'
import CallToAction from '../CallToAction'
import AboutHero from '../AboutHero';
import AboutWeAre from '../AboutWeAre';
import Works  from '../Works';

export default class About extends Component {
  render() {
    return (
      <div>
        <AboutHero />
        <AboutWeAre/>
        <Works />
        <WhyWeAreSpecial/> 
        <CallToAction/>     
      </div>
    )
  }
}

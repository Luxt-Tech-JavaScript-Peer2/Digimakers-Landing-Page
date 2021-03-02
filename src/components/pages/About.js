import React, { Component } from 'react'
import WhyWeAreSpecial from '../WhyWeAreSpecial'
import CallToAction from '../CallToAction'
import AboutImage from './AboutImage';
import AboutWeAre from './AboutWeAre';
import Works  from '../Works';

export default class About extends Component {
  render() {
    return (
      <div>
        <AboutImage />
        <AboutWeAre/>
        <Works />
        <WhyWeAreSpecial/> 
        <CallToAction/>     
      </div>
    )
  }
}

import React, { Component } from 'react'

import WeAre from '../WeAre'
import CallToAction from '../CallToAction'
import Hero from "../Hero";
import Works from "../Works";
import Testimonils from "../Testimonials";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <Hero />
          <WeAre />
          <Works />
          <Testimonils />
          <CallToAction />
        </section>
      </main>
    )
  }
}

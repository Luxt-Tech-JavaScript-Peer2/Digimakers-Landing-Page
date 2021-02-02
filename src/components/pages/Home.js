import React, { Component } from 'react'

import Component2 from '../homecomponents/component2'
import CallToAction from '../CallToAction'
import Hero from "../Hero";
import Works from "../Works";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <Hero />
          <Component2 />
          <Works />
          <CallToAction />
        </section>
      </main>
    )
  }
}

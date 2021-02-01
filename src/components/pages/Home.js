import React, { Component } from 'react'
import CallToAction from '../CallToAction'
import Hero from "../Hero";
import Works from "../Works";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <Hero />
          <Works />
          <CallToAction />
        </section>
      </main>
    )
  }
}

import React, { Component } from 'react'
import CallToAction from '../CallToAction'
import {Hero} from "../Hero";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <Hero />
          <CallToAction />
        </section>
      </main>
    )
  }
}

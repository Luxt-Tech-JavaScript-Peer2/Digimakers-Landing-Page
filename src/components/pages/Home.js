import React, { Component } from 'react'

import Component2 from '../homecomponents/component2'
import CallToAction from '../CallToAction'
import {Hero} from "../Hero";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section>
          <Hero />
          <Component2/>
          <CallToAction />
        </section>
      </main>
    )
  }
}

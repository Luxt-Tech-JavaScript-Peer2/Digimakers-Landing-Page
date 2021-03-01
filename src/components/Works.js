import React, { Component } from 'react';
import {items} from './WorksItems';

export default class Works extends Component {
  render() {
    return (
      <section className='services'>
        <div className='wrapper'>
      <header>
        <h2>What We Do</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin justo sit amet purus varius, pretium convallis eros varius.</p>
      </header>
      <div>
        <ul>
          {
            items.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.logo.src} alt={item.logo.altText} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
              </li>
              )
            })
          }
         
        </ul>
      </div>
       </div>
    </section>
    )
  }
}

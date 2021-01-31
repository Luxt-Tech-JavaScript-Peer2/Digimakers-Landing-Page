import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className='action'>
      <div className='action-wrapper wrapper'>
        <p>What’s the next BIG idea you want to develope?</p>
        <h2>Let’s help you build it uniquely!</h2>
        <button>
          <Link to='/contact'>Contact Us</Link>
        </button>
      </div>
    </section>
  )
}

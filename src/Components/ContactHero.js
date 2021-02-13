import React from 'react'
import photo from '../assets/magnet-me-.jpg'

export default function ContactHero() {

  return (
    <div className='contact_hero'>
      <div className='wrapper'>
        <div>
          <h1>Get in touch</h1>
          <p>We respond in less than 24 hours.</p>
        </div>
        <img src={photo} alt='front desk officer'/>
      </div>
    </div>
  )
}

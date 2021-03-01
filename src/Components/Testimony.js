import React from 'react'

export default function Testimony(props) {
  return (
    <div className='slide' key={props.testimony.id}>
      <div>
        <img src={props.testimony.photo}  alt={props.testimony.name}/>
        <div className='head'>
          <h3>{props.testimony.name}</h3>
          <p>{props.testimony.title}</p>
        </div>
      </div>
      <div className='description'>
        <span className='open quote'>"</span>
        <p>{props.testimony.testimony}</p>
        <span className='close quote'>"</span>
      </div>
  </div>
  )
}

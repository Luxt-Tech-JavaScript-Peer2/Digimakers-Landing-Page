import React, { Component } from 'react'
import { teamData } from '../TeamData'
import TeamHero from '../TeamHero'
import TeamItem from '../TeamItem'



export default class Team extends Component {
  render() {
    return (
      <React.Fragment>
      <TeamHero />
      <section>
        <div className='wrapper'>
          <div className='teams-cards'>
          {teamData.map((item, index)=> <TeamItem item={item} key={index} />)}
           </div>
        </div>
        </section>
      </React.Fragment>
    )
  }
}

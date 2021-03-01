import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/we_are.css';
import banner from '../assets/campaign-creators-e6n7uoEnYbA-unsplash.jpg';
class WeAre extends React.Component{
    render(){
        return(
            <section className='we-are'>
                <div className='wrapper'>
                
                    <div className='banner-wrapper'>
                        <img src={banner} alt='about us banner' />
                    </div>
                    <div className='container2Content'>
                        <h2>We are</h2>
                        <p> 
                            A team of successful software developers striving to solve the world’s most important problems through professionalism and latest tech best practsicis.                           
                        </p>
                        <p className='hiddencontent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus facilisis, sagittis nibh ut, placerat  folowingj risus.
                        </p>
                        <button className='btn'>
                            <Link to='/about'>Learn more</Link>                 
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default WeAre;

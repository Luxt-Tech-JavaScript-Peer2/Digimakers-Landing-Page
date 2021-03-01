import React from 'react'
import componentContent from './whywearespeciallarray'

import '../styles/WhyWeAreSpecial.css'
class WhyWeAreSpecial extends React.Component{
    render(){
        return(
            <section className='why-special'>
                <div className='wrapper'>
                <header className="">
                    <h2 className='color-primary'>Why We Are Special</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus facilisis
                    </p>                    
                </header>

                <div className="why-cards">
                    {
                        componentContent.map(function(content, index){
                            return (
                            <div key={index} className='why-card'>
                                <h3> {content.title}</h3>
                                <div className='innerGrid'>
                                    <div className='svgContainer'>
                                        <span>{content.image}</span>
                                    </div>
                                    <div className='why-card-message'>
                                        <p>{content.message}</p>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
                </div>
            </section>
        )
    }
}
export default WhyWeAreSpecial;
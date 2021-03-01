import React from 'react'
import componentContent from './whywearespeciallarray'

import '../styles/WhyWeAreSpecial.css'
class WhyWeAreSpecial extends React.Component{
    render(){
        return(
            <div className='wrapper1'>
                <div className="content">
                    <h3>Why We Are Special</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus facilisis
                    </p>                    
                </div>

                <div className="gridContainer">
                    {
                        componentContent.map(function(content, index){
                            return (
                            <div key={index}>
                                <h1> {content.title}</h1>
                                <div className='innerGrid'>
                                    <div className='svgContainer'>
                                        <span>{content.image}</span>
                                    </div>
                                    <div className='innerContainer'>
                                        <p>{content.message}</p>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>    
            </div>
        )
    }
}
export default WhyWeAreSpecial;

import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from  '../pages/About';
import './component2.css'
class Component2 extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <div className="containerWrapper">
                <div className= 'gridContainer'>
                    <div className="container1">                                        
                    </div>
                    <div className="container2">
                        <div className='container2Content'>
                            <h2>We are</h2>
                             <p> 
                                 A team that Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                 Sed viverra turpis a nibh pretium, nec accumsan erat pellentesque. 
                                 <span>
                                     Donec posuere sapien vel dolor posuere, eget lobortis tellus sollicitudin.
                                 </span>                           
                            </p>

                            <br></br>

                            <p className='hiddencontent'>
                                 Nullam efficitur ante sed quam bibendum, non dignissim mi posuere. 
                                 Nunc at sapien sit amet mi gravida consectetur. Aenean in vehicula ex. 
                                 Aliquam erat volutpat. Morbi varius tincidunt sagittis. 
                            </p>
                        </div>
                        <div className='container2Btn'>
                            <Link to='/pages/about'>Learn more</Link>                 

                        </div>
                    </div>
                </div>
                <div className='circle'></div>
               </div>
               <div>
                 <Switch>
                       <Route path='/pages/about' exact component={About} />
                 </Switch>
               </div>
               </div>
            </Router>
        )
    }
}

export default Component2;
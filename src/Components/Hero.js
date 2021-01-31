import React, {Component} from "react";

export class Hero extends Component{
    render() {
        return (
          <div>
            <section id="main">
              <div className="main-text">
                <span> We Develop </span> <br /> Mobile and Web <br /> Apps...
              </div>
              <div className="text">
                <p>
                  At DigiMakers, It is our belief that each idea is unique and
                  we <br /> constantly strive to make it happen with our
                  creative and in <br /> novative solutions.
                </p>
              </div>
              <div className="btn">
                <button type="button">Get in touch</button>
              </div>
            </section>
          </div>
        );
    }
}


export default Hero

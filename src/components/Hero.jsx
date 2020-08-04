import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Hero extends Component {
  render(){
    return(
      <section className="hero">
        {/* <div className="sphere"> */}
          <div className="hero-text-box">
            <h1 id="hero-heading">
              WELCOME
            </h1>
            <h2 id="hero-subhead">
              I am a designer turned Web Developer, reinventing my skills
              in the pursuit of
              making beautiful things.
            </h2>
            <h2 id="last-line">
              Only now, I make them with code.
            </h2>
          </div>
        {/* </div> */}
      </section>
    )
  }
}
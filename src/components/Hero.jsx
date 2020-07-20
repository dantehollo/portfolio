import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Hero extends Component {
  render(){
    return(
      <section className="full-size">
        <div className="sphere"/>
        <div className="hero-text-box">
          <h1 className="hero-heading">
            Welcome
          </h1>
          <h2 className="hero-subhead">
            Designer turned Web Developer, reinventing and updating my skills
            in the pursuit of
            making beautiful things.
          </h2>
          <h2 className="last-line">
            Only now, I make them with code.
          </h2>
        </div>
      </section>
    )
  }
}
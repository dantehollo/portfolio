import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Hero extends Component {
  render(){
    return(
      <div className="full-size">
        <div className="hero-text-box">
          <h1 className="hero-heading">
            Welcome
          </h1>
          <p className="hero-paragraph">
            This is me, Matthew Caravaggio, ex-designer turned Web Developer,
            currently in the process of reinventing myself and updating my skill set
            in the pursuit of making beautiful things.
            Only now, I make them with code.
          </p>    
          <p className="hero-paragraph">
            I graduated from General Assembly's Atlana campus in December of 2019
            before the world blew up from their Software Engineering Immersive Program.
            My cohort mates and I spent three months working 50 hour weeks living and breathing MERN stack code.
            The end product were four projects, none of which I liked, so I made new ones.
            But enough about me...
          </p>
          <h2 className="last-line">
            <span>You're just here to see what I can do, aren't you?</span>
          </h2>
        </div>
      </div>
    )
  }
}
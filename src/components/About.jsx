import React, {Component} from 'react'
// import portrait from './images/portraits/me.jpg'

export default class About extends Component {
    render() {
        return(
            <div class="about">
                <div className="about-text-box">
                    DIV HERE
                    <h1 className="about-heading">
                        Hey there!
                    </h1>
                    <p className="about-paragraph">
                        This is me, Matthew Caravaggio, ex-designer turned Web Developer,
                        currently in the process of reinventing myself and updating my skill set
                        in the pursuit of making beautiful things.
                        Only now, I make them with code.
                    </p>    
                    <p className="about-paragraph">
                        I graduated from General Assembly's Atlana campus in December of 2019
                        before the world blew up from their Software Engineering Immersive Program.
                        My cohort mates and I spent three months working 50 hour weeks living and breathing MERN stack code.
                        The end product were four projects, none of which I liked, so I made new ones.
                        But enough about me...
                    </p>
                    <h1 className="about-heading">
                        <span>You're just here to see what I can do, aren't you?</span>
                    </h1>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import illustrator from './images/Favorites/icons8-adobe-illustrator-100.png'
import indesign from './images/Favorites/icons8-adobe-indesign-100.png'
import photoshop from './images/Favorites/icons8-adobe-photoshop-100.png'
import css3 from './images/Favorites/icons8-css3-100.png'
import git from './images/Favorites/icons8-git-100.png'
import html5 from './images/Favorites/icons8-html-5-100.png'
import mongoDB from './images/Favorites/icons8-mongodb-96.png'
import node from './images/Favorites/icons8-node-js-100.png'
import npm from './images/Favorites/icons8-npm-100.png'
import postgresql from './images/Favorites/icons8-postgresql-100.png'
import python from './images/Favorites/icons8-python-100.png'
import react from './images/Favorites/icons8-react-native-100.png'
import javascript from './images/Favorites/icons8-javascript-100(1).png'

export default class Skills extends Component {
    render() {
        return(
            <div className='skills-container'>
                <div className='skills-row'>
                    <div>
                        <img src={react} className='skill-image'/>
                    </div>
                    <div>
                        <img src={javascript} className='skill-image'/>
                    </div>
                    <div>
                        <img src={python} className='skill-image'/>
                    </div>
                    <div>
                        <img src={mongoDB} className='skill-image'/>
                    </div>
                    <div>
                        <img src={node} className='skill-image'/>
                    </div>
                </div>
                <div className='skills-row'>
                    <div>
                        <img src={npm} className='skill-image'/>
                    </div>
                    <div>
                        <img src={postgresql} className='skill-image'/>
                    </div>
                    <div>
                        <img src={git} className='skill-image'/>
                    </div>
                    <div>
                        <img src={html5} className='skill-image'/>
                    </div>
                    <div>
                        <img src={css3} className='skill-image'/>
                    </div>
                </div>
                <div className='skills-row'>
                    <div>
                        <img src={illustrator} className='skill-image'/>
                    </div>
                    <div>
                        <img src={photoshop} className='skill-image'/>
                    </div>
                    <div>
                        <img src={indesign} className='skill-image'/>
                    </div>
                </div>
            </div>
        )
    }
}
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
                <h1>Skills</h1>
                <div className='skills-row'>
                    <div className='image-container'>
                        <img src={react} className='skill-image' alt=""/>
                        <p className='icon-name'>React</p>
                    </div>
                    <div className='image-container'>
                        <img src={javascript} className='skill-image' alt=""/>
                        <p className='icon-name'>JavaScript</p>
                    </div>
                    <div className='image-container'>
                        <img src={python} className='skill-image' alt=""/>
                        <p className='icon-name'>Python</p>
                    </div>
                    <div className='image-container'>
                        <img src={mongoDB} className='skill-image' alt=""/>
                        <p className='icon-name'>MongoDB</p>
                    </div>
                    <div className='image-container'>
                        <img src={node} className='skill-image' alt=""/>
                        <p className='icon-name'>Node</p>
                    </div>
                </div>
                <div className='skills-row'>
                    <div className='image-container'>
                        <img src={npm} className='skill-image' alt=""/>
                        <p className='icon-name'>NPM</p>
                    </div>
                    <div className='image-container'>
                        <img src={postgresql} className='skill-image' alt=""/>
                        <p className='icon-name'>Postgresql</p>
                    </div>
                    <div className='image-container'>
                        <img src={git} className='skill-image' alt=""/>
                        <p className='icon-name'>Git</p>
                    </div>
                    <div className='image-container'>
                        <img src={html5} className='skill-image' alt=""/>
                        <p className='icon-name'>HTML5</p>
                    </div>
                    <div className='image-container'>
                        <img src={css3} className='skill-image' alt=""/>
                        <p className='icon-name'>CSS3</p>
                    </div>
                </div>
                <div className='skills-row'>
                    <div className='image-container'>
                        <img src={illustrator} className='skill-image' alt=""/>
                        <p className='icon-name'>Illustrator</p>
                    </div>
                    <div className='image-container'>
                        <img src={photoshop} className='skill-image' alt=""/>
                        <p className='icon-name'>Photoshop</p>
                    </div>
                    <div className='image-container'>
                        <img src={indesign} className='skill-image' alt=""/>
                        <p className='icon-name'>InDesign</p>
                    </div>
                </div>
            </div>
        )
    }
}
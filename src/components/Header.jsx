import React, {Component} from 'react'
import github from './images/Favorites/icons8-github-100.png'
import linkedin from './images/Favorites/icons8-linkedin-100.png'
import logoWhite from './images/logos/logos/personal-logo-white.png'


export default class Header extends Component {

    render(){
        return(
            <div className="header">
                <header id='header-wrapper'>
                    <div className='logo-container'>
                        <img src={logoWhite} className='logo-image' alt=""/>
                    </div>
                    <nav className='nav-container'>
                        <div className="nav-links">
                            <a href="https://github.com/dantehollo">
                                <img src={github}  alt='octocat' href='https://github.com/dantehollo?tab=repositories' className='nav-image'/>
                            </a>
                        </div>
                        <div className="nav-links">
                            <a href="https://www.linkedin.com/in/matthew-caravaggio/">
                                <img src={linkedin} href='https://www.linkedin.com/in/matthew-caravaggio/' alt='linkedin' className='nav-image'/>
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
import React, {Component} from 'react'
import github from './images/Favorites/icons8-github-100.png'
import linkedin from './images/Favorites/icons8-linkedin-100.png'
import logoWhite from './images/logos-20191211T134219Z-001/logos/personal-logo-white.png'


export default class Header extends Component {

    render(){
        return(
            <header className='header'>
                <div className='logo-container'>
                    <img src={logoWhite} className='logo-image'/>
                </div>
                <nav className='nav-container'>
                    <div className='nav-button'>
                        <h3>
                            About
                        </h3>
                    </div>
                    <div className='nav-button'>
                        <h3>
                            Skills
                        </h3>
                    </div>
                    <div className='nav-button'>
                        <h3>
                            Work
                        </h3>
                    </div>
                    <div>
                        <img src={github}  alt='octocat' href='https://github.com/dantehollo?tab=repositories' className='nav-image'/>
                    </div>
                    <div>
                        <img src={linkedin} href='https://www.linkedin.com/in/matthew-caravaggio/' alt='linkedin' className='nav-image'/>
                    </div>
                </nav>
            </header>
        )
    }
}
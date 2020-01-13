import React, {Component} from 'react'
import github from './images/Favorites/icons8-github-100.png'
import linkedin from './images/Favorites/icons8-linkedin-100.png'
import logoWhite from './images/logos/logos/personal-logo-white.png'


export default class Header extends Component {

    render(){
        return(
            <div class="wrapper">
                <header className='header'>
                    <div className='logo-container'>
                        <img src={logoWhite} className='logo-image'/>
                    </div>
                    <nav className='nav-container'>
                        <div>
                            <img src={github}  alt='octocat' href='https://github.com/dantehollo?tab=repositories' className='nav-image'/>
                        </div>
                        <div>
                            <img src={linkedin} href='https://www.linkedin.com/in/matthew-caravaggio/' alt='linkedin' className='nav-image'/>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
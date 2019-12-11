import React, {Component} from 'react'

export default class Header extends Component {

    render(){
        return(
            <header className='header'>
                <div className='logo-container'>
                    <img src='' />
                </div>
                <nav>
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
                    <div className='nav-button'>
                        <img src='src/images/Favorites/icons8-github-100.png' href=''/>
                    </div>
                    <div className='nav-button'>
                        <img src='' href=''/>
                    </div>
                </nav>
            </header>
        )
    }
}
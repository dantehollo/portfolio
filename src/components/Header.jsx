import React, {Component} from 'react'
import github from './images/Favorites/icons8-github-100.png'
import linkedin from './images/Favorites/icons8-linkedin-100.png'
import logoWhite from './images/logos/logos/personal-logo-white.png'


export default class Header extends Component {
    // toggle nav menu
    toggleNav = (e) => {
        e.preventDefault()
        const displayValue = document.getElementById("myLinks")
        if(displayValue.style.display === "block") {
            displayValue.style.display = "none"
            // console.log("tripped first")
        } else {
            displayValue.style.display = "block"
            // console.log("tripped second")
        }
    }
    render(){
        return(
            <div className="topnav">
                <a href="#home" className="active">
                    <img src={logoWhite} alt="Matthew's Logo" className="logo-image"/>
                </a>
                <div id="myLinks">
                    <a href="https://github.com/dantehollo">
                        <img className="" src={github} alt="octocat" className="logo-image"/>
                    </a>
                    <a href="https://github.com/dantehollo">
                        <img src={linkedin} alt="linkedin" className="logo-image"/>
                    </a>
                </div>
                <a className="icon" onClick={this.toggleNav}>
                    <div className="hamburger"/>
                    <div className="hamburger"/>
                    <div className="hamburger"/>
                </a>
            </div>
        )
    }
}
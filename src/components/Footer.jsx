import React, {Component} from 'react'

export default class Footer extends Component {
    blankSpace = " "
    render() {
        return (
            <footer className="footer-disclaimer">
                <p className="footer-text">
                    <a target="_blank" href="/icons/set/adobe-indesign">
                        Adobe Indesign
                    </a>
                    ,{this.blankSpace}
                    <a target="_blank" href="/icons/set/adobe-illustrator">
                        Adobe Illustrator{this.blankSpace}
                    </a>
                     and other icons by{this.blankSpace}
                    <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
                        Icons8.{this.blankSpace}
                    </a>
                    Site design by Matthew Caravaggio. All rights reseverd. Copyright 2020 &#169;. 
                </p>
            </footer>
        )
    }
}
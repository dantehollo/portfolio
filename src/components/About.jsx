import React, {Component} from 'react'
import portrait from './images/portraits/portrait.png'

export default class About extends Component {
    render() {
        return(
            <div class="three-column">
                <div>
                    {/* right info-block */}
                    <p>
                        Stuff and nonsense about myeslf that no one really cares about.
                    </p>
                </div>
                <div>
                    <img src={portrait} className='portrait'/>
                </div>
                <div>
                    {/* left info-block */}
                    <p>
                        Stuff and nonsense about myeslf that no one really cares about.
                    </p>
                </div>
            </div>
        )
    }
}
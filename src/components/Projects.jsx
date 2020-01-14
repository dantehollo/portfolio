import React, {Component} from 'react'

export default class Projects extends Component {
    render() {
        return(
            <div>
                <div className="project-nav">
                    <div className="proj-tabs">
                        <h2 className="tab-name">Developer</h2>
                    </div>
                    <div className="proj-tabs">
                        <h2 className="tab-name">Designer</h2>
                    </div>
                </div>
                <h2>Project Name</h2>
                <div className="proj-image">
                    <img src="" alt=""/>
                    <p>Project Description</p>
                </div>
            </div>
        )
    }
}
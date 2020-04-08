import React, {Component} from 'react'
import {designProjects} from '../components/Design'
import {developerProjects} from '../components/Developer'

export default class Projects extends Component {
    render() {
        const design = designProjects.map((project, index) => {
            return <div
                key={index}
                className="proj-container">
                <div className="proj-image-box">
                    <img className="proj-image" src={project.source} alt=""/>
                </div>
                <div className="proj-text-box">
                    <h2 className="proj-title">{project.title}</h2>
                    <p className="proj-description">{project.description}</p>
                </div>
            </div>
        })

        const developer = developerProjects.map((project, index) => {
            return <div
                key = {index}
                className="proj-container">
                <div className="proj-image-box">
                    <img className="proj-image" src={project.source} alt=""/>
                </div>
                <div className="proj-text-box">
                    <h2 className="proj-title">{project.title}</h2>
                    <p className="proj-description">{project.description}</p>
                </div>
            </div>
        })

        // onClick make the opposite gallery hidden and the active galery visible

        return(
            <div>
                <div className="proj-nav">
                    <div className="proj-tabs">
                        <h2 className="tab-name">Developer</h2>
                        <h2 className="tab-name">Designer</h2>
                    </div>
                </div>
                <div className="proj-gallery-box">
                    <div className="proj-designer-gallery-box">
                        {design}
                    </div>
                    <div className="proj-developer-gallery-box">
                        {developer}
                    </div>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import designProjects from 'Design'

export default class Projects extends Component {
    render() {
        const designProjects = designProjects.map((project, index) => {
            return <div
                title={project.title}
                image={project.image}
                description={project.description}
                key={index}>
                <h2>{title}</h2>
                <img scr={image} alt="and image of a project"/>
                <p>{description}</p>
            </div>
        })

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
                <div className="proj-image">
                    {designProjects}
                </div>
            </div>
        )
    }
}
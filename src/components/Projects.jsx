import React, {Component} from 'react'
import {designProjects} from '../components/Design'
import {developerProjects} from '../components/Developer'

export default class Projects extends Component {
    // create state
    constructor(props) {
        super(props)
        this.state = {
            developerGalleryIsHidden: false,
            designerGalleryIsHidden: true
        }
    }

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
                    <div>
                        <a href={project.repoLink} className="proj-link">
                            <p>Github</p>
                        </a>
                        <a href={project.herokuLink} className="proj-link">
                            <p>Live Site</p>
                        </a>
                    </div>
                </div>
            </div>
        })

        const toggleDeveloper = (e) => {
            e.preventDefault()
            if(this.state.developerGalleryIsHidden !== this.state.designerGalleryIsHidden) {
               
                // change display value
                document.getElementById("proj-developer-gallery-box").style.display = "block"
                document.getElementById("proj-designer-gallery-box").style.display = "none"

                // change the value of the state
                this.setState({developerGalleryIsHidden: !this.state.developerGalleryIsHidden,
                    designerGalleryIsHidden: !this.state.designerGalleryIsHidden})
            }
        }
    
        const toggleDesigner = (e) => {
            e.preventDefault()
            if(this.state.designerGalleryIsHidden !== this.state.developerGalleryIsHidden) {
                
                // change display value
                document.getElementById("proj-designer-gallery-box").style.display = "block"
                document.getElementById("proj-developer-gallery-box").style.display = "none"
                
                // change the value of the state
                this.setState({developerGalleryIsHidden: !this.state.developerGalleryIsHidden,
                    designerGalleryIsHidden: !this.state.designerGalleryIsHidden})
            }
        }
        
        return(
            <section id="project">
                <h1 className='heading'>Projects</h1>
                <div className="proj-nav">
                    <div className="proj-tabs">
                        <a href="#" onClick={toggleDeveloper}><h2 className="tab-name">Developer</h2></a>
                        <a href="#" onClick={toggleDesigner}><h2 className="tab-name">Designer</h2></a>
                    </div>
                </div>
                <div className="proj-gallery-box">
                    <div id="proj-designer-gallery-box">
                        {design}
                    </div>
                    <div id="proj-developer-gallery-box">
                        {developer}
                    </div>
                </div>
            </section>
        )
    }
}
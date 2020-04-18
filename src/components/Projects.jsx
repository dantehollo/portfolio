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
                </div>
            </div>
        })

        const toggleDeveloper = (e) => {
            e.preventDefault()
            if(this.state.developerGalleryIsHidden !== this.state.designerGalleryIsHidden) {
                document.getElementById("proj-developer-gallery-box").style.display = "block"
                document.getElementById("proj-designer-gallery-box").style.display = "none"
                this.setState({developerGalleryIsHidden: !this.state.developerGalleryIsHidden,
                    designerGalleryIsHidden: !this.state.designerGalleryIsHidden})
                console.log("if statement developer triggered")
            }
            console.log("developer is " + this.state.developerGalleryIsHidden)
            console.log("designer is " + this.state.designerGalleryIsHidden)
        }
    
        const toggleDesigner = (e) => {
            e.preventDefault()
            if(this.state.designerGalleryIsHidden !== this.state.developerGalleryIsHidden) {
                document.getElementById("proj-designer-gallery-box").style.display = "block"
                document.getElementById("proj-developer-gallery-box").style.display = "none"
                this.setState({developerGalleryIsHidden: !this.state.developerGalleryIsHidden,
                    designerGalleryIsHidden: !this.state.designerGalleryIsHidden})
                console.log("if statement for design triggered")
            }
            console.log("developer is " + this.state.developerGalleryIsHidden)
            console.log("designer is " + this.state.designerGalleryIsHidden)
        }
        
        return(
            <div>
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
            </div>
        )
    }
}
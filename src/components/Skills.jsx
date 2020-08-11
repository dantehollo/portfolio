import React, {Component} from 'react'
import {icon} from './Icons'


export default class Skills extends Component {
    render() {
        const iconsList = icon.map((iconImage, index) => {
            return <div
                key={index}
                className='image-container'>
                <img src={iconImage.source} className='skill-image' alt={iconImage.name}/>
                <p className='icon-name'>{iconImage.name}</p>
            </div>
            })

        return(
            <section className='skills-container'>
                <h1 className='heading'>Skills</h1>
                <div className='skill-icons'>
                    {iconsList}
                </div>
            </section>
        )
    }
}
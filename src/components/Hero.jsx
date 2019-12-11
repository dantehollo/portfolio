import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import logoMajor from './images/logos-20191211T134219Z-001/logos/logo-major-case.svg'

export default class Hero extends Component {
  render(){
    return(
      <Carousel>
      <Carousel.Item>
        <img
          className="image"
          src={logoMajor}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}
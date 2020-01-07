import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import logoMajor from './images/logos-20191211T134219Z-001/logos/logo-major-case.svg'
import projOne from './images/project-images/Screenshot from 2019-12-11 09-20-53.png'
import projFour from './images/project-images/Screenshot from 2019-12-11 09-54-40.png'

export default class Hero extends Component {
  render(){
    return(
      <Carousel>
      <Carousel.Item>
        <div class="full-size">
          {/* <img
            className="image"
            src={logoMajor}
            alt="First slide"
          /> */}
        </div>
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>Slide right to see some of my work</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
            src={projOne}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Blackjack</h3>
          <p>Vanilla Javascript web application of the classic game of 21.</p>
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
      <Carousel.Item>
        <img
          className="image"
          src={projFour}
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
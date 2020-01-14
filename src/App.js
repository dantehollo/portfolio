import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

class App extends React.Component {
  render() {   
    return (
      <div className="one-hundred">
        <Header/>
        <Hero/>
        <div className='wrapper'>
          <Skills/>
          <Projects/>
        </div>
      </div>
    )
  }
}

export default App;
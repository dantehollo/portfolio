import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

class App extends React.Component {
  render() {   
    return (
      <div className="one-hundred">
        <Header/>
        <Hero/>
        <div>
          <Skills/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
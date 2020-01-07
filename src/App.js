import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About'
import Skills from './components/Skills'

class App extends React.Component {
  render() {   
    return (
      <div className="reset">
        <Header/>
        <Hero/>
        <div className='wrapper'>
          <About/>
          <Skills/>
          {/* <Footer */}
        </div>
      </div>
    )
  }
}

export default App;
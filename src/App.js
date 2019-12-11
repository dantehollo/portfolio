import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';

class App extends React.Component {
  render() {   
    return (
      <div className='wrapper'>
        <Header/>
        <Hero/>
        {/* About */}
        {/* <Skills/> */}
        {/* <Footer */}
      </div>
    )
  }
}

export default App;